import React from 'react';
import { Button, Stack } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const ButtonCode = () => {
    return (
        <Stack direction="row">
            <Button
                // Types of variant are text, contained, outlined
                variant='contained'
                // This will set it to submit button
                type='submit'
                // This will set color to button
                color='secondary'
                // To set icon inside button in start
                startIcon={<FmdGoodIcon />}
                // To set icon in button to end
                endIcon={<FmdGoodIcon />}
                // It removes button shadow
                disableElevation
            >
                location
            </Button>
        </Stack>
    )
}

export default ButtonCode