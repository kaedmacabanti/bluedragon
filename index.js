const express = require('express');
const app = express();
const db = require("./connection")
const products = require("./routes/all_products")
const one_product = require("./routes/one_product")
 
const cors = require('cors')

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(cors())
 
app.use("/all_products", products);

app.use("/product", one_product);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port http://localhost:${port}`));



