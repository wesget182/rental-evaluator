// https://mariestarck.com/how-to-display-a-mapbox-map-and-geocoder-mapbox-react-tutorial-part-1/

import React, { PureComponent, useState } from 'react';
import ReactMapGL, { Marker, NavigationControl, Source, Layer } from 'react-map-gl';
import { Container, Col, Row } from 'reactstrap';
// import Geocoder from 'react-mapbox-gl-geocoder';
import Pin from './Pin';
import 'mapbox-gl/dist/mapbox-gl.css';
import { dataLayer } from './map-styles';

const mapboxApiKey = 'pk.eyJ1IjoiYXJhbWF5IiwiYSI6ImNrcWI2Z3JjOTAxazQydnBlbHIyNWprbXAifQ.HNWa9dA4WXSefOVnqhIVZA';

const test_data = {
  "type": "FeatureCollection",
  "features":[
    {
      "type":"Feature",
      "properties":{
        "title":"2650 W El Camino Real #1418, Mountain View, CA 94040",
        "description":"2650 W El Camino Real #1418, Mountain View, CA 94040"
      },
      "geometry":{
        "coordinates":[
          -122.115637,
          37.402857
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"200 Infinity Way #3123614, Mountain View, CA 94043",
        "description":"200 Infinity Way #3123614, Mountain View, CA 94043"
      },
      "geometry":{
        "coordinates":[
          -122.052596,
          37.391553
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"2400 W El Camino Real #SP6BVQT05, Mountain View, CA 94040",
        "description":"2400 W El Camino Real #SP6BVQT05, Mountain View, CA 94040"
      },
      "geometry":{
        "coordinates":[
          -122.107669,
          37.399246
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"600 Rainbow Dr APT 102, Mountain View, CA 94041",
        "description":"600 Rainbow Dr APT 102, Mountain View, CA 94041"
      },
      "geometry":{
        "coordinates":[
          -122.065537,
          37.379016
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"2065 California St APT 40, Mountain View, CA 94040",
        "description":"2065 California St APT 40, Mountain View, CA 94040"
      },
      "geometry":{
        "coordinates":[
          -122.099516,
          37.398314
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"1721 California St APT 2, Mountain View, CA 94041",
        "description":"1721 California St APT 2, Mountain View, CA 94041"
      },
      "geometry":{
        "coordinates":[
          -122.092173,
          37.395693
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"273 Tyrella Ave #B, Mountain View, CA 94043",
        "description":"273 Tyrella Ave #B, Mountain View, CA 94043"
      },
      "geometry":{
        "coordinates":[
          -122.065034,
          37.397392
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"1973 San Luis Ave #5, Mountain View, CA 94043",
        "description":"1973 San Luis Ave #5, Mountain View, CA 94043"
      },
      "geometry":{
        "coordinates":[
          -122.091818,
          37.407378
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"2255 Showers Dr APT 131, Mountain View, CA 94040",
        "description":"2255 Showers Dr APT 131, Mountain View, CA 94040"
      },
      "geometry":{
        "coordinates":[
          -122.108135,
          37.407224
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"1375 Montecito Ave #52, Mountain View, CA 94043",
        "description":"1375 Montecito Ave #52, Mountain View, CA 94043"
      },
      "geometry":{
        "coordinates":[
          -122.082346,
          37.402061
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"651 Franklin St FLOOR 2-ID387, Mountain View, CA 94041",
        "description":"651 Franklin St FLOOR 2-ID387, Mountain View, CA 94041"
      },
      "geometry":{
        "coordinates":[
          -122.085159,
          37.388736
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"900 High School Way FLOOR 2-ID170, Mountain View, CA 94041",
        "description":"900 High School Way FLOOR 2-ID170, Mountain View, CA 94041"
      },
      "geometry":{
        "coordinates":[
          -122.085026,
          37.387534
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"236 Escuela Ave FLOOR 2-ID276, Mountain View, CA 94040",
        "description":"236 Escuela Ave FLOOR 2-ID276, Mountain View, CA 94040"
      },
      "geometry":{
        "coordinates":[
          -122.092773,
          37.398903
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"950 High School Way FLOOR 2-ID110, Mountain View, CA 94041",
        "description":"950 High School Way FLOOR 2-ID110, Mountain View, CA 94041"
      },
      "geometry":{
        "coordinates":[
          -122.085515,
          37.388003
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"300 Granada Dr #5383580, Mountain View, CA 94043",
        "description":"300 Granada Dr #5383580, Mountain View, CA 94043"
      },
      "geometry":{
        "coordinates":[
          -122.085484,
          37.400853
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"405 Stierlin Rd #20, Mountain View, CA 94043",
        "description":"405 Stierlin Rd #20, Mountain View, CA 94043"
      },
      "geometry":{
        "coordinates":[
          -122.077469,
          37.400045
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"1200 Dale Ave #37D3HAHMY, Mountain View, CA 94040",
        "description":"1200 Dale Ave #37D3HAHMY, Mountain View, CA 94040"
      },
      "geometry":{
        "coordinates":[
          -122.064561,
          37.372603
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"200 E Dana St #APJNEP47W, Mountain View, CA 94041",
        "description":"200 E Dana St #APJNEP47W, Mountain View, CA 94041"
      },
      "geometry":{
        "coordinates":[
          -122.064951,
          37.384644
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"750 N Shoreline Blvd #1459747, Mountain View, CA 94043",
        "description":"750 N Shoreline Blvd #1459747, Mountain View, CA 94043"
      },
      "geometry":{
        "coordinates":[
          -122.078471,
          37.405338
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"493 Thompson Ave APT B, Mountain View, CA 94043",
        "description":"493 Thompson Ave APT B, Mountain View, CA 94043"
      },
      "geometry":{
        "coordinates":[
          -122.09545,
          37.409457
        ],
        "type":"Point"
      }
    },
    {
      "type":"Feature",
      "properties":{
        "title":"1005 Boranda Ave, Mountain View, CA 94040",
        "description":"1005 Boranda Ave, Mountain View, CA 94040"
      },
      "geometry":{
        "coordinates":[
          -122.081839,
          37.382741
        ],
        "type":"Point"
      }
    }
  ]
};

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
    longitude: -121.27096757069442,
    latitude: 36.23291459044428,
    zoom: 4,
    bearing: 0,
    pitch: 0
  });

  const [marker, setMarker] = useState({
    lng: viewport.longitude,
    lat: viewport.latitude
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
            {test_data.features.map( (marker, idx) => {
              return (
                <Marker 
                  key={idx}
                  longitude = {marker.geometry.coordinates[0]}
                  latitude = {marker.geometry.coordinates[1]}
                >
                  <Pin size={20} />
                </Marker>

              );
            })
            }
            
            <div style={navStyle}>
              <NavigationControl 
              />
            </div>

            <Source 
              type='geojson' 
              data={test_data}>
              <Layer 
                {...dataLayer}
              />
            </Source>
          </ReactMapGL>
        </Col>
      </Row>
      lat: {viewport.latitude} <br />
      lng: {viewport.longitude}
    </Container>
  );
};

export default MapView;