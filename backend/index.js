const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
mongoose.set('strictQuery', false);
const url = 'mongodb://localhost:27017/voting';

app.use(bodyParser.urlencoded({extended:true}));//enables body part data
app.use(bodyParser.json());//json data
app.use(cors());//use model from line 3 

//database connection without warning
const mongooseDbOption = {
    useNewUrlParser : true,
    useUnifiedTopology : true,
};

mongoose.connect(url,mongooseDbOption);
mongoose.connection

//link to the routers module like a import concept 
const adminRouter = require('./router/admin.router.js')
app.use('/admins', adminRouter);
//listen port 
app.listen(8080,()=> console.log('Listing on port 8080'))