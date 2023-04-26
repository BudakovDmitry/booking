import Header from 'src/components/Header';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/router/routes';
import {
  Box,
  Container,
  Stack,
  Button,
} from '@mui/material';
import HotelsList from 'src/components/HotelsList';
import { useHotels } from 'src/pages/Hotels/useHotels';
import Breadcrumbs from 'src/components/Breadcrumbs';
import { CrumbName } from 'src/types';

const Hotels = () => {
  const { clearHotels } = useHotels();

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
      <Container maxWidth="xl">
        <Breadcrumbs
          crumbs={[
            { label: CrumbName.HOME, path: Routes.HOME },
            {
              label: CrumbName.HOTELS,
              path: Routes.HOTELS,
            },
          ]}
        />
        <Box sx={{ p: 3 }}>
          <HotelsList />
        </Box>
      </Container>
    </>
  );
};

export default Hotels;
