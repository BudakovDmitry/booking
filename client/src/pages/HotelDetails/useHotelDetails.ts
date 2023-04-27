import { Endpoints } from 'src/utils/endpoints';
import { get } from 'src/api';
import { usePage } from 'src/hooks/usePage';
import { HotelType } from 'src/types';
import { useState, useEffect } from 'react';
import { setHotels } from 'src/redux/actions/hotelsActions';

export const useHotelDetails = () => {
  const { dispatch, params } = usePage();
  const [hotel, setHotel] = useState<HotelType>({} as HotelType);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const clearHotels = (): void => {
    dispatch(setHotels([] as HotelType[]));
  };

  useEffect(() => {
    get(`${Endpoints.HOTELS}/${params.id}`).then((response) => {
      setIsLoading(false);
      setHotel(response.data);
    });
  }, []);

  return {
    hotel,
    isLoading,
    params,
    clearHotels,
  };
};
