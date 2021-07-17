import React, { useState } from 'react';
import { Marker } from 'react-map-gl';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';

import Pin from './Pin';
import MapModal from './components/MapModal';
import api from './axios/axios';
import Spinner from './Components/Spinner';
import boiseList from './PropertyTestData/boiseList';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'relative',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: 'white',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

const MarkersList = (props) => {
  const features = [];
  const singleLocation = {};
  const { status } = props;
  const [selectedMarker, setSelectedMarker] = useState({});
  const [propDetail, setPropDetail] = useState({});
  const [MapModalOpen, setMapModalOpen] = useState(false);

  if (status === 'done') {
    if (props.props.propertiesForSale) {
      features.push(...props.props.propertiesForSale.features)
    } else if (props.props.targetForSale) {
      singleLocation = props.props.targetForSale.features;
      features = singleLocation;
      if (props.props.propertiesForRental) {
        features = features.concat(props.props.propertiesForRental.features);
      }
    }
  }

  // api call to get rent data and rating on specific address
  const getDetails = async (e, feature) => {
    if (props.props.propertiesForSale) {
      const res = await api.post('/properties/target', null, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        params: {
          location: feature.properties.Address,
          home_type: feature.properties.Type,
          beds: feature.properties['# bedrooms'],
          baths: feature.properties['# bathrooms'],
          Price: feature.properties.Price,
          ZPID: feature.properties.ZPID,
        },
      });
      setPropDetail(feature);
      setMapModalOpen(true);
    } else {
      setPropDetail(feature);
      setMapModalOpen(true);
    }
  };

  const handleOpen = (e, idx) => {
    e.preventDefault();
    getDetails(e, features[idx]);
    setSelectedMarker(idx);
  };

  const handleClose = () => {
    setMapModalOpen(false);
  };

  function ListView(props) {
    const classes = useStyles();

    let features = props.props;

    const changeBackground = (e) => e.target.style.opacity = '1';

    const opacify = (e) => e.target.style.opacity = '0.6';

    return (
      <div className={classes.root}>
        <ImageList rowHeight={160} className={classes.imageList} cols={3}>
          {features.map((item, idx) => (
            <ImageListItem
              onClick={(e) => handleOpen(e, idx)}
              key={'listViewKey ' + idx}
              id={idx}
              cols={item.cols || 1}
            >
              {item.properties.Address}
              <img
                src={item.properties.Image}
                alt={item.title}
                style={{ opacity: '0.6' }}
                onMouseOver={changeBackground}
                onMouseLeave={opacify}
              />
              <ImageListItemBar
                title={item.properties.Address}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={<IconButton aria-label={`star ${item.title}`}></IconButton>}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
  }

  let content;

  if (status === 'loading') {
    content = <Spinner />;
  } else if (status === 'done') {
    content = features.map((marker, idx) => (
      <Marker
        key={idx}
        id={idx}
        longitude={Number(marker.geometry.coordinates[0])}
        latitude={Number(marker.geometry.coordinates[1])}
        onClick={(e) => handleOpen(e, idx)}
      >
        <Pin
          color={props.props.targetForSale && idx === selectedMarker ? 'green' : 'red'}
          size={props.props.targetForSale && idx === selectedMarker ? 25 : 20}
          zpid={marker.properties.ZPID}
          idx={idx}
          selectedMarker={selectedMarker}
        />
      </Marker>
    ));
  } else if (status === 'error') {
    content = <div>{status}</div>;
  }

  return (
    <div>
      {content}
      {MapModalOpen && <MapModal open={MapModalOpen} handleClose={handleClose} prop={propDetail} />}
      <ListView props={features} />
    </div>
  );
};

export default MarkersList;
