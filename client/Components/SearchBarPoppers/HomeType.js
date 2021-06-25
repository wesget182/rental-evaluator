import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Button, 
        TextField,
        Popper} from '@material-ui/core/';


const HomeType = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
      };
    
      const open = Boolean(anchorEl);
      const id = open ? 'simple-popper' : undefined;

    return(
        <div>
        
    
        <button aria-describedby={id} type="button" onClick={handleClick}>
            Home Type
        </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className="popper">House, Townhouse, ??multi-famil??, Condos</div>
      </Popper>

    
        </div>
    )
};

export default HomeType;