import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import { Typography, Grid, Card, Divider, Box } from '@material-ui/core';

const FavModal = ({ open, handleClose }) => {
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
            <Grid xs={12} className={classes.detail}>
              <Typography>Address:</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>Price:</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>Type:</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>Size:</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>Bed Rooms:</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>Bath Rooms:</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>Est. Montly Mortgage:</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>Est/ Monthly Rent:</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>Price to Rent Ratio:</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography>Rating:</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};
export default FavModal;
