import React, {useState} from 'react';
import { ToggleButton, ToggleButtonGroup, Stack } from '@mui/material';

// All Icons
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const ToggleButtonCode = () => {
    const [formats, setFormats] = useState([]);
    console.log(formats);

    const handleFormatChange = (event, newFormats) => {
        setFormats(newFormats);
    }

    return (
        <Stack direction="row" >
            {/* ToggleButton */}
            <ToggleButtonGroup
                aria-label='text formatting'
                value={formats}
                onChange={handleFormatChange}
                // Size of the buttonsd
                size="small"
                // color of the clicked button
                color='error'
                // orientation of the buttons
                orientation='vertical'
                // if we use this then we can't select multiple options 
                exclusive
            >
                <ToggleButton value="bold"><FormatBoldIcon /></ToggleButton>
                <ToggleButton value="italic"><FormatItalicIcon /></ToggleButton>
                <ToggleButton value="underline"><FormatUnderlinedIcon /></ToggleButton>
            </ToggleButtonGroup>
        </Stack >
    )
}

export default ToggleButtonCode