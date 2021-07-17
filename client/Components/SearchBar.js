import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Price from './SearchBarPoppers/Price';
import BedBath from './SearchBarPoppers/BedBath';
import HomeType from './SearchBarPoppers/HomeType';
import Geocoder from 'react-map-gl-geocoder';

const SearchBar = ({
  mapRef,
  geocoderContainerRef,
  mapboxApiKey,
  handleGeocoderViewportChange,
  setMarkers,
}) => {
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [beds, setBeds] = useState(null);
  const [baths, setBaths] = useState(null);
  const [homeTypes, setHomeTypes] = useState({});

  const useStyles = makeStyles((theme) => ({
    paper: {
      border: '1px solid',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
  }));

  const classes = useStyles();

  const onSubmit = async (address) => {
    const home_type = [];
    for (const [key, value] of Object.entries(homeTypes)) {
      if (value) home_type.push(key);
    }
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const res = await axios.post('/api/properties', null, {
      headers,
      params: {
        location: address,
        minPrice,
        maxPrice,
        bedsMin: beds,
        bathsMin: baths,
        home_type: home_type.toString(),
      },
    });
    setMarkers(res.data);
  };

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Geocoder
            mapRef={mapRef}
            contianerRef={geocoderContainerRef}
            mapboxApiAccessToken={mapboxApiKey}
            onViewportChange={handleGeocoderViewportChange}
            onResult={({ result }) => onSubmit(result.place_name)}
          />
          <Price
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            setMinPrice={setMinPrice}
            classes={classes}
          />
          <BedBath
            beds={beds}
            baths={baths}
            setBaths={setBaths}
            setBeds={setBeds}
            classes={classes}
          />
          <HomeType homeTypes={homeTypes} setHomeTypes={setHomeTypes} classes={classes} />
        </Box>
      </form>
    </>
  );
};

export default SearchBar;
