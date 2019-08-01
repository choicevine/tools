const express = require('express');
const router = express.Router();


const {User} = require('../../models/User');




router.post('/', (req, res)=>{
    const user = new User(req.body);
        user.save((err, doc)=>{
            if(err) return res.json({success: false, err});
            res.status(200).json({
                success: true,
                userdata: doc
            })
        })
        
    });



 
        


module.exports = router;