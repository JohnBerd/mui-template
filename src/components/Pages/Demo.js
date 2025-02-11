import { Box, Button, createMuiTheme, FormControlLabel, Grid, Paper, Switch, TextField, Typography } from '@material-ui/core';
import ColorPicker from 'material-ui-color-picker';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useStore } from 'react-hookstore';
import Page from '../Page';
import Home from './Home';


export default function Demo(props) {
    return (
        <Page title="Demo">
            <Paper>
                <AuthDemo />
                <ColorDemo />
                <PageDemo />
                <NavbarDemo />
            </Paper>

        </Page>
    )
}

function AuthDemo() {
    const [auth, setAuth] = useStore('authStore');

    const handleChange = event => {
        setAuth(event.target.checked);
        event.target.checked ? localStorage.setItem('isLoggedIn', true) : localStorage.clear();
    };

    return (
        <Box p={3}>
            <Typography component="h4" variant="h4" color="primary" >Log In</Typography>
            <FormControlLabel
                control={
                    <Switch checked={auth} onChange={handleChange} color="primary" />
                }
                label="Logged In"
            />
        </Box>
    );
}

function ColorDemo(props) {
    const [themeColor, setThemeColor] = useStore('themeStore');
    const newtheme = createMuiTheme(themeColor);
    const [primary, setPrimary] = useState(themeColor.palette.primary.main);
    const [secondary, setSecondary] = useState(themeColor.palette.secondary.main);
    const [background, setBackground] = useState(themeColor.palette.background.default);

    const handleChangePrimary = (color) => {
        if (!color) { return; }
        const newtheme = createMuiTheme(themeColor);
        newtheme.palette.primary.main = color;
        newtheme.palette.secondary.contrastText = color;
        setPrimary(color)
        setThemeColor(newtheme)
        console.log(themeColor)
    }

    const handleChangeSecondary = (color) => {
        if (!color) { return; }
        newtheme.palette.secondary.main = color;
        newtheme.palette.primary.contrastText = color;
        setSecondary(color)
        setThemeColor(newtheme)
    }

    const handleChangeBackground = (color) => {
        if (!color) { return; }
        newtheme.palette.background.default = color;
        setThemeColor(newtheme)
        setBackground(color)
    }

    return (
        <Box p={3}  style={{maxWidth: 310}}>
            <Typography component="h4" variant="h4" color="primary" >Theme</Typography>
            <Box m={2}>
                <ColorPicker
                    variant="outlined"
                    name='pcolor'
                    label='Primary Color'
                    defaultValue={primary}
                    onChange={handleChangePrimary}
                />
            </Box>
            <Box m={2}>
                <ColorPicker
                    variant="outlined"
                    name='scolor'
                    label='Secondary Color'
                    defaultValue={secondary}
                    onChange={handleChangeSecondary}
                />
            </Box>
            <Box m={2}>
                <ColorPicker
                    variant="outlined"
                    name='bcolor'
                    label='Background Color'
                    defaultValue={background}
                    onChange={handleChangeBackground}
                />
            </Box>
        </Box>

    )
}

function PageDemo() {
    const [checked, setChecked] = useState(true);
    const [auth, setAuth] = useStore('authStore');
    const [pages, setPages] = useStore('pageStore');
    const { register, handleSubmit, errors } = useForm();
    const handleChange = event => {
        setChecked(event.target.checked);
    };

    const onSubmit = data => {
        data.component = Home;
        data.public = checked;
        let d = [...pages];
        pages.push(data)
        d.push(data)
        console.log(pages)
        console.log(d)
        setPages(d)
        setPages(pages)
        setAuth(!auth)
        setAuth(auth)
    }

    return (
        <Box p={3} style={{maxWidth: 310}}>
                <Typography component="h4" variant="h4" color="primary" >Menu</Typography>
                <form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Box m={2}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        autoFocus
                        label="Page Title"
                        name="title"
                        error={errors.title}
                        inputRef={register({
                            required: {
                                value: true,
                                message: "This field is required"
                            },
                        })}
                        helperText={errors.title ? errors.title.message : ''}
                    />
                    </Box>
                    <Box m={2}>
                    <TextField
                        variant="outlined"
                        label="Route Path"
                        required
                        fullWidth
                        autoFocus
                        name="route"
                        error={errors.path}
                        inputRef={register({
                            required: {
                                value: true,
                                message: "This field is required"
                            },
                        })}
                        helperText={errors.route ? errors.route.message : ''}
                    />
                    </Box>
                    <Box m={2}>
                    <FormControlLabel
                        control={
                            <Switch checked={checked} onChange={handleChange} color="primary" />
                        }
                        label="Public Route"
                    />
                    </Box>
                    <Box  m={2}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Add A Page
              </Button>
              </Box>
                </form>
        </Box>
    )
}

function NavbarDemo() {
    const [sticky, setSticky] = useStore('stickyStore'); // for the demo
    const [search, setSearch] = useStore('searchStore'); // for the demo

    const handleSticky = event => {
        setSticky(event.target.checked);
    };

    const handleSearch = event => {
        setSearch(event.target.checked);
    };

    return (
        <Box p={3}>
            <Typography component="h4" variant="h4" color="primary" >NavBar</Typography>
            <FormControlLabel
                control={
                    <Switch checked={sticky} onChange={handleSticky} color="primary" />
                }
                label="Sticky"
            />
            <FormControlLabel
                control={
                    <Switch checked={search} onChange={handleSearch} color="primary" />
                }
                label="Search"
            />
        </Box>
    )
}