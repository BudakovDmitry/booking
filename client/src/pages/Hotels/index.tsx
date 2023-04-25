import Header from 'src/components/Header'
import { NavLink } from 'react-router-dom'
import { Routes } from 'src/router/routes'
import { Typography, Box, Container, Stack, Button } from '@mui/material'
import HotelsList from 'src/components/HotelsList'
import { useHotels } from 'src/pages/Hotels/useHotels'

const Hotels = () => {
  const { clearHotels } = useHotels()

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
        <Box sx={{ p: 3 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Hotels
          </Typography>
          <HotelsList />
        </Box>
      </Container>
    </>
  )
}

export default Hotels
