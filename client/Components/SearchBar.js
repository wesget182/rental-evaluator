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

// text field for address search
//price range (text field for both min and max) add range slider as option which modifies the field
//number of bed and bath - add button groups for 0+ to 4+
//select bars for min max sqft

const SearchBar = () => {

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

   

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    
    const searchHome = await axios.post(
      'http://localhost:3000/search',
      null,
       {
         headers,
         params:{
          minPrice,
          maxPrice, 
          beds, 
          baths,
          homeTypes,
          minSquareFT,
          maxSquareFT
        }});

      console.log(searchHome) //placeholder for handling response from server

  };


  return(
    <>
      <form className={classes.root} noValidate autoComplete="off">
        <Box display="flex" flexDirection="row">
          <TextField id="outlined-basic" label="Address or ZIP" variant="outlined" onSubmit={onSubmit} />
        
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