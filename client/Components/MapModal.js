import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Typography, Grid, Card, Divider, Box } from '@material-ui/core';

const MapModal = ({ open, handleClose, data }) => {
  //   const property = propDetail.targetForSale.features[0];
  const property = data[0].properties;

  // const [propDetail, setPropDetail] = useState({})
  // const getDetails = (e) => {
  //     api.get('/target', {params:{
  //     address:
  //     //initialQueryStateArray[e.target.id].properties.address

  //     }})
  // }
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
  const favIcon = clickedFav ? <FavoriteIcon /> : <FavoriteBorderIcon />;
  const handleAddFavs = () => {
    setClickedFav(!clickedFav);
    // api({
    //   method: 'post',
    //   url: '/addFav',
    //   data: {
    //     property: 'property',
    //   },
    // })
    //   .then((res) => {
    //     console.log('ADD FAV RESPONSE ', res.data);
    //   })
    //   .catch((err) => console.log('ADD FAV ERROR', err));
  };
  return (
    <Dialog open={open} onClose={handleClose} className={classes.container}>
      {console.log('PROPERTY ', property)}
      <Box className={classes.card}>
        <Grid>
          <Grid container justify="flex-end">
            <IconButton onClick={handleAddFavs}>{favIcon}</IconButton>
            <IconButton onClick={handleClose}>
              <CancelIcon />
            </IconButton>
          </Grid>
          <Grid container xs={12} justify="center">
            <Box className={classes.imgContainer}>
              <img
                src="https://photos.zillowstatic.com/fp/dfa968d816453bb57722dc00002676a4-p_e.jpg"
                className={classes.image}
              />
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
            <Grid xs={12}>
              <Typography>Price: {property.Price}</Typography>
            </Grid>
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
            <Grid xs={12}>
              <Typography>
                Est. Montly Mortgage: {property['Est. monthly mortage']}
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>
                Est/ Monthly Rent: {property['Est. monthly rent']}
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>
                Price to Rent Ratio: {property['Price-to-rent ratio']}
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>Rating: {property.Rating}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};
export default MapModal;
