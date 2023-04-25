import {
  FormErrors, FormValuesType, FormErrorsType, DestinationType, RootStateType,
} from 'src/types';
import { usePage } from 'src/hooks/usePage';
import { useEffect } from 'react';
import { getDestinationsRequested } from 'src/redux/actions/destinationsActions';
import { useSelector } from 'react-redux';

export const useBookingForm = () => {
  const { dispatch } = usePage();
  const allDestinations: DestinationType[] = useSelector<RootStateType, DestinationType[]>(
    (state: RootStateType) => state.destinationsReducer.destinations,
  );

  useEffect(() => {
    dispatch(getDestinationsRequested());
  }, []);

  const validate = (values: FormValuesType):FormErrorsType => {
    const errors = {} as FormErrorsType;

    if (!values.destination) {
      errors.destination = FormErrors.REQUIRED;
    }
    return errors;
  };

  return {
    validate,
    allDestinations,
  };
};
