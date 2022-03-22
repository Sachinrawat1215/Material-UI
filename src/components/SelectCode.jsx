import React, { useState } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

const SelectCode = () => {
  const [country, setcountry] = useState("");

  console.log(country);

  const handleChange = (e) => {
    setcountry(e.target.value);
  }

  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        // this will make it select field
        select
        value={country}
        onChange={handleChange}
        // it will assign full widht
        fullWidth
        helperText="Please select your country"
        // this will show field as error
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