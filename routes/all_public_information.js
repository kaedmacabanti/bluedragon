const express = require('express');
const app = express();
const UaPublicInformation  = require('../models/ua_public_information_model.js');
const router = express.Router();

const cors = require('cors')

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(cors())

//get all
router.get('/',async (req,res)=>{
    try {
        const publicInformationUa = await UaPublicInformation.find()
        res.json(publicInformationUa)
     } catch (err){
        res.status(500).json({message: err.message})
    }
    // res.send('hello world')
})

 
module.exports = router;












