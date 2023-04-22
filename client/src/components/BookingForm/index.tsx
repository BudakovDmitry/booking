import { Form, Field } from 'react-final-form'
import { useState } from 'react'
import {
  Typography,
  Box,
  Container,
  Button,
  Grid,
  Select,
  MenuItem,
  Input,
  TextField,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'

const BookingForm = () => {
  const [age, setAge] = useState('0')
  const onSubmit = async values => {
    console.log(JSON.stringify(values))
  }

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }
  return (
    <Form
      onSubmit={onSubmit}
      // validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Field name="destination">
                {({ input, meta }) => (
                  <Select
                    sx={{ width: '200px' }}
                    id="demo-simple-select"
                    {...input}
                    value={age}
                  >
                    <MenuItem disabled value={0}>
                      Destination
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                )}
              </Field>
            </Grid>
            <Grid item xs={3}>
              <Field name="checkIn">
                {({ input, meta }) => (
                  <TextField
                    placeholder="Check In"
                    variant="outlined"
                    {...input}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={3}>
              <Field name="checkOut">
                {({ input, meta }) => (
                  <TextField
                    placeholder="Check Out"
                    variant="outlined"
                    {...input}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={1}>
              <Field name="adults">
                {({ input, meta }) => (
                  <TextField
                    placeholder="Adults"
                    variant="outlined"
                    {...input}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={1}>
              <Field name="children">
                {({ input, meta }) => (
                  <TextField
                    placeholder="Children"
                    variant="outlined"
                    {...input}
                  />
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
  )
}

export default BookingForm
