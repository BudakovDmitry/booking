import { usePage } from 'src/hooks/usePage';
import { useSelector } from 'react-redux';
import {
  RootStateType,
  FormValuesType,
  HotelsStateType,
  DestinationType,
} from 'src/types';
import { getHotelsRequested } from 'src/redux/actions/hotelsActions';
import { Routes } from 'src/router/routes';
import { useEffect, useState } from 'react';
import { getDestinationsRequested } from 'src/redux/actions/destinationsActions';

export const useHome = () => {
  const { dispatch, navigate } = usePage();
  const { hotels, pending, error } = useSelector<RootStateType, HotelsStateType>(
    (state: RootStateType) => state.hotelsReducer,
  );
  const allDestinations: DestinationType[] = useSelector<RootStateType, DestinationType[]>(
    (state: RootStateType) => state.destinationsReducer.destinations,
  );
  const [selectDestination, setSelectDestination] = useState<string>('');

  const onSubmitForm = async (values: FormValuesType): Promise<void> => {
    dispatch(getHotelsRequested(values.destination));
    setSelectDestination(values.destination);
  };

  useEffect(() => {
    dispatch(getDestinationsRequested());
  }, []);

  useEffect(() => {
    if (hotels && hotels.length) {
      navigate(`${Routes.HOTELS}/${selectDestination}`);
    }
  }, [hotels]);

  return {
    onSubmitForm,
    hotels,
    pending,
    error,
    allDestinations,
  };
};
