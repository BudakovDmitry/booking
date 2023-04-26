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
import { useHotelDetail } from 'src/pages/HotelDetail/useHotelDetail';
import Loader from 'src/components/Loader';
import HotelInfo from 'src/components/HotelInfo';

const HotelDetail = () => {
  const { hotel, isLoading } = useHotelDetail();
  console.log(hotel);

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
      {isLoading ? <Loader width="200" height="200" /> : (
        <Box>
          <Container maxWidth="xl">
            <Breadcrumbs
              crumbs={[
                { label: CrumbName.HOME, path: Routes.HOME },
                {
                  label: CrumbName.HOTELS,
                  path: Routes.HOTELS,
                },
                {
                  label: hotel.name,
                  // eslint-disable-next-line no-underscore-dangle
                  path: `${Routes.HOTELS}/${hotel._id}`,
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

export default HotelDetail;
