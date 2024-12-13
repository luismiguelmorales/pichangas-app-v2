import './App.css';
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
import playersPerTeam from './playersPerTeam';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function App() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
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
      <Button variant="outlined">Aplicar filtros</Button>
    </div>
  );
}
