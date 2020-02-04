import React,{ useState} from 'react';
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
import { Face } from '@material-ui/icons';
import LockIcon from '@material-ui/icons/Lock';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Card, CardContent } from '@material-ui/core';
import { useForm } from 'react-hook-form'
import TextFieldIcon from '../TextFieldIcon'
import EmailIcon from '@material-ui/icons/Email';
import Page from '../Page';

const useStyles = makeStyles(theme => ({
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
  const [setOn, setStatusBase] = useState('');
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    // Link to the API
  }
  const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return (
    <Page center background>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Card>
            <CardContent>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5" style={{ textAlign: 'center' }}>
                Sign Up
              </Typography>

	      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextFieldIcon
                      startIcon={<Face />}
                      name="firstname"
                      variant="standard"
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
                          message: "This field should contain at least 3 characters"
                        }
                      })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextFieldIcon
                      startIcon={<Face />}
                      variant="standard"
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
                    <TextFieldIcon
                      startIcon={<EmailIcon />}
                      variant="standard"
                      fullWidth
                      label="Email"
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
                    <TextFieldIcon
                      startIcon={<LockIcon />}
                      variant="standard"
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
                  <Grid item xs={12}>
                    <TextFieldIcon
                      startIcon={<LockIcon />}
                      variant="standard"
                      fullWidth
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      error={errors.confirmPassword}
                      inputRef={register({
                        required: {
                          value: true,
                          message: "This field is required"
                        },
                        validate: {
                          value: value => value === watch('password') || "The password doesn't match",
                        },
                      })}
                      helperText={errors.confirmPassword ? errors.confirmPassword.message : ''}
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
    </Page>
  );
}
