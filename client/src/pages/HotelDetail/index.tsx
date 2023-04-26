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
// import { useHotelDetail } from 'src/pages/HotelDetail/useHotelDetail';

const HotelDetail = () => (
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
      <Breadcrumbs
        crumbs={[
          { label: CrumbName.HOME, path: Routes.HOME },
          {
            label: CrumbName.HOTELS,
            path: Routes.HOTELS,
          },
          {
            label: '12421',
            path: '/124',
          },
        ]}
      />
      <Box>
        Hotel Detail
      </Box>
    </Container>
  </>
);

export default HotelDetail;
