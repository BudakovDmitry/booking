import { Endpoints } from 'src/utils/endpoints';
import { get } from 'src/api';
import { usePage } from 'src/hooks/usePage';
import { HotelType } from 'src/types';
import { useState, useEffect } from 'react';

export const useHotelDetail = () => {
  const { params } = usePage();
  const [hotel, setHotel] = useState<HotelType>({} as HotelType);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    get(`${Endpoints.HOTELS}/${params.id}`).then((response) => {
      setIsLoading(false);
      setHotel(response.data);
    });
  }, []);

  return {
    hotel,
    isLoading,
  };
};
