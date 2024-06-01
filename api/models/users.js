const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   userName : {
    type : String,
    required : true,
    trim : true,
    min:2,
    max : 50
   },
   email : {
    type : String,
    required : true,
    unique : true,
    trim : true,
    max : 50
   },
   password : {
     type : String,
     required  :true,
     min : 2
   },
   cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cart' }],
  transactions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Transaction' }],
})


module.exports = mongoose.model('User',userSchema);