const express = require('express');
const router = express.Router();
const {create} = require('../controllers/products');
const { verifyToken } = require('../middleware/auth');


router.post('/create',create);
// router.post('/login',login);

module.exports = router;