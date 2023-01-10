const express = require('express');
const app = express();
const db = require("./connection")
const products = require("./routes/home")

const cors = require('cors')

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(cors())
 
app.use("/all_product", products);
// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));



