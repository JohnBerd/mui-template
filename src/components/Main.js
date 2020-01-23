import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Routes from "../Routes";

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const useStyles = makeStyles(theme => ({
    main: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(2),
        flexGrow: 1,
    },
}));

export default function Main() {
    const classes = useStyles();

    return (

        <main className={classes.main}>
            <Routes />
        </main>
    );
}