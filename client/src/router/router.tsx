import { createHashRouter } from 'react-router-dom';
import { Routes } from 'src/router/routes';
import Error from 'src/pages/Error';
import Home from 'src/pages/Home';
import About from 'src/pages/About';
import Hotels from 'src/pages/Hotels';

export const router = createHashRouter([
  {
    path: Routes.HOME,
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: Routes.ABOUT,
    element: <About />,
  },
  {
    path: Routes.HOTELS,
    element: <Hotels />,
  },
]);
