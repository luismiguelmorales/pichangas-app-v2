import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function PlayerForm({ setFormOpen }) {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., send data to a server
    console.log(formData);
    setFormOpen(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        variant="outlined"
        margin="normal"
        fullWidth
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        margin="normal"
        fullWidth
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        variant="outlined"
        margin="normal"
        fullWidth
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        label="Phone Number"
        variant="outlined"
        margin="normal"
        fullWidth
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
}

export default PlayerForm;