import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const HotelCard = () => {
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
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            address: {'Semaforna'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            city: {'Dnipro'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            state: {'Ukraine'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default HotelCard
