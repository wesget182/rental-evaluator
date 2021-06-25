import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Button, 
        TextField,
        Popper} from '@material-ui/core/';
import Price from './SearchBarPoppers/Price'
import BedBath from './SearchBarPoppers/BedBath'
import HomeType from './SearchBarPoppers/HomeType'
import SquareFt from './SearchBarPoppers/SquareFt'

// text field for address search
//price range (text field for both min and max) add range slider as option which modifies the field
//number of bed and bath - add button groups for 0+ to 4+
//select bars for min max sqft

const SearchBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popper' : undefined;

    return(
        <div>
        
    <form noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Address or ZIP" variant="outlined" />
        
      <Price/>
      <BedBath/>
      <HomeType/>
      <SquareFt/>

    </form> 
        </div>
    )
};

export default SearchBar;