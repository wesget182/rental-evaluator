import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import FavoriteIcon from '@material-ui/icons/Favorite';
import api from '../axios/axios';
import FavModal from './FavsModal';

//Favorite array state set by get request in component fxn
// const [tileData, setTileData] = useState([]);
const tileData = [
  {
    img: 'https://photos.zillowstatic.com/fp/dc3b1651b95ca288bbb5e6d273186332-cc_ft_768.jpg',
    address: '45101 State Highway 82, Aspen, CO 81611',
    price: '$51,000,000',
    rentalAsset: 'Nah',
  },
  {
    img: 'https://photos.zillowstatic.com/fp/dc3b1651b95ca288bbb5e6d273186332-cc_ft_768.jpg',
    address: '45101 State Highway 82, Aspen, CO 81611',
    price: '$51,000,000',
    rentalAsset: 'Nah',
  },
  {
    img: 'https://photos.zillowstatic.com/fp/dc3b1651b95ca288bbb5e6d273186332-cc_ft_768.jpg',
    address: '45101 State Highway 82, Aspen, CO 81611',
    price: '$51,000,000',
    rentalAsset: 'Nah',
  },
  {
    img: 'https://photos.zillowstatic.com/fp/dc3b1651b95ca288bbb5e6d273186332-cc_ft_768.jpg',
    address: '45101 State Highway 82, Aspen, CO 81611',
    price: '$51,000,000',
    rentalAsset: 'Nah',
  },
  {
    img: 'https://photos.zillowstatic.com/fp/dc3b1651b95ca288bbb5e6d273186332-cc_ft_768.jpg',
    address: '45101 State Highway 82, Aspen, CO 81611',
    price: '$51,000,000',
    rentalAsset: 'Nah',
  },
  {
    img: 'https://photos.zillowstatic.com/fp/dc3b1651b95ca288bbb5e6d273186332-cc_ft_768.jpg',
    address: '45101 State Highway 82, Aspen, CO 81611',
    price: '$51,000,000',
    rentalAsset: 'Nah',
  },
  {
    img: 'https://photos.zillowstatic.com/fp/dc3b1651b95ca288bbb5e6d273186332-cc_ft_768.jpg',
    address: '45101 State Highway 82, Aspen, CO 81611',
    price: '$51,000,000',
    rentalAsset: 'Nah',
  },
  {
    img: 'https://photos.zillowstatic.com/fp/dc3b1651b95ca288bbb5e6d273186332-cc_ft_768.jpg',
    address: '45101 State Highway 82, Aspen, CO 81611',
    price: '$51,000,000',
    rentalAsset: 'Nah',
  },
  {
    img: 'https://photos.zillowstatic.com/fp/dc3b1651b95ca288bbb5e6d273186332-cc_ft_768.jpg',
    address: '45101 State Highway 82, Aspen, CO 81611',
    price: '$51,000,000',
    rentalAsset: 'Nah',
  },
  {
    img: 'https://photos.zillowstatic.com/fp/dc3b1651b95ca288bbb5e6d273186332-cc_ft_768.jpg',
    address: '45101 State Highway 82, Aspen, CO 81611',
    price: '$51,000,000',
    rentalAsset: 'Nah',
  },
  {
    img: 'https://photos.zillowstatic.com/fp/dc3b1651b95ca288bbb5e6d273186332-cc_ft_768.jpg',
    address: '45101 State Highway 82, Aspen, CO 81611',
    price: '$51,000,000',
    rentalAsset: 'Nah',
  },
  {
    img: 'https://photos.zillowstatic.com/fp/dc3b1651b95ca288bbb5e6d273186332-cc_ft_768.jpg',
    address: '45101 State Highway 82, Aspen, CO 81611',
    price: '$51,000,000',
    rentalAsset: 'Nah',
  },
];
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
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
function TitlebarGridList() {
  const classes = useStyles();
  const [favDetailsOpen, setFavDetailsOpen] = useState(false);
  //open/close handlers for add record modal
  const handleOpen = () => {
    setFavDetailsOpen(true);
    console.log('detail modal OPEN');
  };

  const handleClose = () => {
    setFavDetailsOpen(false);
  };
  //get request to retrieve favorites
  //   api.get('/getFavs').then((res) => {
  //     //**************************************
  //     //change set state var to whatever user schema favs name.
  //     //********************************************/
  //     setTileData(res.favorites);
  //   });
  return (
    <div>
      <div className={classes.root}>
        <GridList cellHeight={300} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div" className={classes.header}>
              Favorites
            </ListSubheader>
          </GridListTile>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />

              <GridListTileBar
                title={tile.address}
                subtitle={
                  <span>
                    Price: {tile.price}
                    <br /> Viable Rental: {tile.rentalAsset}
                  </span>
                }
                actionIcon={
                  <IconButton
                    aria-label={`info about ${tile.address}`}
                    className={classes.icon}
                    onClick={handleOpen}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
      <FavModal open={favDetailsOpen} handleClose={handleClose} />
    </div>
  );
}

export default TitlebarGridList;
