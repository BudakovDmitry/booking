import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

type HotelCardProps = {
  name: string
  address: string
  city: string
  state: string
}

const HotelCard = ({
  name = '',
  address = '',
  city = '',
  state = '',
}: HotelCardProps) => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            address: {address}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            city: {city}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            state: {state}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default HotelCard
