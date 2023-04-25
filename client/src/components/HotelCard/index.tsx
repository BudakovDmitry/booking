import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const HotelImageDefault = require('src/images/hotel-default.jpg');

type HotelCardProps = {
  name: string;
  address: string;
  city: string;
  state: string | null;
};

const HotelCard = ({
  name = '',
  address = '',
  city = '',
  state = '',
}: HotelCardProps) => (
  <Card>
    <CardActionArea>
      <CardMedia component="img" height="140" image={HotelImageDefault} alt="green iguana" />
      <CardContent sx={{ minHeight: '200px' }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ minHeight: '80px' }}>
          {name}
        </Typography>
        {address && (
          <Typography variant="body2" color="text.secondary">
            address:
            {address}
          </Typography>
        )}
        {city && (
          <Typography variant="body2" color="text.secondary">
            city:
            {city}
          </Typography>
        )}
        {state && (
          <Typography variant="body2" color="text.secondary">
            state:
            {state}
          </Typography>
        )}
      </CardContent>
    </CardActionArea>
  </Card>
);

export default HotelCard;
