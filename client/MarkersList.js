import React, { useState, useMemo } from 'react';
import { Marker, Popup } from 'react-map-gl';
import Pin from './Pin';
import MapModal from './components/MapModal';
import api from './axios/axios';

const MarkersList = (props) => {
  const data = props.props.features;

  const [viewport, setViewport] = useState({
    longitude: -121.27096757069442,
    latitude: 36.23291459044428,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  });

  const [propDetail, setPropDetail] = useState({});
  const getDetails = async (e) => {
    await api
      .get('/target', {
        params: {
          location: '81 Surfside Plz, Staten Island, NY 10307',
          // location: data[0].properties.title,
          //initialQueryStateArray[e.target.id].properties.address
        },
      })
      .then((res) => {
        console.log('RES IN API TARGET', res);
        setPropDetail(res);
      });
  };
  // setup state to toggle Popupp
  const [showPopup, togglePopup] = useState(false);
  const [MapModalOpen, setMapModalOpen] = useState(false);
  //open/close handlers for add record modal
  const handleOpen = (e) => {
    getDetails(e);
    setMapModalOpen(true);
    console.log('map modal OPEN');
  };

  const handleClose = () => {
    setMapModalOpen(false);
  };

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

  const markers = useMemo(
    () =>
      data.map((marker, idx) => (
        <Marker
          key={idx}
          id={idx}
          longitude={marker.geometry.coordinates[0]}
          latitude={marker.geometry.coordinates[1]}
          // onClick={() => handleMarkerClick(marker)}
          onClick={handleOpen}
        >
          <Pin size={20} />
        </Marker>
      )),
    [data]
  );

  return (
    <div>
      {markers}

      {console.log('showPopup ', showPopup)}
      {console.log('togglePopup ', togglePopup)}
      {console.log('selectedMarker ', selectedMarker)}
      {showPopup && (
        <Popup
          longitude={selectedMarker.geometry.coordinates[0]}
          latitude={selectedMarker.geometry.coordinates[1]}
          closeButton={true}
          closeOnClick={true}
          onClose={() => handleCloseClicked(false)}
        >
          <h3>{selectedMarker.properties.title}</h3>
        </Popup>
      )}
      <MapModal
        open={MapModalOpen}
        handleClose={handleClose}
        propDetail={propDetail}
      />
    </div>
  );
};

export default MarkersList;
