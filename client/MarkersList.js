import React, {useState, useMemo} from 'react';
import { Marker, Popup } from 'react-map-gl';
import Pin from './Pin';

const MarkersList = (props) => {

  const data = props.props.features;

  const [viewport, setViewport] = useState({
    longitude: -121.27096757069442,
    latitude: 36.23291459044428,
    zoom: 12,
    bearing: 0,
    pitch: 0
  });
  
  // setup state to toggle Popupp
  const [showPopup, togglePopup] = useState(false);

  // setup clicked marker state
  const [selectedMarker, setSelectedMarker] = useState({});

  // click handler - when user clicks a marker
  const handleMarkerClick = (marker) => {
    console.log('handle pop up', marker);
    // save clicked marker
    setSelectedMarker(marker);
    console.log('selected marker', selectedMarker);
    // toggle Popup flag to true
    togglePopup(true);
  };
  
  // click handler - when user click close btn on Popup
  const handleCloseClicked = (props) => {
    console.log('handleCloseClicked ', props);
    // toggle Popup flag to false
    togglePopup(false);
    console.log('handleCloseClicked ', showPopup);
  };



  const markers = useMemo( () => data.map(
    (marker, idx) => (
      <Marker
        key={idx}
        longitude={marker.geometry.coordinates[0]}
        latitude={marker.geometry.coordinates[1]}
        onClick={ () => handleMarkerClick(marker) }
      >
        <Pin size={20} />
      </Marker>
    )
  ), [data]);


  return (
    <>
      {markers}

      {console.log('showPopup ', showPopup)}
      {console.log('togglePopup ', togglePopup)}
      {console.log('selectedMarker ', selectedMarker)} 
      {showPopup && 
        <Popup
          longitude={selectedMarker.geometry.coordinates[0]}
          latitude={selectedMarker.geometry.coordinates[1]}
          closeButton={true}
          closeOnClick={true}
          onClose={ () => handleCloseClicked(false)}
        >
          <h3>{selectedMarker.properties.title}</h3>
        </Popup>
      }
    </>
  );
};

export default MarkersList;