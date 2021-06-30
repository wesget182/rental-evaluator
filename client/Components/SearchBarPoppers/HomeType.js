import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Button, 
  FormControlLabel,
  FormGroup,
  Popper,
  Switch,
  ClickAwayListener
} from '@material-ui/core/';
 

const HomeType = ({
  homeTypes,
  setHomeTypes,
  classes}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [checkedState, setCheckedState] = useState({
    house:false,
    townhouse:false,
    condo:false,
    multi:false
  });

  const handleClick = (e) => {
    setAnchorEl(anchorEl ? null : e.currentTarget);
  };
    
  const handleChange = (e) => {
    setCheckedState({ ...checkedState, [e.target.name]: e.target.checked });
    setHomeTypes({ ...checkedState, [e.target.name]: e.target.checked });
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  return(
    <div>
        
      
      <Button variant="contained" aria-describedby={id} type="button" onClick={handleClick}>
            Home Type
      </Button>
      
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className={classes.paper}>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Switch
                    checked={checkedState.house}
                    onChange={handleChange}
                    name="house"
                    color="primary"
                  />
                }
                label="House"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={checkedState.townhouse}
                    onChange={handleChange}
                    name="townhouse"
                    color="primary"
                  />
                }
                label="Townhouse"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={checkedState.condo}
                    onChange={handleChange}
                    name="condo"
                    color="primary"
                  />
                }
                label="Condo"
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={checkedState.multi}
                    onChange={handleChange}
                    name="multi"
                    color="primary"
                  />
                }
                label="Multi-family"
              />
            </FormGroup>
          
          </div>
        </ClickAwayListener>
      </Popper>

    
    </div>
  )
};

export default HomeType;