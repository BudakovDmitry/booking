import Header from 'src/components/Header'
import { NavLink } from 'react-router-dom'
import { Routes } from 'src/router/routes'
import { Typography, Box, Container, Stack, Button } from '@mui/material'
import HotelList from 'src/components/HotelList'

const Hotels = () => {
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
          <Typography variant="h3" sx={{ mb: 2 }}>
            Hotels
          </Typography>
          <HotelList />
        </Box>
      </Container>
    </>
  )
}

export default Hotels
