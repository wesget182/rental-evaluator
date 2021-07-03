import React, { useMemo, useState } from 'react';
import { Marker, Popup } from 'react-map-gl';
import Pin from './Pin';
// import PinSingleLocation from './PinSingleLocation';
import MapModal from './components/MapModal';
import api from './axios/axios';
import Spinner from './Components/Spinner';
import boiseList from './PropertyTestData/boiseList';
const MarkersList = (props) => {
  console.log('props', props)
  let features = []
  let singleLocation = {}
  const { status } = props
  console.log('status ', status)

  // setup state to toggle Popupp
  const [MapModalOpen, setMapModalOpen] = useState(false);
  



// const MarkersList = (props) => {
  // const data = props.props.features;
  // const data = boiseList.propertiesForSale.features;

  const [showSingleLocation, setShowSingleLocation] = useState(false);
  // use case - when it's a general area search
  //e.g. Mountain View, CA
  if (status === 'done') {
    if(props.props.propertiesForSale) {
      features = props.props.propertiesForSale.features
    }
    // use case - when it's a speific location search
    // 190 E 72nd St APT 11B, New York, NY 10021
    // console.log('features ', features)
    else if (props.props.targetForSale) {
      singleLocation = props.props.targetForSale.features
      //  features = props.props.propertiesForRental.features
      features = singleLocation
      //  setShowSingleLocation(true)
      if (props.props.propertiesForRental){
      //  features.push(...props.props.propertiesForRental.features)
        features = features.concat(props.props.propertiesForRental.features)
      }
    }
  }
  
  console.log('propertiesForRental ', props.props.propertiesForRental)
  console.log('singleLocation ', singleLocation)
  console.log('features ', features)
  // const data = props.props.features;
  // const data = boiseList.propertiesForSale.features;

  //state to hold list of properties from initial area query
  const [propList, setPropList] = useState(
    boiseList.propertiesForSale.features
  );

  //state to hold specific property details when map pin clicked
  //will be displayed on modal and saved to mongodb if fav added
  const [propDetail, setPropDetail] = useState({});

  //second api call to get rent data and rating on specific address
  const getDetails = async (e, feature) => {
    // console.log('DATA ', data);
    console.log('clicked property');
    console.log(feature);
    // await api
    //   .get('/properties/target', {
    //     params: {
    //       // location: propList[4].properties.Address,
    //       //give pins id of the array index they were created from
    //       //to id the proper index onclick
    //       location: features[e.target.id]['Zip code'],
    //       home_type: features[e.target.id].Type,
    //       beds: features[e.target.id]['# bedrooms'],
    //       baths: features[e.target.id]['# bathrooms'],
    //       Price: features[e.target.id].Price,
    //       ZPID: features[e.target.id].ZPID
    //     },
    //   })
    //   .then((res) => {
    //     console.log('RES IN API TARGET', res);
    //     setPropDetail(res);
    //     console.log('PROP DETAIL', propDetail);
    //   });
    setPropDetail(feature);
    setMapModalOpen(true);
  };
  //open/close handlers for add record modal
  const handleOpen = (e, idx) => {
    e.preventDefault();
    getDetails(e, features[idx]);
    // setMapModalOpen(true);
    console.log('map modal OPEN');
  };

  const handleClose = () => {
    setMapModalOpen(false);
  };

  // setup clicked marker state
  const [selectedMarker, setSelectedMarker] = useState({});

  let content;

  if (status === 'loading') {
    content = <Spinner />
  } else if (status === 'done') {
    
    content = features.map((marker, idx) => (
      <Marker
        key={idx}
        id={idx}
        longitude={marker.geometry.coordinates[0]}
        latitude={marker.geometry.coordinates[1]}
        // onClick={() => handleMarkerClick(marker)}
        onClick={(e) => handleOpen(e, idx)}
      >
      {/* <Pin size={idx === 0 ? 35 : 20} color={idx === 0 ? 'green' : 'red'} /> */}
      <Pin color={(props.props.targetForSale && idx === 0) ? 'green' : 'red'} size={(props.props.targetForSale && idx === 0) ? 35 : 20}  />
      </Marker>
      )
    )
  } else if (status === 'error') {
    content = <div>{status}</div>
  }

  return (
    <div>
      {content}
      {MapModalOpen && <MapModal
        open={MapModalOpen}
        handleClose={handleClose}
        // propList={features}
        prop={propDetail}
      />}
    </div>
  );
};

export default MarkersList;
