import { Grid } from '@mui/material';
import { useHotelsList } from 'src/components/HotelsList/useHotelsList';
import HotelCard from 'src/components/HotelCard';
import Loader from 'src/components/Loader';
import { HotelType } from 'src/types';

const HotelsList = (): JSX.Element => {
  const { allHotels, openHotelDetails } = useHotelsList();

  if (!allHotels || !allHotels.length) {
    return <Loader width="200" height="200" />;
  }

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} direction="row">
      {allHotels.map((hotel: HotelType) => (
        <Grid item xs={2} sm={4} md={4} key={hotel.id}>
          <HotelCard
            // eslint-disable-next-line no-underscore-dangle
            id={hotel._id}
            name={hotel.name}
            address={hotel.address}
            city={hotel.city}
            state={hotel.state}
            openHotelDetails={openHotelDetails}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default HotelsList;
