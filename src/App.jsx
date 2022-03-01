import React from 'react';
import { Typography, Button, ButtonGroup, Container } from '@mui/material';

const App = () => {
    return (
        <Container>
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

            <Button
                // Types of variant are text, contained, outlined
                variant='contained'
                // This will set it to submit button
                type='submit'
                // This will set color to button
                color='secondary'
                // It removes button shadow
                disableElevation
            >
                Send
            </Button>

            <ButtonGroup color='primary' variant='contained'>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Container>
    )
}

export default App