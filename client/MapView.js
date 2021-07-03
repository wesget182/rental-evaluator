// https://mariestarck.com/how-to-display-a-mapbox-map-and-geocoder-mapbox-react-tutorial-part-1/

import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactMapGL, {
  NavigationControl,
} from 'react-map-gl';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

import 'mapbox-gl/dist/mapbox-gl.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import MarkersList from './MarkersList';
import SearchBar from './Components/SearchBar';

<<<<<<< HEAD
const mapboxApiKey =
  'pk.eyJ1IjoiYXJhbWF5IiwiYSI6ImNrcWI2Z3JjOTAxazQydnBlbHIyNWprbXAifQ.HNWa9dA4WXSefOVnqhIVZA';
const test_data = {
  type: 'FeatureCollection',
  features: [
    // {
    //   type: 'Feature',
    //   properties: {
    //     Address: '25 Bocce Ct, Staten Island, NY 10307',
    //     Price: '$780000',
    //     Type: 'SINGLE_FAMILY',
    //     Size: '3187 sqft',
    //     '# bedrooms': 1,
    //     '# bathrooms': 1,
    //     'Est. monthly mortage': '$4000',
    //     'Est. monthly rent': '$1350',
    //     'Price-to-rent ratio': '33.75%',
    //     Rating: 'sucks',

    //     Image:
    //       'https://photos.zillowstatic.com/fp/dfa968d816453bb57722dc00002676a4-p_e.jpg',
    //     ZPID: '62711378',
    //   },
    //   geometry: {
    //     coordinates: [-74.247558, 40.511164],
    //     type: 'Point',
    //   },
    // },
    {
      type: 'Feature',
      properties: {
        Address: '18 Conference Ct #1',
        City: 'Staten Island',
        State: 'NY',
        'Zip code': '10307',
        Address: '18 Conference Ct Staten Island, NY 10307',
        Price: '$2500',
        'Interest rate': null,
        Type: 'APARTMENT',
        Size: 'null sqft',
        '# bedrooms': 3,
        '# bathrooms': 3,
        'Est. monthly mortgage': null,
        'Rent array': [2500],
        'Est. monthly rent': 2500,
        'Price-to-rent ratio': 0,
        Rating: 'Strong buy',
        Image:
          'https://maps.googleapis.com/maps/api/streetview?location=18+Conference+Ct%2C+Staten+Island%2C+NY+10307&size=400x300&key=AIzaSyARFMLB1na-BBWf7_R3-5YOQQaHqEJf6RQ&source=outdoor&&signature=0eixvplaZULdCVjmEaaO1RpPKYU=',
        ZPID: 2080158172,
      },
      geometry: {
        coordinates: [-74.250335693359, 40.513050079346],
        type: 'Point',
      },
    },
=======
>>>>>>> dev

const mapboxApiKey = 'null';

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
  // set Markers state
  // 190 E 72nd St APT 11B, New York, NY 10021
  /** Marker data should look like this
   * {
    "properties": {
      "Street address": "",
      "City": "",
      "State": "",
      "Zip code": "",
      "Address": "",
      "Price": "",
      "Interest rate": 0,
      "Type": "",
      "Size": "",
      "# bedrooms": 0,
      "# bathrooms": 0,
      "Est. monthly mortgage": 0,
      "Rent array": "",
      "Est. monthly rent": "",
      "Price-to-rent ratio": "",
      "Rating": "",
      "Image": "",
      "ZPID": 0
    },
    "geometry": {
      "coordinates": [
        0,
        0
        
      ],
      "type": "Point"
    }
  }
   */
  const [status, setStatus] = useState(null)

  const [markers, setMarkers] = useState({});

  console.log('markers data ', markers)

  useEffect( () => {
    const defaultLocation = 'Mountain View, CA'
    const fetchMarkers = async () => {
      // update API call status
      setStatus('loading')
      try {
        const res = await fetch(`/api/properties?location=${defaultLocation}`, {
          method: 'POST',

          headers: {
            'Content-type': 'application/json'
          }
        })

        const results = await res.json()
        console.log('results ', results)
        // update Markers state
        setMarkers(results)
        // update API call status
        setStatus('done')
      }catch(err) {
        console.error(`fetchMarkers call failed ${err}`)
        // update API call status
        setStatus('error')
      }
    }
    fetchMarkers()
  },[])

  const classes = useStyles('');

  const mapRef = useRef();
  const geocoderContainerRef = useRef();

  const mapStyle = {
    width: '100%',
    height: 600,
  };

  const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px',
  };

  const [viewport, setViewport] = useState({
    // default location - Mountain View, CA
    longitude: -122.08200104737605,
    latitude: 37.38560001105436,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  });

  // console.log('viewport ###', viewport);
  const [addressCoordinates, setAddressCoordinates] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 0,
  });

  const handleViewportChange = useCallback((newViewport) => {
    //  console.log('handleViewportChange called ###', newViewport);
    setViewport(newViewport);
    // save coordinate to reverse lookup address by coordinates
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
            <MarkersList 
              props={markers}
              status={status}              
            />

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
      <div>
        <Paper className={classes.paper}>
          xs=12 lat: {viewport.latitude} <br />
          lng: {viewport.longitude} <br />
          zoom: {viewport.zoom}
        </Paper>
      </div>
    </Container>
  );
};

export default MapView;
