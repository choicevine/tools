const express = require('express');
const router = express.Router();


const {User} = require('../../models/User');
const { auth } = require('./../../middleware/auth')




router.get('/', auth, (req, res)=>{
    const user = new User(req.body);

    res.status(200).json({
      isAdmin: req.user.role === 0 ? false : true,
      isAuth: true,
      email: req.user.email,
      name: req.user.name,
      lastname: req.user.lastname,
      role: req.user.role,
      cart: req.user.cart,
      history: req.user.history
    })
  })



 
        


module.exports = router;




