const mongoose = require("mongoose");
const schema = mongoose.Schema;

const uaPublicInformationSchema = new schema({
  id:{
    type: Number,
    required: true
  },
  aboutUa:{
    type: mongoose.Schema.Types.Mixed,
    required: true
  }, 
  admissions:{
    type: mongoose.Schema.Types.Mixed,
    required: true
  }, 
  academics:{
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
});

const UaPublicInformation = mongoose.model('ua_public_information',uaPublicInformationSchema);
module.exports = UaPublicInformation;

 












  // product_name:{
  //   type: String,
  //   required: true
  // },
  // product_no:{
  //   type: Number,
  //   required: true
  // },  
  // product_description: {
  //   type: String,
  //   required: true
  // }
  // ,price:{
  //   type: Number,
  //   required: true
  // },
  //  picture1:{
  //   type: String,
  //   required: true
  // }, 
  // picture2:{
  //   type: String,
  //   required: true
  // },