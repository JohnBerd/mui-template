import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from "@material-ui/icons/Search";
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ToggleMenu from './ToggleMenu';
import { Button } from '@material-ui/core';
import SearchBar from 'material-ui-search-bar';
import AccountButton from './AccountButton';
import NotificationButton from './NotificationButton';
import { Link } from "react-router-dom";
import menu from "../globals/Menu"

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    margin: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  iconContainer: {
    display: 'flex',
  },
  menuBar: {
    marginRight: '50px',
  },
  signInButton: {
    margin: theme.spacing(1),
  },
  inputRoot: {
    color: 'inherit',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  searchField: {
    width: '100%',
  },
  backButton: {
    margin: theme.spacing(1),
  }
}));


function SearchNavBar(props) {
  const classes = useStyles();
  return (
    <Toolbar>
      <IconButton color="inherit" onClick={() => props.setSearchActive(false)} className={classes.backButton} >
        <ArrowBackIcon />
      </IconButton>
      <SearchField />
    </Toolbar>
  );
}

function SearchField() {
  const classes = useStyles();
  return (
    <SearchBar className={classes.searchField} />
  );
}

function AuthMenuBar() {
  return (
    <div style={{ display: 'flex' }}>
      <NotificationButton />
      <AccountButton />
    </div>
  )
}

function NonAuthMenuBar() {
  const classes = useStyles();
  return (
    <div style={{ display: 'flex' }}>
        <Button variant="contained" color="secondary" className={classes.signInButton} component={Link} to="/signup">
          Sign Up
      </Button>
        <Button variant="outlined" color="inherit" className={classes.signInButton}  component={Link} to="/signin">
          Sign In
      </Button>
    </div>
  )
}

function BaseNavBar(props) {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);

  return (
    <Toolbar >
      <div className={classes.sectionMobile}>
        <ToggleMenu side='left' menu={menu} />
      </div>
      <Typography className={classes.title} variant="h6" noWrap>
        Material-UI
    </Typography>
      <div className={classes.sectionDesktop}>
        <div className={classes.menuBar}>
          {menu.map((item) => (
            <Button color="inherit" component={Link} to={item.route}>{item.title}</Button>
          ))}
        </div>
      </div>
      <div className={classes.sectionDesktop}>
        <SearchField />
      </div>
      <div className={classes.grow} />
      <div className={classes.iconContainer}>
        <IconButton color="inherit" className={classes.sectionMobile} onClick={() => props.setSearchActive(true)}>
          <SearchIcon />
        </IconButton>
        {auth ? <AuthMenuBar /> : <NonAuthMenuBar />}
      </div>
    </Toolbar>
  );
}

export default function NavBar() {
  const classes = useStyles();
  const [searchActive, setSearchActive] = useState(false)
  return (
    <div>
      <AppBar position="static">
        {searchActive ? <SearchNavBar setSearchActive={setSearchActive} /> : <BaseNavBar setSearchActive={setSearchActive} />}
      </AppBar>
    </div>
  );
}