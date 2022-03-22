import React from 'react';
import { Stack } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

const IconsCode = () => {
    return (
        <React.Fragment>
            {/* Icons */}
            <Stack direction="row">
                <FmdGoodIcon
                    // To set color
                    color="primary"
                    // To set font size
                    fontSize="large"
                />

                <FmdGoodIcon
                    color="primary"
                />

                <FmdGoodIcon
                    color="primary"
                    fontSize="small"
                />
            </Stack>
        </React.Fragment>
    )
}

export default IconsCode