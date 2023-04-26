import { useSelector } from 'react-redux';
import { usePage } from 'src/hooks/usePage';
import { HotelType, RootStateType } from 'src/types';
import { Routes } from 'src/router/routes';

export const useHotelsList = () => {
  const allHotels: HotelType[] = useSelector<RootStateType, HotelType[]>(
    (state: RootStateType) => state.hotelsReducer.hotels,
  );

  const { navigate, params } = usePage();

  const openHotelDetails = (id: string) => navigate(`${Routes.HOTELS}/${params.destination}/${id}`);

  return {
    allHotels,
    openHotelDetails,
  };
};
