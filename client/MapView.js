/** @format */

// https://mariestarck.com/how-to-display-a-mapbox-map-and-geocoder-mapbox-react-tutorial-part-1/

import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { propertyReducer } from './Slices/propSlice';
import ReactMapGL, { NavigationControl } from 'react-map-gl';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MarkersList from './MarkersList';
import SearchBar from './Components/SearchBar';

const mapboxApiKey =
  'pk.eyJ1IjoiYXJhbWF5IiwiYSI6ImNrcWI2Z3JjOTAxazQydnBlbHIyNWprbXAifQ.HNWa9dA4WXSefOVnqhIVZA';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const MapView = () => {
  const dispatch = useDispatch();
  const classes = useStyles('');
  const mapRef = useRef();
  const geocoderContainerRef = useRef();
  const [status, setStatus] = useState(null);
  const [markers, setMarkers] = useState({});
  const [viewport, setViewport] = useState({
    // default location - Mountain View, CA
    longitude: -122.085762,
    latitude: 37.378983,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  });
  const [addressCoordinates, setAddressCoordinates] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 0,
  });

  useEffect(() => {
    const defaultLocation = 'Mountain View, CA';
    const fetchMarkers = async () => {
      setStatus('loading');
      try {
        const res = await fetch(`/api/properties?location=${defaultLocation}`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
        });
        const results = await res.json();
        setMarkers(results);
        dispatch(propertyReducer(results));
        setStatus('done');
      } catch (err) {
        console.error(`fetchMarkers call failed ${err}`);
        setStatus('error');
      }
    };
    fetchMarkers();
  }, []);

  const mapStyle = {
    width: '100%',
    height: 1000,
  };

  const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px',
  };

  const handleViewportChange = useCallback((newViewport) => {
    setViewport(newViewport);
    setAddressCoordinates(newViewport);
  }, []);

  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 };
      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides,
      });
    },
    [handleViewportChange]
  );

  return (
    <Container>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}></Grid>
          <ReactMapGL
            ref={mapRef}
            mapboxApiAccessToken={mapboxApiKey}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            {...viewport}
            {...mapStyle}
            onViewportChange={handleViewportChange}
          >
            <MarkersList props={markers} status={status} />
            <div style={navStyle}>
              <NavigationControl />
            </div>
            <SearchBar
              mapRef={mapRef}
              geocoderContainerRef={geocoderContainerRef}
              mapboxApiKey={mapboxApiKey}
              handleGeocoderViewportChange={handleGeocoderViewportChange}
              setMarkers={setMarkers}
            />
          </ReactMapGL>
        </Grid>
      </div>
    </Container>
  );
};

export default MapView;
