import { Typography, Box } from '@mui/material';

const HotelsEmpty = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
    <Typography variant="h4">Sorry, there are no hotels in this city</Typography>
  </Box>
);

export default HotelsEmpty;
