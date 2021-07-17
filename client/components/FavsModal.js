import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import { Typography, Grid, Divider, Box } from '@material-ui/core';

const FavModal = ({ open, handleClose, prop }) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      maxWidth: 800,
      height: '100vh',
    },
    card: {
      margin: 20,
      p: 20,
    },
    detailField: {
      padding: theme.spacing(3),
    },
  }));

  const classes = useStyles();
  return (
    <Dialog open={open} onClose={handleClose}>
      <Box className={classes.card}>
        <Grid>
          <Grid container justify="flex-end">
            <IconButton onClick={handleClose}>
              <CancelIcon />
            </IconButton>
          </Grid>
          <Grid container>
            <Grid xs={12}>
              <Typography variant="h4" component="h4">
                Property Details:
              </Typography>
            </Grid>
            <Divider width="100%" className={classes.card} />
            {'Address' in prop && (
              <Grid xs={12} className={classes.detail}>
                <Typography>Address: {prop.Address}</Typography>
              </Grid>
            )}
            {'Price' in prop && (
              <Grid xs={12}>
                <Typography>Price: {prop.Price}</Typography>
              </Grid>
            )}
            {'Type' in prop && (
              <Grid xs={12}>
                <Typography>Type: {prop.Type}</Typography>
              </Grid>
            )}
            {'Size' in prop && (
              <Grid xs={12}>
                <Typography>Size: {prop.Size}</Typography>
              </Grid>
            )}
            {'# bedrooms' in prop && (
              <Grid xs={12}>
                <Typography>Bed Rooms: {prop['# bedrooms']}</Typography>
              </Grid>
            )}
            {'# bathrooms' in prop && (
              <Grid xs={12}>
                <Typography>Bath Rooms: {prop['# bathrooms']}</Typography>
              </Grid>
            )}
            {'Est. monthy mortgage' in prop && (
              <Grid xs={12}>
                <Typography>Est. Montly Mortgage: {prop['Est. monthy mortgage']}</Typography>
              </Grid>
            )}
            {'Est. monthly rent' in prop && (
              <Grid xs={12}>
                <Typography>Est/ Monthly Rent: {prop['Est. monthly rent']}</Typography>
              </Grid>
            )}
            {'Price-to-rent ratio' in prop && (
              <Grid xs={12}>
                <Typography>Price to Rent Ratio: {prop['Price-to-rent ratio']}</Typography>
              </Grid>
            )}
            {'Rating' in prop && (
              <Grid xs={12}>
                <Typography>Rating: {prop.Rating}</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};
export default FavModal;
