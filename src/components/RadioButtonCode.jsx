import React, { useState } from 'react'
import { Stack, FormControl, FormControlLabel, RadioGroup, Radio, FormLabel } from '@mui/material';

const RadioButtonCode = () => {
    const [value, setvalue] = useState("");
    console.log(value);

    const handleChange = (e) => {
        setvalue(e.target.value);
    }

    return (
        <Stack spacing={2} direction="row">
            {/* FormControl helps to select one option at a time */}
            <FormControl
                // this will show field as error
                error
            >
                <FormLabel id="job-experience">
                    Year of Experience
                </FormLabel>

                {/* this will group all the radio buttons */}
                <RadioGroup
                    name="job-experience-year"
                    // Label of the field
                    aria-labelledby='job-experience'
                    value={value}
                    onChange={handleChange}
                >
                    <FormControlLabel
                        // this will set field as radio button
                        control={<Radio
                            size="small"
                            color="secondary"
                        />}
                        label="0-2"
                        value="0-2"
                    />
                    <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
                    <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
                </RadioGroup>
            </FormControl>
        </Stack>
    )
};

export default RadioButtonCode;