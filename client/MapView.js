// https://mariestarck.com/how-to-display-a-mapbox-map-and-geocoder-mapbox-react-tutorial-part-1/

import React, { PureComponent, useState } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import { Container, Col, Row } from 'reactstrap';
// import Geocoder from 'react-mapbox-gl-geocoder';
import Pin from './Pin';



const mapboxApiKey = 'pk.eyJ1IjoiYXJhbWF5IiwiYSI6ImNrcWI2Z3JjOTAxazQydnBlbHIyNWprbXAifQ.HNWa9dA4WXSefOVnqhIVZA';

const MapView = () => {
  
  // const [lng, setLng] = useState(45.50884);
  // const [lat, setLat] = useState(-73.58781);
  // const [zoom, setZoom] = useState(10);
  const mapStyle = {
    width: '100%',
    height: 600
  };

  const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
  };

  const [viewport, setViewport] = useState({
    lng: -100,
    lat: 40,
    zoom: 4,
    bearing: 0,
    pitch: 0
  });

  const [marker, setMarker] = useState({
    lng: viewport.lng,
    lat: viewport.lat
  });

  return (
    <Container>
      <Row>
        <Col>
          <ReactMapGL
            mapboxApiAccessToken={mapboxApiKey}
            mapStyle='mapbox://styles/mapbox/streets-v11'
            // mapStyle='mapbox://styles/mapbox/light-v9'
            {...viewport}

            {...mapStyle}
            // onViewportChange={ (viewport ) => setViewport(viewport)}
            onViewportChange={ setViewport }
          >
            <Marker 
            
              longitude = {marker.lng}
              latitude = {marker.lat}
            >
              <Pin size={20} />
            </Marker>
            <div style={navStyle}>
              <NavigationControl />
            </div>
          </ReactMapGL>
        </Col>
      </Row>
    </Container>
  );
};

export default MapView;