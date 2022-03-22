import React from 'react'
import { ButtonGroup, Button, Stack } from '@mui/material'

const ButtonGroupCode = () => {
    return (
        <React.Fragment>
            {/* We can create button group by this tag */}
            <Stack direction="row">
                <ButtonGroup color='primary' variant='contained' >
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup >
            </Stack>
        </React.Fragment>
    )
}

export default ButtonGroupCode