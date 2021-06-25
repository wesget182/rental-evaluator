// https://mariestarck.com/how-to-display-a-mapbox-map-and-geocoder-mapbox-react-tutorial-part-1/

import React, { PureComponent, useState } from 'react';
import ReactMapGL from 'react-map-gl';
import { Container, Col, Row } from 'reactstrap';

const mapStyle = {
  width: '100%',
  height: 600
};

const mapboxApiKey = 'pk.eyJ1IjoiYXJhbWF5IiwiYSI6ImNrcWI2Z3JjOTAxazQydnBlbHIyNWprbXAifQ.HNWa9dA4WXSefOVnqhIVZA';

const MapView = () => {

  // const [lng, setLng] = useState(45.50884);
  // const [lat, setLat] = useState(-73.58781);
  // const [zoom, setZoom] = useState(10);

  const [viewport, setViewport] = useState({
    lng: 37.345708,
    lat: -121.880243,
    zoom: 4
  });

  return (
    <Container>
      <Row>
        <Col>
          <ReactMapGL
            mapboxApiAccessToken={mapboxApiKey}
            mapStyle='mapbox://styles/mapbox/streets-v11'
            {...viewport}

            {...mapStyle}
            onViewportChange={ (viewport ) => setViewport(viewport)}
          >
          </ReactMapGL>
        </Col>
      </Row>
    </Container>
  );
};

export default MapView;