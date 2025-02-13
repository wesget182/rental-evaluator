/** @format */

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import HouseIcon from '@material-ui/icons/House';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import GoogleIcon from './GoogleIcon';
import api from '../axios/axios';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { emailReducer, loginReducer, userState } from '../Slices/userSlice';
import { userPropReducer } from '../Slices/userPropSlice';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Rental Evaluator
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(5),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleBtn: {
    margin: theme.spacing(0, 0, 0),
  },
}));

export default function SignIn() {
  const dispatch = useDispatch();
  const state = useSelector(userState);
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //submit fxn to make http call to BE
  const handleSubmit = (e) => {
    e.preventDefault();
    api({
      method: 'post',
      url: '/signin',
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        dispatch(emailReducer(email));
        dispatch(loginReducer(res.data));
      })
      .then(() => {
        getProperties(email);
        history.push('/');
      });
  };

  const getProperties = (email) => {
    api
      .post('/ownedProperties/listProperties', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: {
          email,
        },
      })
      .then((res) => {
        dispatch(userPropReducer(res.data.ownedProps));
      })
      .then(() => {
        return;
      })
      .catch((err) => console.log(err));
  };

  if (state.user.isLoggedIn) return <Redirect to="/" />;

  return (
    <Container component="main" maxWidth="xs">
      <Box mt={3}>
        <Card classsName={classes.card}>
          <Box p={3}>
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <HouseIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
                    <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
              <Typography component="h3" variant="h5" className={classes.submit}>
                <Divider />
              </Typography>
              <Button
                startIcon={<GoogleIcon />}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {' '}
                Sign In With Google
              </Button>
            </div>
            <Box mt={8}>
              <Copyright />
            </Box>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
