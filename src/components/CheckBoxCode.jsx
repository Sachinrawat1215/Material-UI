import React, { useState } from 'react';
import { Box, Checkbox, FormControlLabel, FormLabel, FormGroup, FormControl } from '@mui/material';

// icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const CheckBoxCode = () => {
    const [acceptTnC, setacceptTnC] = useState(false);
    console.log(acceptTnC);

    const [skills, setskills] = useState([]);
    console.log(skills);

    const handleChange = (e) => {
        setacceptTnC(e.target.checked);
    }

    const handleSkillChange = (e) => {
        const index = skills.indexOf(e.target.value);

        if (index === -1) {
            setskills([...skills, e.target.value]);
        } else {
            setskills(skills.filter(skill => skill !== e.target.value));
        }
    }

    return (
        <Box>
            {/* Single CheckBox */}
            <Box>
                <FormControlLabel
                    label="I accept terms and conditions"
                    control={<Checkbox
                        color="secondary"
                        size="small"
                        checked={acceptTnC}
                        onChange={handleChange}
                    />}
                />
            </Box>

            {/* Icon CheckBox */}
            <Box>
                <Checkbox
                    icon={<VisibilityIcon />}
                    // icon which we want to show when it clicked
                    checkedIcon={<VisibilityOffIcon />}
                    checked={acceptTnC}
                    onChange={handleChange}
                />
            </Box>

            {/* CheckBox Group */}
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            label="HTML"
                            control={<Checkbox
                                value="html"
                                checked={skills.includes("html")}
                                onChange={handleSkillChange}
                            />}
                        />
                        <FormControlLabel
                            label="CSS"
                            control={<Checkbox
                                value="css"
                                checked={skills.includes("css")}
                                onChange={handleSkillChange}
                            />}
                        />
                        <FormControlLabel
                            label="JavaScript"
                            control={<Checkbox
                                value="javascript"
                                checked={skills.includes("javascript")}
                                onChange={handleSkillChange}
                            />}
                        />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}

export default CheckBoxCode;