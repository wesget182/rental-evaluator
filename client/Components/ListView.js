// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { propState } from "../Slices/propSlice";
// import { makeStyles } from "@material-ui/core/styles";
// import ImageList from "@material-ui/core/ImageList";
// import ImageListItem from "@material-ui/core/ImageListItem";
// import boiseList from "../PropertyTestData/boiseList.js";
// import ImageListItemBar from "@material-ui/core/ImageListItemBar";
// import IconButton from "@material-ui/core/IconButton";
// import StarBorderIcon from "@material-ui/icons/StarBorder";
// // const [selectedMarker, setSelectedMarker] = useState({});
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     position: 'relative',
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     //   flexDirection: 'column',
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper,
//   },
//   imageList: {
//     flexWrap: "nowrap",
//     transform: "translateZ(0)",
//   },
//   title: {
//     color: theme.palette.primary.light,
//   },
//   titleBar: {
//     background:
//       "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
//   },

// }));

// export default function ListView(props) {
//   const classes = useStyles();
//   const state = useSelector(propState);
// console.log('LVprops', props)

//   let features = state.prop.properties[0].propertiesForRental.features

//   console.log(features)
//   return (
//     <div className={classes.root}>
//       <ImageList rowHeight={160} className={classes.imageList} cols={3}>
//         {features.map((item, idx) => (
//           <ImageListItem key={'listViewKey '+idx} id={'LVId '+ idx} cols={item.cols || 1}>
//             {item.properties.Address}
//             <img src={item.properties.Image} alt={item.title} />
//             <ImageListItemBar
//               title={item.properties.Address}
//               classes={{
//                 root: classes.titleBar,
//                 title: classes.title,
//               }}
//               actionIcon={
//                 <IconButton aria-label={`star ${item.title}`}>
//                   <StarBorderIcon className={classes.title} />
//                 </IconButton>
//               }
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </div>
//   );
// }
