import Header from 'src/components/Header';
import { NavLink } from 'react-router-dom';
import { Routes } from 'src/router/routes';
import {
  Typography,
  Box,
  Container,
  Button,
  Stack,
} from '@mui/material';
import Breadcrumbs from 'src/components/Breadcrumbs';
import { CrumbName } from 'src/types';

const About = () => (
  <>
    <Header>
      <Stack spacing={2} direction="row">
        <Button component={NavLink} variant="contained" color="warning" to={Routes.HOME}>
          Home
        </Button>
        <Button component={NavLink} variant="contained" color="warning" to={Routes.ABOUT}>
          About
        </Button>
      </Stack>
    </Header>
    <Container maxWidth="xl">
      <Breadcrumbs
        crumbs={[
          { label: CrumbName.HOME, path: Routes.HOME },
          {
            label: CrumbName.ABOUT,
            path: Routes.ABOUT,
          },
        ]}
      />
      <Box sx={{ p: 3 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>
          About
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque nec tellus a
          dapibus. Nam commodo, tellus vitae porta efficitur, ipsum ligula finibus sem, eget aliquam
          tortor massa vel magna. Nulla facilisi. Donec volutpat urna a aliquet porttitor. Interdum
          et malesuada fames ac ante ipsum primis in faucibus. Quisque sagittis lacus in massa
          laoreet, et malesuada nunc molestie. Integer in pulvinar ipsum. Curabitur a est diam.
          Donec purus lorem, dapibus ac arcu sed, cursus accumsan nisl. Integer purus mauris,
          lacinia nec congue a, dictum vel dolor. Proin sed lobortis mauris. Vivamus lorem neque,
          aliquet quis mauris eget, placerat dapibus metus. Aenean nisi lorem, elementum et rutrum
          ut, aliquam nec justo. Sed faucibus tortor a nisi feugiat, ut ultricies dolor rutrum.
          Phasellus mi lectus, bibendum a erat a, molestie tincidunt augue. Suspendisse potenti.
          Pellentesque non purus ut ligula interdum tristique nec eget ex. Duis sed turpis ac justo
          maximus egestas vel non leo. Mauris condimentum nulla nec quam vehicula, sed ornare enim
          euismod. Cras ut est quis tortor ultrices vehicula. Pellentesque sed sollicitudin magna.
          Nulla convallis neque vitae sem iaculis, eget ultricies eros blandit. Sed posuere
          sollicitudin mauris, lobortis euismod nisi. Phasellus vel diam nec lectus tempus molestie
          eget fermentum est. Fusce quis mauris nec felis aliquam luctus ut vel ante. Quisque
          pharetra imperdiet turpis, ac ultricies nibh blandit in. Etiam sed lorem aliquet, interdum
          justo ac, venenatis arcu. Integer lorem augue, tristique eu quam ullamcorper, venenatis
          sagittis velit. Aenean sit amet orci ultrices, dapibus odio malesuada, tristique arcu.
          Quisque dictum nulla imperdiet risus consequat imperdiet. Ut vitae leo sed augue lacinia
          porttitor a ac justo. Integer pharetra a augue eu posuere. Integer pharetra turpis enim,
          id accumsan sapien feugiat non. Morbi nec ornare diam, non maximus ligula. Nulla arcu
          tellus, eleifend sed mollis id, tincidunt a mi. Maecenas nisl libero, porta eget est a,
          porta imperdiet enim. Nulla facilisi. Aenean ac sem a risus elementum placerat. Aliquam
          quis tempus odio. Donec odio nibh, interdum porttitor tincidunt at, mollis faucibus metus.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Fusce nec tristique quam. Vivamus consectetur justo quis justo convallis laoreet nec id
          nisi. Phasellus ut fermentum lorem. Phasellus odio massa, posuere egestas mattis eu,
          faucibus ac nulla. Ut convallis arcu ac augue ornare sagittis sed eget ligula. Sed iaculis
          tempor arcu. Integer non bibendum tortor. Nulla sit amet dapibus elit, a pellentesque
          enim. Phasellus sed mi condimentum, ullamcorper mauris et, dictum ligula. Integer egestas
          risus ut dolor bibendum pharetra. Aenean ut odio id metus gravida pharetra. Praesent sit
          amet scelerisque odio. Mauris nec nisi quis metus volutpat tempor id quis ante. Cras est
          erat, aliquet vitae urna ullamcorper, venenatis tincidunt odio.
        </Typography>
      </Box>
    </Container>
  </>
);

export default About;
