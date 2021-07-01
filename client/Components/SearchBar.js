import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Box
} from '@material-ui/core/';
import Price from './SearchBarPoppers/Price';
import BedBath from './SearchBarPoppers/BedBath';
import HomeType from './SearchBarPoppers/HomeType';
import SquareFt from './SearchBarPoppers/SquareFt';
import axios from "axios";
import Geocoder from 'react-map-gl-geocoder';

const SearchBar = ({
  mapRef,
  geocoderContainerRef,
  mapboxApiKey,
  handleGeocoderViewportChange
}) => {

  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [beds, setBeds] = useState(null);
  const [baths, setBaths] = useState(null);
  const [homeTypes, setHomeTypes] = useState({});
  const [minSquareFT, setMinSquareFT] = useState(null);
  const [maxSquareFT, setMaxSquareFT] = useState(null);

  const useStyles = makeStyles((theme) => ({
    paper: {
      border: '1px solid',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
  }));
  const classes = useStyles();

  const onSubmit = async (address) => {
    //if (e.keyCode !== 187) return;
    console.log({
      //location: e.target.value,
      minPrice,
      maxPrice, 
      beds, 
      baths,
      homeTypes,
      minSquareFT,
      maxSquareFT,
      address
    });

    const home_type = [];
    for (const [key, value] of Object.entries(homeTypes)) {
      if (value) home_type.push(key);
    }
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    const res = await axios.post(
      '/api/properties',
      null,
      {
        headers,
        params:{
          location: address,
          minPrice,
          maxPrice, 
          bedsMin: beds, 
          bathsMin: baths,
          home_type: home_type.toString()
          // minSquareFT,
          // maxSquareFT
        }
      }
    );
    console.log(JSON.stringify(res.data, null, 2));
  };

  // const keyPress = (e) => {
  //   if(e.keyCode == 13){
  //      console.log('value', e.target.value);
  //     //  onSubmit(e.target.value);
  //   }
  // }

  return(
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <Box display="flex" flexDirection="row" justifyContent="center">
         
          <Geocoder 
              mapRef={mapRef}
              contianerRef={geocoderContainerRef}
              mapboxApiAccessToken={mapboxApiKey}
              onViewportChange={handleGeocoderViewportChange}
        
              onResult={({ result })=>{
                
                console.log(result)  
                const address = result.place_name
                 onSubmit(address)
                }}
            />

          <Price 
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            setMinPrice={setMinPrice}
            classes={classes}
          />
          <BedBath
            beds={beds}
            baths={baths}
            setBaths={setBaths}
            setBeds={setBeds}
            classes={classes}
          />
          <HomeType
            homeTypes={homeTypes}
            setHomeTypes={setHomeTypes}
            classes={classes}
          />
          <SquareFt
            minSquareFT={minSquareFT}
            maxSquareFT={maxSquareFT}
            setMaxSquareFT={setMaxSquareFT}
            setMinSquareFT={setMinSquareFT}
            classes={classes}
          />
        </Box>
      </form> 
    </>
  );
};

export default SearchBar;