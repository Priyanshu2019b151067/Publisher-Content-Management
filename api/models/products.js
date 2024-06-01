const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
   title : {
    type : String,
    required : true,
    trim : true,
   },
   description : {
    type : String,
    required : true,
    trim : true,
   },
   price : {
     type : String,
     required  :true,
   }
});


module.exports = mongoose.model('Product',productSchema);