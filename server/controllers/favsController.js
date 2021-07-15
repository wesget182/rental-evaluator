const User = require('../models/userModel');
const favsController = {};

favsController.addFavs = (req, res, next) => {
  //verify favorite and email are on the request
  // if (!req.body.favorite || !req.cookies.ssid) {
  //   console.log('no favorites found');
  //   return res
  //     .status(501)
  //     .send('favsController.addFavs error: nothing on body');
  // } else {
  // console.log('INSIDE ELSE');

  console.log('SSID ', req.cookies.ssid);
  //find the user
  // User.findById(req.cookies)
  User.findById(req.cookies.ssid)
    .then((user) => {
      console.log('INSIDE FIND', user);
      //grab the existing favs array
      let favs = user.favorites;
      let newFavs = []

     

      let dupZPID = 'nothing'

     favs.forEach(el => {
       if (el['ZPID'] === req.body.favorite['ZPID']) dupZPID = req.body.favorite['ZPID']
     })
 //push new fav onto it if there isn't a duplicate, otherwise push existing favs excluding the duplicate. Essentially removing the favortie.
     if(dupZPID === 'nothing') favs.push(req.body.favorite);
     else {
     favs.forEach(el => {
       console.log(el['ZPID'])
       if(el['ZPID'] !== dupZPID) newFavs.push(el)
     })
     favs = newFavs
    }
      console.log('addFavs', favs, newFavs)
      //set the new favs array to the user favorites
      user.favorites = favs;
      //save it
      user.save();
    })
    .then(() => next())
    .catch((err) => console.log('favscontroller.addfavs error, ', err.message));
  // }
};

favsController.getFavs = (req, res, next) => {
  //verify email is on the request
  // console.log('in get favs');
  if (!req.cookies.ssid) {
    return res.status(500).send('favsController.getFavs error: no email property');
  } else {
    //let favsArr;
    User.findById(req.cookies.ssid)
      .then((user) => {
        console.log(user);
        res.locals.favsArr = user.favorites;
      })
      .then(() => next())
      .catch((err) => console.log('favscontroller.getFavs error, ', err));
  }
};

module.exports = favsController;
