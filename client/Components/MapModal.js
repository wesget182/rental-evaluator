import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Typography, Grid, Divider, Box } from '@material-ui/core';
import api from '../axios/axios';
//redux stuff
import { userState } from '../Slices/userSlice'
import { useSelector } from 'react-redux'

const MapModal = ({ open, handleClose, prop }) => {
  const property = prop.properties;
  const userFavs = useSelector(userState)
  const favsArr = userFavs.user.favorites

  const useStyles = makeStyles((theme) => ({
    container: {
      maxWidth: 800,
      height: '100vh',
    },
    image: {
      maxWidth: 400,
      height: 'auto',
    },
    card: {
      margin: 20,
      p: 20,
 
    },
    imgContainer: {
      justify: 'center',
    },
    detailField: {
      padding: theme.spacing(3),
    },
  }));

  const classes = useStyles();
  const [clickedFav, setClickedFav] = useState(false);
  const faved = () => {
    let found = false
    favsArr.forEach(fav => {
      if (fav.ZPID === property.ZPID) {
        found = true
      }
    })
   return found
  }
  // faved()

  let favIcon = clickedFav ? <FavoriteIcon /> : <FavoriteBorderIcon />;
  if(faved()) favIcon = <FavoriteIcon/>
  const handleAddFavs = (e) => {
    e.preventDefault();
    setClickedFav(!clickedFav);
//add remove fave conditional
 
    const favorite = property;
    api({
      method: 'post',
      url: '/addFav',
      data: {
        favorite: favorite,
      },
    }).catch((err) => console.log('ADD FAV ERROR', err));
  };
  return (
    <Dialog open={open} onClose={handleClose} className={classes.container} property={property}>
      <Box className={classes.card}>
        <Grid>
          <Grid container justify="flex-end">
            <IconButton onClick={handleAddFavs}   
            style={{
              color: "red",
              fontSize: 100,
    }}>{favIcon}</IconButton>
            <IconButton onClick={handleClose}>
              <CancelIcon />
            </IconButton>
          </Grid>
          <Grid container xs={12} justify="center">
            <Box className={classes.imgContainer}>
              <img src={property.Image} className={classes.image} />
            </Box>
          </Grid>
          <Grid container>
            <Grid xs={12}>
              <Typography variant="h4" component="h4">
                Property Details:
              </Typography>
            </Grid>
            <Divider width="100%" className={classes.card} />
            <Grid xs={12} className={classes.detail}>
              <Typography>Address: {property.Address}</Typography>
            </Grid>
            {'Price' in property && (
              <Grid xs={12}>
                <Typography>Price: {property.Price}</Typography>
              </Grid>
            )}
            {'Monthly rent' in property && (
              <Grid xs={12}>
                <Typography>Monthly Rent: {property['Monthly rent']}</Typography>
              </Grid>
            )}
            <Grid xs={12}>
              <Typography>Type: {property.Type}</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>Size: {property.Size}</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>Bed Rooms: {property['# bedrooms']}</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>Bath Rooms: {property['# bathrooms']}</Typography>
            </Grid>
            {'Est. monthly mortgage' in property && (
              <Grid xs={12}>
                <Typography>Est. Monthly Mortgage: {property['Est. monthly mortgage']}</Typography>
              </Grid>
            )}
            {'Rating' in property && (
              <>
                <Grid xs={12}>
                  <Typography>Est. Monthly Rent: {property['Est. monthly rent']}</Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography>Price to Rent Ratio: {property['Price-to-rent ratio']}</Typography>
                </Grid>
                <Grid xs={12}>
                  <Typography>Rating: {property.Rating}</Typography>
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};
export default MapModal;
