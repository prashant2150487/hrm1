import React from "react";

import { Avatar, Box, CardHeader, Divider, FormControl, FormControlLabel, Grid, Link, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { DateCalendar, LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function NavRight() {
    return (
        <Box>
            <Box sx={{ p: 1, display: 'flex', alignItems: 'center', }}>
                <Typography>ATTENDANCE REGULARIZATION REQUEST </Typography>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ display: 'flex' }}>
                    <Avatar></Avatar>
                    <Stack direction='column'>
                        <Typography>Asit Mandal <span>#Kds430</span></Typography>
                        <Typography>Kusheldigi Soluction Pvt Ltd</Typography>
                        <Typography>Full Stack Developer</Typography>
                    </Stack>
                </Box>
            </Box>
            <Grid container>
                <Grid>
                    <Typography>Select day(s) for whitch you wish to apply for "attendence regularization" request .</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateCalendar defaultValue={dayjs('2022-04-17')} />

                    </LocalizationProvider>
                    <Link>View pending request</Link>

                </Grid>
                <Grid>
                    <Box>
                        <Typography>Reaquest for 06/05/2023</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography>Shift:09:30-18:30</Typography>
                            <Typography>Check in time:-</Typography>
                            <Typography></Typography>
                        </Box>
                        <Divider></Divider>
                        <Box>
                            <FormControl>

                                <RadioGroup
                                    row
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio />} label="Forgot in" />
                                    <FormControlLabel value="male" control={<Radio />} label="Forgot out" />
                                    <FormControlLabel value="other" control={<Radio />} label="Both" />
                                </RadioGroup>
                            </FormControl>
                            <Stack direction='row'>
                                <TextField
                                    disabled
                                    id="filled-disabled"
                                    label="Disabled"
                                    defaultValue="Hello World"
                                    variant="filled"
                                />
                            </Stack>
                        </Box>

                    </Box>
                </Grid>
            </Grid>

        </Box>
    );
}

export default NavRight;
