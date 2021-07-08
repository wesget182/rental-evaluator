import React, { useState } from 'react';
import {
  Button,
  Popper,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  ClickAwayListener,
} from '@material-ui/core/';

const SquareFt = ({ minSquareFT, maxSquareFT, setMaxSquareFT, setMinSquareFT, classes }) => {
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
    if (prop === 'min') setMinSquareFT(event.target.value);
    if (prop === 'max') setMaxSquareFT(event.target.value);
  };

  return (
    <div>
      <Button variant="contained" aria-describedby={id} type="button" onClick={handleClick}>
        Square Feet
      </Button>

      <Popper id={id} open={open} anchorEl={anchorEl}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={classes.paper}>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount" size="small">
                MIN SQFT
              </InputLabel>
              <OutlinedInput
                id="min-sqft"
                value={minSquareFT}
                onChange={handleChange('min')}
                endAdornment={<InputAdornment position="end">SQFT</InputAdornment>}
                labelWidth={100}
                size="small"
                type="number"
              />
            </FormControl>
            <FormControl fullWidth className={classes.margin} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">MAX SQFT</InputLabel>
              <OutlinedInput
                id="max-sqft"
                value={maxSquareFT}
                onChange={handleChange('max')}
                endAdornment={<InputAdornment position="end">SQFT</InputAdornment>}
                labelWidth={10}
                type="number"
              />
            </FormControl>
          </div>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};

export default SquareFt;
