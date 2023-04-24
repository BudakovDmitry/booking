import { FormErrors, FormValuesType, FormErrorsType } from 'src/types'
import { usePage } from 'src/hooks/usePage'
import { useEffect } from 'react';
import { fetchDestinations } from 'src/redux/actions/destinationsActions';
import { useSelector } from "react-redux";
import { DestinationType, RootStateType } from 'src/types'


export const useBookingForm = () => {
  const { dispatch } = usePage();
  const allDestinations: DestinationType[] = useSelector((state: RootStateType) => state.destinationsReducer.destinations)

  useEffect(() => {
    dispatch(fetchDestinations())
  }, [])


  const validate = (values: FormValuesType):FormErrorsType => {
    const errors = {} as FormErrorsType

    if (!values.destination) {
      errors.destination = FormErrors.REQUIRED
    }
    return errors
  }

  return {
      validate,
      allDestinations
  }
}
