const mongoose = require('mongoose');
// schema for cart item
const cartItemSchema =  new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  pdf: { type: String }
})

// schema for cart specific to user
const cartSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [cartItemSchema],
});
module.exports = mongoose.model('Cart',cartItemSchema);