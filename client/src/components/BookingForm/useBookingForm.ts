import { FormErrors, FormValuesType, FormErrorsType } from 'src/types'
import { usePage } from 'src/hooks/usePage'
import { useEffect } from 'react';
import { fetchDestinations } from 'src/redux/actions/destinationsActions';
import { useSelector } from "react-redux";
import { DestinationType, RootStateType } from 'src/types'


export const useBookingForm = () => {
  const { dispatch } = usePage();
  const allDestinations: DestinationType[] = useSelector((state: RootStateType) => {
    console.log(state.destinationsReducer)
    return state.destinationsReducer.destinations
  })
  

  console.log(allDestinations)

  useEffect(() => {
    dispatch(fetchDestinations())
  }, [])

  const onSubmit = async (values: FormValuesType) => {
    console.log(JSON.stringify(values))
  }

  const validate = (values: FormValuesType):FormErrorsType => {
    const errors = {} as FormErrorsType

    if (!values.destination) {
      errors.destination = FormErrors.REQUIRED
    }
    return errors
  }

  return {
      validate,
      onSubmit,
      allDestinations
  }
}
