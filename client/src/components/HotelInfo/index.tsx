import * as Styled from 'src/components/HotelInfo/styles';
import {
  Container,
  Rating,
  Stack,
  Typography,
  Box,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

const HotelImageDefault = require('src/images/hotel-default.jpg');

type HotelInfoProps = {
  name: string
  rating: number | null
  city: string
  phoneNumber: string | null
  address: string
};

const HotelInfo = ({
  name = '',
  rating = 0,
  city = '',
  phoneNumber = '',
  address = '',
}: HotelInfoProps): JSX.Element => (
  <Styled.HotelContainer>
    <Styled.HotelImageContainer>
      <Styled.HotelImage src={HotelImageDefault} />
    </Styled.HotelImageContainer>
    <Container maxWidth="xl">
      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        sx={{ mb: '20px' }}
      >
        <Styled.HotelName>{name}</Styled.HotelName>
        {rating && <Rating name="read-only" value={rating} readOnly />}
      </Stack>
      <Box sx={{
        display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center',
      }}
      >
        {city && (
        <Typography sx={{ fontSize: 20, my: '5px' }} variant="body2" color="text.secondary">
          {city}
        </Typography>
        )}
        {address && (
        <Typography sx={{ fontSize: 20, my: '5px' }} variant="body2" color="text.secondary">
          {address}
        </Typography>
        )}
        {phoneNumber && (
        <Typography sx={{ fontSize: 20, my: '5px' }} variant="body2" color="text.secondary">
          <PhoneIcon fontSize="small" sx={{ mr: 2 }} />
          {phoneNumber}
        </Typography>
        )}
      </Box>
    </Container>
  </Styled.HotelContainer>
);

export default HotelInfo;
