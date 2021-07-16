import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logoutReducer } from '../Slices/userSlice';
import { userState } from '../Slices/userSlice';

export default function DrawerMenu({ open, setOpen }) {
  const history = useHistory();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { user } = useSelector(userState);
  const { isLoggedIn } = user;

  const handleSignOut = () => {
    dispatch(logoutReducer());
    routeChange('/signin');
  };

  const handleDrawerClose = () => setOpen(false);

  const routeChange = (path) => {
    handleDrawerClose();
    history.push(path);
  };

  const signedInOut = isLoggedIn ? 'Sign Out' : 'Sign In';

  return (
    <Drawer variant="persistent" anchor="left" open={open}>
      <div>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem button key={'My Properties'}>
          <ListItemIcon>
            <HomeWorkIcon />
          </ListItemIcon>
          <ListItemText primary={'My Properties'} onClick={() => routeChange('/properties')} />
        </ListItem>
        <ListItem button key={'My Favorites'}>
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          <ListItemText primary={'My Favorites'} onClick={() => routeChange('/favs')} />
        </ListItem>
        <Divider />
        <ListItem button key={signedInOut}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary={signedInOut} onClick={handleSignOut} />
        </ListItem>
      </List>
    </Drawer>
  );
}
