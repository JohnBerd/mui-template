import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BackgroundImage from '../components/BackgroundImage';
import { Card, CardContent } from '@material-ui/core';
import { useForm } from 'react-hook-form'



const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    margin: 'auto',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const { register, handleSubmit, watch, errors } = useForm()
  const onSubmit = data => {
    alert(JSON.stringify(data))
  }
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return (
    <div>
      <Container component="main" maxWidth="xs"  >
        <CssBaseline />
        <div className={classes.paper}>
          <Card>
            <CardContent>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" style={{ textAlign: 'center' }}>
                Sign up
              </Typography>
              
              <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="firstname"
                      variant="outlined"
                      fullWidth
                      label="First Name"
                      autoFocus
                      error={errors.firstname}
                      helperText={errors.firstname ? errors.firstname.message : ''}
                      inputRef={register({
                        required: {
                          value: true,
                          message: "This field is required"
                        },
                        minLength: {
                          value: 3,
                          message: "It should contain more than 3 characters"
                        }
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Last Name"
                      name="lastname"
                      inputRef={register({ required: true })}
                      helperText={errors.lastname ? errors.lastname.message : ''}
                      error={errors.lastname}
                      inputRef={register({
                        required: {
                          value: true,
                          message: "This field is required"
                        },
                      })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Email Address"
                      name="email"
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
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
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
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link component={RouterLink} to="/signin" variant="body2">
                      Already have an account? Sign in
                </Link>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}