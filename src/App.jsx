import React from 'react';
import { Container, Stack } from '@mui/material';

// Importing all codesheets
import TypographyCode from './components/TypographyCode';
import ButtonCode from './components/ButtonCode';
import ButtonGroupCode from './components/ButtonGroupCode';
import IconsCode from './components/IconsCode';
import MakeStyleCode from './components/MakeStyleCode';
import ToggleButtonCode from './components/ToggleButtonCode';
import TextFieldCode from './components/TextFieldCode';
import SelectCode from './components/SelectCode';
import RadioButtonCode from './components/RadioButtonCode';

const App = () => {

    return (
        <Container>
            <Stack direction="column" spacing={2}>
                <TypographyCode />
                <ButtonCode />
                <ButtonGroupCode />
                <IconsCode />
                <MakeStyleCode />
                <ToggleButtonCode />
                <TextFieldCode />
                <SelectCode />
                <RadioButtonCode />
            </Stack>
        </Container>
    )
}

export default App