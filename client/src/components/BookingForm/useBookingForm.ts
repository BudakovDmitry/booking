import {
  FormErrors, FormValuesType, FormErrorsType,
} from 'src/types';

export const useBookingForm = () => {
  const validate = (values: FormValuesType):FormErrorsType => {
    const errors = {} as FormErrorsType;

    if (!values.destination) {
      errors.destination = FormErrors.REQUIRED;
    }
    return errors;
  };

  return {
    validate,
  };
};
