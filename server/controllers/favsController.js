const User = require('../models/userModel');
const favsController = {};

favsController.addFavs = (req, res, next) => {
  //verify favorite and email are on the request
  if (!req.body.favorite || !req.cookies.ssid){
    console.log('no favorites found');
    return res.status(500).send('favsController.addFavs error: nothing on body');
  } else {
    //find the user
    User.findById(req.cookies.ssid)
    .then(user => {
      //grab the existing favs array
      const favs = user.favorites;
      //push new fav onto it
      favs.push(req.body.favorite);
      //set the new favs array to the user favorites
      user.favorites = favs;
      //save it
      user.save();
    })
    .then(() => next())
    .catch(err => console.log('favscontroller.addfavs error, ', err))
  }
}

favsController.getFavs = (req, res, next) => {
  //verify email is on the request
  if(!req.cookies.ssid){
    return res.status(500).send('favsController.getFavs error: no ssid cookie')
  } else {
    //let favsArr;
    User.findById(req.cookies.ssid)
    .then(user => {
      res.locals.favsArr = user.favorites;
    })
    .then(() => next())
    .catch(err => console.log('favscontroller.getFavs error, ', err))
  }
}

module.exports = favsController;
