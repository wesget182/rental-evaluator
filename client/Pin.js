import * as React from 'react';
import { userState } from './Slices/userSlice'
import { useSelector } from 'react-redux'
const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

// const pinStyle = {
//   fill: '#d00',
//   stroke: 'none'
// };

function Pin(props) {
  const userFavs = useSelector(userState)
  const favsArr = userFavs.user.favorites


  let {size = 20, color, ActiveMarker} = props;
  favsArr.forEach(fav => {
    if (fav.ZPID === props.zpid) {
      color = 'yellow'
    }
  })

  if(props.idx === props.selectedMarker) color = 'green'
  // console.log('ActiveMarker', props.idx, props.selectedMarker)
  const pinStyle = {
    fill: color,
    stroke: 'none'
  };
  // if (color) Object.assign(pinStyle, {fill : color});

  return (
    <svg height={size} viewBox="0 0 24 24" style={pinStyle} >
      <path d={ICON} />
      Sorry, your browser does not support inline SVG.
    </svg>
  );
}

export default React.memo(Pin);