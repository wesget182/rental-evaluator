import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Button, 
        TextField,
        Popper} from '@material-ui/core/';


const Price = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popper' : undefined;

    return(
        <div>
        
    
        <button aria-describedby={id} type="button" onClick={handleClick}>
            Price
        </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
          
        <div className="price-popper">
        <TextField id="outlined-basic" label="MIN" variant="outlined" /> &nbsp; -  &nbsp;   
        <TextField id="outlined-basic" label="MAX" variant="outlined" />
        </div>
      </Popper>

    
        </div>
    )
};

export default Price;