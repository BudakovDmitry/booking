import { FormErrors, FormValuesType, FormErrorsType } from 'src/types'

export const useBookingForm = () => {

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
        onSubmit
    }
}
