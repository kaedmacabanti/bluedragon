const express = require('express');
const app = express();
const ProductModel  = require('../models/product_model');
const router = express.Router();

const cors = require('cors')

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(cors())

//get one
router.get('/:id',async (req,res)=>{
    fetchId=req.params.id;
    ProductModel.find(({id: fetchId}), function(err, val){
        res.send(val)
    })
 
})


module.exports = router;












