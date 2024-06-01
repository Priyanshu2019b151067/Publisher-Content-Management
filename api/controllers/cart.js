const Cart = require('../models/cartItem');


const addtoCart = async (req, res) => {
  const { userId } = req.params;
  const { productId, quantity } = req.body;
  // Get the uploaded PDF path
  const pdfPath = req.file ? req.file.path : null; 
  try {
    let cart = await Cart.findOne({ _id : userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }
    cart.items.push({ productId, quantity, pdf: pdfPath });
    await cart.save();
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Remove item from cart
const removefromCart = async (req, res) => {
  const { userId, itemId } = req.params;
  try {
    const cart = await Cart.findOne({ _id : userId });
    cart.items.id(itemId).remove();
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// const getCart = async (req,res) =>{
//     const {userId} = req.params;
//     try {
//         const cart = await Cart.find({_id : userId});
//         res.status(200).json({cart});
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// }

module.exports = {
    addtoCart,
    removefromCart,
    // getCart
};
