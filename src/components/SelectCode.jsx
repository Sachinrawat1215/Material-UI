import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

const SelectCode = () => {
  const [country, setcountry] = React.useState("");

  console.log(country);

  const handleChange = (e) => {
    setcountry(e.target.value);
  }

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        helperText="Please select your country"
        error
      >
        <MenuItem value='IN'>India</MenuItem>
        <MenuItem value='US'>USA</MenuItem>
        <MenuItem value='AU'>Australia</MenuItem>
      </TextField>
    </Box>
  )
}

export default SelectCode