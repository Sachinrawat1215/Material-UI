import React from 'react';
import { Stack, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    title: {
        backgroundColor: "black",
        color: "white",
        fontSize: 17
    }
})

const MakeStyleCode = () => {
    const classes = useStyles();

    return (
        <Stack direction="row">
            {/* makeStyles */}
            <Typography className={classes.title}>
                This is my title which i will change...
            </Typography>
        </Stack>
    )
}

export default MakeStyleCode