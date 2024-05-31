const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const multer = require('multer');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const {register} = require('./controllers/auth')
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const { verifyToken } = require('./middleware/auth');
const { createPost} = require('./controllers/posts')
// INTIAL DATA

// Configurations
dotenv.config();
const app = express();
app.use(express.json());
// middleware to enhance security
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy : "cross-origin"}));

// It logs details about incoming HTTP requests, which can be very useful for 
//debugging, monitoring, and understanding your application's traffic
app.use(morgan('common'));
// This middleware parses incoming requests with JSON payloads
// and makes the parsed data available on req.body.
app.use(bodyParser.json({limit:'30mb',extended:true}));
// This middleware parses incoming requests with URL-encoded payloads (form submissions) 
//and makes the parsed data available on req.body
app.use(bodyParser.urlencoded({limit : '30mb',extended:true}));
app.use(cors());
app.use("/assests",express.static(path.join(__dirname,'public/assests')));



// FILE STORAGE

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"public/assests");
    },
    filename :(req,file,cb)=>{
        cb(null,file.originalname);
    }
}) 
const upload = multer({storage});


// routes;
app.use('/users',userRouter);
app.use('/posts',postRouter);

// DATA BASE SETUP
const PORT = process.env.PORT || 6000
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server Port :${PORT}`);
    })
    // User.insertMany(users);
    // Post.insertMany(posts);
}).catch((error)=>{
    console.log(`${error} did not connect`);
})