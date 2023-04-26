import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';

const HotelImageDefault = require('src/images/hotel-default.jpg');

type HotelCardProps = {
  id: string
  name: string;
  address: string;
  city: string;
  state: string | null;
  openHotelDetails: (id: string) => void
};

const HotelCard = ({
  id = '',
  name = '',
  address = '',
  city = '',
  state = '',
  openHotelDetails = () => {},
}: HotelCardProps): JSX.Element => (
  <Card onClick={() => openHotelDetails(id)}>
    <CardActionArea>
      <CardMedia component="img" height="140" image={HotelImageDefault} alt="green iguana" />
      <CardContent sx={{ minHeight: '200px' }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ minHeight: '80px' }}>
          {name}
        </Typography>
        {address && (
          <Stack spacing={1} direction="row">
            <Typography variant="body2" color="#000000">
              Address:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {address}
            </Typography>
          </Stack>
        )}
        {city && (
        <Stack spacing={1} direction="row">
          <Typography variant="body2" color="#000000">
            City:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {city}
          </Typography>
        </Stack>
        )}
        {state && (
        <Stack spacing={1} direction="row">
          <Typography variant="body2" color="#000000">
            State:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {state}
          </Typography>
        </Stack>
        )}
      </CardContent>
    </CardActionArea>
  </Card>
);

export default HotelCard;
