import './Games.css';
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import playersPerTeam from '../playersPerTeam';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Games() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
      <Stack spacing={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker label="Escoja una fecha" />
          </DemoContainer>
        </LocalizationProvider>
        <Switch {...label} />
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
        >
          <ToggleButton value="1">1km</ToggleButton>
          <ToggleButton value="3">3km</ToggleButton>
          <ToggleButton value="5">5km</ToggleButton>
          <ToggleButton value="10">10km</ToggleButton>
          <ToggleButton value="30">30km</ToggleButton>
        </ToggleButtonGroup>
        <Autocomplete
          disablePortal
          options={playersPerTeam}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="" />}
        />
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="No partidos completos" />
          <FormControlLabel control={<Checkbox />} label="A puerta cerrada" />
          <FormControlLabel control={<Checkbox />} label="Sesión de entrenamiento" />
        </FormGroup>

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Online" />
            <FormControlLabel value="male" control={<Radio />} label="En efectivo" />
            <FormControlLabel value="other" control={<Radio />} label="Gratis" />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Mujeres" />
            <FormControlLabel value="male" control={<Radio />} label="Hombres" />
          </RadioGroup>
        </FormControl>

        <Button variant="outlined">Aplicar filtros</Button>
      </Stack>
    </Box>
  );
}
