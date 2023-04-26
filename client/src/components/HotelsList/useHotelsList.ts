import { useSelector } from 'react-redux';
import { usePage } from 'src/hooks/usePage';
import { RootStateType, HotelsStateType } from 'src/types';
import { Routes } from 'src/router/routes';

export const useHotelsList = () => {
  const { hotels, succeeded } = useSelector<RootStateType, HotelsStateType>(
    (state: RootStateType) => state.hotelsReducer,
  );

  const { navigate, params } = usePage();

  const openHotelDetails = (id: string) => navigate(`${Routes.HOTELS}/${params.destination}/${id}`);

  return {
    hotels,
    openHotelDetails,
    succeeded,
  };
};
