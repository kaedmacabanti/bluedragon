const express = require('express');
const axios = require('axios');
const app = express();
const db = require("./connection");
const publicInformationUa = require("./routes/all_public_information");
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/ua_api", publicInformationUa);

// Route handler for the root URL
app.get("/", (req, res) => {
  axios.get('http://localhost:9001/ua_api')
    .then(response => {
    //   console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
      console.error(error);
    });
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port http://localhost:${port}`));


// const express = require('express');
// const app = express();
// const db = require("./connection")
// const publicInformationUa = require("./routes/all_public_information")
 
// const cors = require('cors')

// app.use(express.urlencoded({extended:true}));
// app.use(express.json())

// app.use(cors())
 
// app.use("/ua_api", publicInformationUa);
 
 

// // connection
// const port = process.env.PORT || 9001;
// app.listen(port, () => console.log(`Listening to port http://localhost:${port}`));



