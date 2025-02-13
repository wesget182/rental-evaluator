import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { userState } from '../slices/userSlice';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import api from '../axios/axios';
import FavModal from './FavsModal';
import { favsReducer } from '../Slices/userSlice';
import DeleteIcon from '@material-ui/icons/Delete';

//Favorite array state set by get request in component fxn
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    minWidth: 500,
    width: 900,
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  header: {
    fontSize: '2em',
  },
}));

function TitlebarGridList() {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector(userState);
  const tileData = state.user.favorites;
  const [propDetail, setPropDetail] = useState({});
  const [favDetailsOpen, setFavDetailsOpen] = useState(false);

  //open/close handlers for add record modal
  const handleOpen = (e, idx) => {
    e.preventDefault();
    setPropDetail(tileData[idx]);
    setFavDetailsOpen(true);
  };

  const handleClose = () => {
    setFavDetailsOpen(false);
  };

  const handleRemoveFav = async (idx) => {
    // remove from the db
    const newFavs = await api({
      method: 'post',
      url: '/removeFav',
      data: {
        favorite: tileData[idx],
      },
    })
      .then((data) => data.data)
      .catch((err) => console.log('ADD FAV ERROR', err));
    // remove from the redux store
    dispatch(favsReducer({ favorites: newFavs }));
  };

  return (
    <div>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Button variant="outlined" color="inherit" onClick={() => history.push('/')}>
          Map View
        </Button>
      </Box>
      <div className={classes.root}>
        <GridList cellHeight={300} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div" className={classes.header}>
              Favorites
            </ListSubheader>
          </GridListTile>
          {tileData.map((tile, idx) => (
            <GridListTile key={tile.Image} idx={idx}>
              <img src={tile.Image} alt={tile.Address} onClick={(e) => handleOpen(e, idx)} />

              <GridListTileBar
                title={tile.Address}
                idx={idx}
                subtitle={
                  <span>
                    Price: {tile.Price}
                    <br /> Investment Rating: {tile.Rating}
                  </span>
                }
                actionIcon={
                  <div>
                    <IconButton
                      idx={idx}
                      aria-label={`delete ${tile.address}`}
                      className={classes.icon}
                      onClick={() => handleRemoveFav(idx)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      idx={idx}
                      aria-label={`info about ${tile.address}`}
                      className={classes.icon}
                      onClick={(e) => handleOpen(e, idx)}
                    >
                      <InfoIcon />
                    </IconButton>
                  </div>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <FavModal prop={propDetail} open={favDetailsOpen} handleClose={handleClose} />
    </div>
  );
}

export default TitlebarGridList;
