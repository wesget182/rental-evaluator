import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { emailReducer, loginReducer, userState } from '../Slices/userSlice';
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
import { Redirect } from 'react-router-dom';

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
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(userState);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validatePassword, setValidatePassword] = useState('');

  //submit fxn to make http call to BE
  const handleSubmit = (e) => {
    e.preventDefault();
    api({
      method: 'post',
      url: '/register',
      data: {
        name,
        email,
        password,
      },
    }).then((res) => {
      dispatch(emailReducer(email));
      dispatch(loginReducer());
    });
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
                Register
              </Typography>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
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
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="validatePassword"
                  label="Re-Enter Password"
                  type="password"
                  id="validatePassword"
                  value={validatePassword}
                  onChange={(e) => {
                    setValidatePassword(e.target.value);
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Register
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/signin" variant="body2">
                      Already Have An Account? Sign In
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
