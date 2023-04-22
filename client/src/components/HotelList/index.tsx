import { Box, Grid } from '@mui/material'
import HotelCard from 'src/components/HotelCard'

const HotelList = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <HotelCard />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default HotelList