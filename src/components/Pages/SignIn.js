import React, { Component, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card, CardContent, withStyles, InputAdornment } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Face } from '@material-ui/icons'
import LockIcon from '@material-ui/icons/Lock';
import TextFieldIcon from '../TextFieldIcon';
import Page from '../Page';
import { useStore } from 'react-hookstore';

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    margin: 'auto',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm();
  const [ auth, setAuth ] = useStore('authStore');
  const onSubmit = data => {
    // Link to the API
      setAuth(true);
  }
  useEffect(() => {
    console.log(auth)
  });
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return (
    <Page center background>
    <div>
      <Container component="main" maxWidth="xs">
        <div>
          <Card>
            <CardContent>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" style={{ textAlign: 'center' }}>
                Sign In
            </Typography>
              <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
                  <TextFieldIcon
                    startIcon={<Face />}
                    margin="normal"
                    variant="standard"
                    required
                    fullWidth
                    autoFocus
                    id="email"
                    label="Email"
                    name="email"
                    autoFocus
                    inputRef={register({
                      required: {
                        value: true,
                        message: "This field is required"
                      },
                      pattern: {
                        value: re,
                        message: "Bad email"
                      },
                    })}
                    error={errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                  />
                  <TextFieldIcon
                    startIcon={<LockIcon />}
                    variant="standard"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    error={errors.password}
                    inputRef={register({
                      required: {
                        value: true,
                        message: "This field is required"
                      },
                    })}
                    helperText={errors.password ? errors.password.message : ''}
                  />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
              </Button>

                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                  </Link>
                  </Grid>
                  <Grid item>
                    <Link component={RouterLink} to="/signup" variant="body2">
                      {"Not registered? Sign up!"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
    </Page>
  );
}
