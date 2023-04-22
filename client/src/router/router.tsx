import { createHashRouter } from 'react-router-dom'
import Error from 'src/pages/Error'
import Home from 'src/pages/Home'

export const router = createHashRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
])
