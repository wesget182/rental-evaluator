/** @format */

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerMenu from './DrawerMenu';
import Link from '@material-ui/core/Link';
import { useSelector } from 'react-redux';
import { userState } from '../Slices/userSlice';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const { user } = useSelector(userState);
  const { isLoggedIn } = user;

  useEffect(() => {
    if (!isLoggedIn) history.push('/signin');
  }, [isLoggedIn]);

  const handleDrawerOpen = () => setOpen(true);

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <Link color="inherit" style={{ cursor: 'pointer' }} onClick={() => history.push(`/`)}>
              Rental Evaluator
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerMenu open={open} setOpen={setOpen} isLoggedIn={isLoggedIn} />
    </div>
  );
}
