import React, { useState, useMemo } from 'react';
import { Marker, Popup } from 'react-map-gl';
import Pin from './Pin';
import MapModal from './components/MapModal';
import api from './axios/axios';
import boiseList from './PropertyTestData/boiseList';

const MarkersList = (props) => {
  // const data = props.props.features;
  const data = boiseList.propertiesForSale.features;

  const [viewport, setViewport] = useState({
    longitude: -121.27096757069442,
    latitude: 36.23291459044428,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  });

  //state to hold list of properties from initial area query
  const [propList, setPropList] = useState(
    boiseList.propertiesForSale.features
  );

  //state to hold specific property details when map pin clicked
  //will be displayed on modal and saved to mongodb if fav added
  const [propDetail, setPropDetail] = useState({});

  //second api call to get rent data and rating on specific address
  const getDetails = async (e) => {
    console.log('DATA ', data);
    await api
      .get('/properties/target', {
        params: {
          location: propList[4].properties.Address,
          //give pins id of the array index they were created from
          //to id the proper index onclick
          // location: propList[e.target.id].Zip,
          // Type: propList[e.target.id].Type
          // beds: propList[e.target.id]['# bedrooms'],
          // bathrooms: propList[e.target.id]['# bathrooms'],
          // Price: propList[e.target.id].Price,
          // ZPID: propList[e.target.id].ZPID
        },
      })
      .then((res) => {
        console.log('RES IN API TARGET', res);
        setPropDetail(res);
        console.log('PROP DETAIL', propDetail);
      });
  };
  // setup state to toggle Popupp
  const [showPopup, togglePopup] = useState(false);
  const [MapModalOpen, setMapModalOpen] = useState(false);
  //open/close handlers for add record modal
  const handleOpen = (e) => {
    e.preventDefault();
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

      {/* {console.log('showPopup ', showPopup)}
      {console.log('togglePopup ', togglePopup)}
      {console.log('selectedMarker ', selectedMarker)} */}

      <MapModal
        open={MapModalOpen}
        handleClose={handleClose}
        propList={propList}
      />
    </div>
  );
};

export default MarkersList;
