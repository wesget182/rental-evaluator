// https://mariestarck.com/how-to-display-a-mapbox-map-and-geocoder-mapbox-react-tutorial-part-1/

import React, { useCallback, useRef, useState, useEffect } from 'react';
import ReactMapGL, {
  Marker,
  NavigationControl,
  Source,
  Layer,
} from 'react-map-gl';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

import 'mapbox-gl/dist/mapbox-gl.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Geocoder from 'react-map-gl-geocoder';
import MarkersList from './MarkersList';
import SearchBar from './Components/SearchBar';
import { SearchBox } from './SearchBox';

const mapboxApiKey = 'pk.eyJ1IjoiYXJhbWF5IiwiYSI6ImNrcWI2Z3JjOTAxazQydnBlbHIyNWprbXAifQ.HNWa9dA4WXSefOVnqhIVZA';

const test_data = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        title: '2650 W El Camino Real #1418, Mountain View, CA 94040',
        description: '2650 W El Camino Real #1418, Mountain View, CA 94040',
      },
      geometry: {
        coordinates: [-122.115637, 37.402857],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '200 Infinity Way #3123614, Mountain View, CA 94043',
        description: '200 Infinity Way #3123614, Mountain View, CA 94043',
      },
      geometry: {
        coordinates: [-122.052596, 37.391553],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '2400 W El Camino Real #SP6BVQT05, Mountain View, CA 94040',
        description:
          '2400 W El Camino Real #SP6BVQT05, Mountain View, CA 94040',
      },
      geometry: {
        coordinates: [-122.107669, 37.399246],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '600 Rainbow Dr APT 102, Mountain View, CA 94041',
        description: '600 Rainbow Dr APT 102, Mountain View, CA 94041',
      },
      geometry: {
        coordinates: [-122.065537, 37.379016],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '2065 California St APT 40, Mountain View, CA 94040',
        description: '2065 California St APT 40, Mountain View, CA 94040',
      },
      geometry: {
        coordinates: [-122.099516, 37.398314],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '1721 California St APT 2, Mountain View, CA 94041',
        description: '1721 California St APT 2, Mountain View, CA 94041',
      },
      geometry: {
        coordinates: [-122.092173, 37.395693],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '273 Tyrella Ave #B, Mountain View, CA 94043',
        description: '273 Tyrella Ave #B, Mountain View, CA 94043',
      },
      geometry: {
        coordinates: [-122.065034, 37.397392],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '1973 San Luis Ave #5, Mountain View, CA 94043',
        description: '1973 San Luis Ave #5, Mountain View, CA 94043',
      },
      geometry: {
        coordinates: [-122.091818, 37.407378],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '2255 Showers Dr APT 131, Mountain View, CA 94040',
        description: '2255 Showers Dr APT 131, Mountain View, CA 94040',
      },
      geometry: {
        coordinates: [-122.108135, 37.407224],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '1375 Montecito Ave #52, Mountain View, CA 94043',
        description: '1375 Montecito Ave #52, Mountain View, CA 94043',
      },
      geometry: {
        coordinates: [-122.082346, 37.402061],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '651 Franklin St FLOOR 2-ID387, Mountain View, CA 94041',
        description: '651 Franklin St FLOOR 2-ID387, Mountain View, CA 94041',
      },
      geometry: {
        coordinates: [-122.085159, 37.388736],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '900 High School Way FLOOR 2-ID170, Mountain View, CA 94041',
        description:
          '900 High School Way FLOOR 2-ID170, Mountain View, CA 94041',
      },
      geometry: {
        coordinates: [-122.085026, 37.387534],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '236 Escuela Ave FLOOR 2-ID276, Mountain View, CA 94040',
        description: '236 Escuela Ave FLOOR 2-ID276, Mountain View, CA 94040',
      },
      geometry: {
        coordinates: [-122.092773, 37.398903],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '950 High School Way FLOOR 2-ID110, Mountain View, CA 94041',
        description:
          '950 High School Way FLOOR 2-ID110, Mountain View, CA 94041',
      },
      geometry: {
        coordinates: [-122.085515, 37.388003],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '300 Granada Dr #5383580, Mountain View, CA 94043',
        description: '300 Granada Dr #5383580, Mountain View, CA 94043',
      },
      geometry: {
        coordinates: [-122.085484, 37.400853],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '405 Stierlin Rd #20, Mountain View, CA 94043',
        description: '405 Stierlin Rd #20, Mountain View, CA 94043',
      },
      geometry: {
        coordinates: [-122.077469, 37.400045],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '1200 Dale Ave #37D3HAHMY, Mountain View, CA 94040',
        description: '1200 Dale Ave #37D3HAHMY, Mountain View, CA 94040',
      },
      geometry: {
        coordinates: [-122.064561, 37.372603],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '200 E Dana St #APJNEP47W, Mountain View, CA 94041',
        description: '200 E Dana St #APJNEP47W, Mountain View, CA 94041',
      },
      geometry: {
        coordinates: [-122.064951, 37.384644],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '750 N Shoreline Blvd #1459747, Mountain View, CA 94043',
        description: '750 N Shoreline Blvd #1459747, Mountain View, CA 94043',
      },
      geometry: {
        coordinates: [-122.078471, 37.405338],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '493 Thompson Ave APT B, Mountain View, CA 94043',
        description: '493 Thompson Ave APT B, Mountain View, CA 94043',
      },
      geometry: {
        coordinates: [-122.09545, 37.409457],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '1005 Boranda Ave, Mountain View, CA 94040',
        description: '1005 Boranda Ave, Mountain View, CA 94040',
      },
      geometry: {
        coordinates: [-122.081839, 37.382741],
        type: 'Point',
      },
    },
    {
      type: 'Feature',
      properties: {
        title: '1005 Boranda Ave, Mountain View, CA 94040',
        description: '1005 Boranda Ave, Mountain View, CA 94040',
      },
      geometry: {
        coordinates: [-121.27096757069442, 36.23291459044428],
        type: 'Point',
      },
    },
  ],
};

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
  const [marker, setMarker] = useState({
    lng: 0,
    lat: 0
  });

  // get Markers data - /api/properties?<address>
  const getMarkers = ()  => {
    console.log('getMarkers...')
  }

  useEffect( () => {
    const fetchMarkers = async () => {

      try {
        const res = await fetch(`/api/properties/${3}`)
      }catch(err) {
        console.error(`fetchMarkers call failed ${err}`)
      }
    }
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

  console.log('viewport ###', viewport);

  
  const [addressCoordinates, setAddressCoordinates] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 0
  })
  
  console.log('addressCoordinates #### ', addressCoordinates)

  const handleViewportChange = useCallback( (newViewport) => {
    console.log('handleViewportChange called ###', newViewport);
    setViewport(newViewport);
    // save coordinate to reverse lookup address by coordinates
    setAddressCoordinates(newViewport)
  },[]);

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
            // mapStyle='mapbox://styles/mapbox/light-v9'
            {...viewport}
            {...mapStyle}
            // onViewportChange={ (viewport ) => setViewport(viewport)}
            onViewportChange={handleViewportChange}
          >
            <MarkersList props={test_data} />

            <div style={navStyle}>
              <NavigationControl />
            </div>

            <SearchBar
              mapRef={mapRef}
              geocoderContainerRef={geocoderContainerRef}
              mapboxApiKey={mapboxApiKey}
              handleGeocoderViewportChange={handleGeocoderViewportChange}
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
