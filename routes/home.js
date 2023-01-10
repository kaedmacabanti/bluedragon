const express = require('express');
const app = express();
const ProductModel  = require('../models/product_model');
const router = express.Router();

const cors = require('cors')

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(cors())

//get all
router.get('/',async (req,res)=>{
    try {
        const products = await ProductModel.find()
        res.json(products)
    } catch (err){
        res.status(500).json({message: err.message})
    }
    // res.send('hello world')
})


module.exports = router;
















