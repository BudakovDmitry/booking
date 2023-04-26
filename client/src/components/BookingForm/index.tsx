import { Form, Field } from 'react-final-form';
import * as Styled from 'src/components/BookingForm/styles';
import dayjs from 'dayjs';
import {
  Box,
  Button,
  Grid,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
} from '@mui/material';
import { useBookingForm } from 'src/components/BookingForm/useBookingForm';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DestinationType, FormValuesType } from 'src/types';

const initialValues = {
  checkIn: dayjs(),
  checkOut: dayjs(),
};

type BookingFormProps = {
  allDestinations: DestinationType[]
  onSubmitForm: (values: FormValuesType) => Promise<void>;
};

const BookingForm = ({ onSubmitForm, allDestinations }: BookingFormProps): JSX.Element => {
  const { validate } = useBookingForm();

  return (
    <Form
      onSubmit={onSubmitForm}
      validate={validate}
      initialValues={initialValues}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Field name="destination">
                {({ input, meta }) => (
                  <Box sx={{ position: 'relative' }}>
                    <FormControl fullWidth>
                      <InputLabel id="destination_select_label">Destination*</InputLabel>
                      <Select
                        sx={{ width: '100%' }}
                        labelId="destination_select_label"
                        id="destination_select"
                        {...input}
                        label="Destination*"
                      >
                        {allDestinations.map((destination: DestinationType) => (
                          <MenuItem key={destination.id} value={destination.label}>
                            {destination.label}
                          </MenuItem>
                        ))}
                      </Select>
                      {meta.touched && meta.error && (
                        <Styled.ErrorMessage>{meta.error}</Styled.ErrorMessage>
                      )}
                    </FormControl>
                  </Box>
                )}
              </Field>
            </Grid>
            <Grid item xs={3}>
              <Field name="checkIn">
                {({ input, meta }) => (
                  <Box sx={{ position: 'relative' }}>
                    <DatePicker sx={{ width: '100%' }} label="Check In" disablePast {...input} />
                    {meta.touched && meta.error && (
                      <Styled.ErrorMessage>{meta.error}</Styled.ErrorMessage>
                    )}
                  </Box>
                )}
              </Field>
            </Grid>
            <Grid item xs={3}>
              <Field name="checkOut">
                {({ input, meta }) => (
                  <Box sx={{ position: 'relative' }}>
                    <DatePicker sx={{ width: '100%' }} label="Check Out" disablePast {...input} />
                    {meta.touched && meta.error && (
                      <Styled.ErrorMessage>{meta.error}</Styled.ErrorMessage>
                    )}
                  </Box>
                )}
              </Field>
            </Grid>
            <Grid item xs={1}>
              <Field name="adults">
                {({ input, meta }) => (
                  <Box sx={{ position: 'relative' }}>
                    <TextField label="Adults" variant="outlined" {...input} />
                    {meta.touched && meta.error && (
                      <Styled.ErrorMessage>{meta.error}</Styled.ErrorMessage>
                    )}
                  </Box>
                )}
              </Field>
            </Grid>
            <Grid item xs={1}>
              <Field name="children">
                {({ input, meta }) => (
                  <Box sx={{ position: 'relative' }}>
                    <TextField label="Children" variant="outlined" {...input} />
                    {meta.touched && meta.error && (
                      <Styled.ErrorMessage>{meta.error}</Styled.ErrorMessage>
                    )}
                  </Box>
                )}
              </Field>
            </Grid>
            <Grid item xs={1}>
              <Button
                sx={{ height: '100%' }}
                variant="contained"
                color="warning"
                type="submit"
                size="large"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
};

export default BookingForm;
