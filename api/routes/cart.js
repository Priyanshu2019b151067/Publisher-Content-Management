const express = require('express');
const router = express.Router();
const multer = require('multer');
const {addtoCart,removefromCart} = require('../controllers/cart')
const upload = multer({ dest: 'uploads/' }); 

router.post('/:userId', upload.single('pdf'),addtoCart);
router.delete('/:userId/:itemId',removefromCart);
// router.get('/:userId',getCart);
module.exports = router;