import React from 'react';
import { InputAdornment, Stack, TextField } from '@mui/material';

const TextFieldCode = () => {
    return (
        <React.Fragment>
            <Stack direction="row" spacing={3}>
                {/* Types of textfield */}
                <TextField label="outlined" variant="outlined" />
                <TextField label="filled" variant="filled" />
                <TextField label="standard" variant="standard" />
            </Stack>

            <Stack direction="row" spacing={3}>
                <TextField
                    // this set label to input field
                    label="Small Secondary"
                    // this sets variant of the input field
                    variant="outlined"
                    // this set size of input field
                    size='small'
                    // this sets color of input field
                    color='secondary'
                    // this makes that field required
                    required
                    // this adds helper text to bottom of input field
                    helperText="Do not share your password with anyone"
                    // this set type of the input field
                    type="number"
                    // this disabled input field means we can't make changes and it show disabled
                    disabled
                />
                <TextField
                    label="Read only"
                    // this disabled input field means we can't make changes but we can hover on input field
                    InputProps={{ readOnly: true }}
                />
            </Stack>

            <Stack direction="row" spacing={3}>
                <TextField
                    label="Amount"
                    // We use this to set icon or text inside textfield
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>
                    }}
                />
                <TextField
                    label="Weight"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>
                    }}
                />
            </Stack>
        </React.Fragment>
    )
}

export default TextFieldCode