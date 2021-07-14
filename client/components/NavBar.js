/** @format */

import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircle from '@material-ui/icons/AccountCircle';
import DrawerMenu from './DrawerMenu';
import Link from '@material-ui/core/Link';
import { useSelector, useDispatch } from "react-redux";
import { emailReducer, loginReducer } from "../Slices/userSlice";
import { userState } from "../Slices/userSlice";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
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
}));

export default function PrimarySearchAppBar() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [goToSignOut, setGoToSignOut] = useState(false);
  const [goToSignIn, setGoToSignIn] = useState(false);
  const [favView, setFavView] = useState(false);
  const [open, setOpen] = React.useState(false);
  
  const { user } = useSelector(userState)
  const { isLoggedIn } = user

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const showFavs = () => {
    setFavView(true);
  };

  const signInOut = isLoggedIn ? 'Sign Out' : 'Sign In';
  const handleSignInOut = (e) => {
    e.preventDefault()
    console.log('isLoggedIn', isLoggedIn)
    dispatch(loginReducer())
  };

  // if (goToSignOut) return <Redirect to='/signin' />;
  // if (goToSignIn) return <Redirect to='/signin' />;
  // if (favView) return <Redirect to='/favs' />;

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {isLoggedIn && <MenuItem onClick={handleMenuClose}>Profile</MenuItem>}
      {isLoggedIn && <MenuItem onClick={handleMenuClose}>My account</MenuItem>}
      <MenuItem onClick={handleSignInOut}> {signInOut}</MenuItem>
    </Menu>
  );

  useEffect(() => {
    if (!isLoggedIn){
      history.push('/signin')
    }
  }, [isLoggedIn])
  return (
    <div className={classes.grow}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant='h6' noWrap>
            <Link color='inherit' style={{cursor: 'pointer'}} onClick={() => history.push(`/`)}>
              Rental Evaluator
            </Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {isLoggedIn && (
              <IconButton aria-label='favorite properties' color='inherit'>
                <FavoriteIcon onClick={() => history.push('/favs')} />
              </IconButton>
            )}
            {/* <FavDrawer />  */}
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <DrawerMenu open={open} setOpen={setOpen} />
      {renderMenu}
    </div>
  );
}