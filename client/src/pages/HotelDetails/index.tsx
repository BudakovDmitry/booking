import Header from 'src/components/Header';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/router/routes';
import {
  Box,
  Container,
  Stack,
  Button,
} from '@mui/material';
import Breadcrumbs from 'src/components/Breadcrumbs';
import { CrumbName } from 'src/types';
import { useHotelDetails } from 'src/pages/HotelDetails/useHotelDetails';
import Loader from 'src/components/Loader';
import HotelInfo from 'src/components/HotelInfo';

const HotelDetails = () => {
  const {
    hotel, isLoading, params, clearHotels,
  } = useHotelDetails();

  return (
    <>
      <Header>
        <Stack spacing={2} direction="row">
          <Button
            component={NavLink}
            variant="contained"
            color="warning"
            to={Routes.HOME}
            onClick={clearHotels}
          >
            Home
          </Button>
          <Button
            component={NavLink}
            variant="contained"
            color="warning"
            to={Routes.ABOUT}
            onClick={clearHotels}
          >
            About
          </Button>
        </Stack>
      </Header>
      {isLoading ? (
        <Box sx={{ mt: '100px' }}>
          <Loader width="200" height="200" />
        </Box>
      ) : (
        <Box>
          <Container maxWidth="xl">
            <Breadcrumbs
              crumbs={[
                { label: CrumbName.HOME, path: Routes.HOME },
                {
                  label: `${CrumbName.HOTELS} in ${params.destination}`,
                  path: `${Routes.HOTELS}/${params.destination}`,
                },
                {
                  label: hotel.name,
                  // eslint-disable-next-line no-underscore-dangle
                  path: `${Routes.HOTELS}/${params.destination}/${hotel._id}`,
                },
              ]}
            />
          </Container>
          <Box>
            <HotelInfo
              name={hotel.name}
              rating={hotel.hotel_rating}
              city={hotel.city}
              address={hotel.address}
              phoneNumber={hotel.phone_number}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default HotelDetails;
