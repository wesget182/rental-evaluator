import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import {Button, 
  TextField,
  Popper,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  ClickAwayListener
} from '@material-ui/core/';


const Price = ({
  minPrice,
  maxPrice,
  setMaxPrice,
  setMinPrice,
  classes }) => {

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };
    
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleClickAway = () => {
    setAnchorEl(null);
  };
  
  const handleChange = (prop) => (event) => {
    if(prop === 'min') setMinPrice(event.target.value );
    if(prop === 'max') setMaxPrice(event.target.value );
  };

  return(
    <div className={classes.root}>
        
      
      <Button variant="contained"  aria-describedby={id} type="button" onClick={handleClick}>
            Price
      </Button>
      
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <ClickAwayListener onClickAway={handleClickAway}>   
          <div className={classes.paper}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount" size="small">MIN</InputLabel>
              <OutlinedInput
                id="min-price"
                value={minPrice}
                onChange={handleChange('min')}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                labelWidth={100}
                size="small"
                type="number"
              />
          
            </FormControl>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">MAX</InputLabel>
              <OutlinedInput
                id="max-price"
                value={maxPrice}
                onChange={handleChange('max')}
                startAdornment={<InputAdornment position="start">$</InputAdornment>}
                labelWidth={10}
                type="number"
              />
            </FormControl>
          </div>
        </ClickAwayListener>
      </Popper>
      
    
    </div>
  )
};

export default Price;