import Header from 'src/components/Header';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/router/routes';
import {
  Typography,
  Box,
  Container,
  Stack,
  Button,
} from '@mui/material';
import BookingForm from 'src/components/BookingForm';
import { useHome } from 'src/pages/Home/useHome';
import Loader from 'src/components/Loader';

const Home = () => {
  const { onSubmitForm, allDestinations } = useHome();

  if (!allDestinations || !allDestinations.length) {
    return (
      <Box sx={{ height: '100vh' }}>
        <Loader width="200" height="200" />
      </Box>
    );
  }

  return (
    <>
      <Header>
        <Stack spacing={2} direction="row">
          <Button
            component={NavLink}
            variant="contained"
            color="warning"
            to={Routes.HOME}
          >
            Home
          </Button>
          <Button
            component={NavLink}
            variant="contained"
            color="warning"
            to={Routes.ABOUT}
          >
            About
          </Button>
        </Stack>
      </Header>
      <Container maxWidth="xl">
        <Box sx={{ p: 3 }}>
          <Box sx={{ mb: 4 }}>
            <BookingForm onSubmitForm={onSubmitForm} allDestinations={allDestinations} />
          </Box>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Travel with
            {' '}
            <Typography variant="h3" component="span" sx={{ color: '#ed6c02' }}>
              Booking
            </Typography>
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            pellentesque nec tellus a dapibus. Nam commodo, tellus vitae porta
            efficitur, ipsum ligula finibus sem, eget aliquam tortor massa vel
            magna. Nulla facilisi. Donec volutpat urna a aliquet porttitor.
            Interdum et malesuada fames ac ante ipsum primis in faucibus.
            Quisque sagittis lacus in massa laoreet, et malesuada nunc molestie.
            Integer in pulvinar ipsum. Curabitur a est diam. Donec purus lorem,
            dapibus ac arcu sed, cursus accumsan nisl. Integer purus mauris,
            lacinia nec congue a, dictum vel dolor. Proin sed lobortis mauris.
            Vivamus lorem neque, aliquet quis mauris eget, placerat dapibus
            metus. Aenean nisi lorem, elementum et rutrum ut, aliquam nec justo.
            Sed faucibus tortor a nisi feugiat, ut ultricies dolor rutrum.
            Phasellus mi lectus, bibendum a erat a, molestie tincidunt augue.
            Suspendisse potenti. Pellentesque non purus ut ligula interdum
            tristique nec eget ex. Duis sed turpis ac justo maximus egestas vel
            non leo. Mauris condimentum nulla nec quam vehicula, sed ornare enim
            euismod. Cras ut est quis tortor ultrices vehicula. Pellentesque sed
            sollicitudin magna. Nulla convallis neque vitae sem iaculis, eget
            ultricies eros blandit. Sed posuere sollicitudin mauris, lobortis
            euismod nisi. Phasellus vel diam nec lectus tempus molestie eget
            fermentum est. Fusce quis mauris nec felis aliquam luctus ut vel
            ante.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Home;
