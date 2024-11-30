import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MatchCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="soccer-field-1.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sábado 07 de Diciembre
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Partido amistoso de la promoción 2013 de la Universidad Nacional de Ingeniería
        </Typography>
        <Typography variant="h5" component="div">
          Campo de Marte
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>11:00 AM</Typography>
        <Typography variant="body2">
          Equipos de 6 vs 6
          <br />
          {'s/. 11.00'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Jugar</Button>
        <Button size="small">Más detalles</Button>
      </CardActions>
    </Card>
  );
}
