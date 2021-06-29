import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core';

const FavModal = ({ open, handleClose }) => {
  const useStyles = makeStyles((theme) => ({
    container: {
      maxWidth: 800,
      height: '100vh',
    },
  }));
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={handleClose}>
      <p>I'm a modal</p>
      {/* <CreateRecord handleClose={handleClose} /> */}
    </Dialog>
  );
};
export default FavModal;
