import React from 'react';
import { Typography } from '@mui/material';

const TypographyCode = () => {
    return (
        <Typography
            // variant which we want to show on page
            variant='h4'
            // component mean font tag which we want to show in html
            component='h2'
            // Align of text
            align='center'
            // Color of text
            color='secondary'
            // It will wrap text into one line with three dots
            noWrap
            // It adds margin to bottom of text
            gutterBottom
        >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo similique sint inventore iste maiores cum cumque tempora quibusdam laudantium iusto.
        </Typography>
    )
}

export default TypographyCode;