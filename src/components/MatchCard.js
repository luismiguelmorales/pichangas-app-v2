import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MatchCard({ match }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="soccer-field-1.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {match.date}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {match.description}
        </Typography>
        <Typography variant="h5" component="div">
          {match.location}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>11:00 AM</Typography>
        <Typography variant="body2">
          Equipos de {match.teamSize} vs {match.teamSize}
          <br />
          {`s/. ${match.price}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Jugar</Button>
        <Button size="small">Más detalles</Button>
      </CardActions>
    </Card>
  );
}
