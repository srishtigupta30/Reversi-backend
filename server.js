const express = require('express');
const keys=require('./config/keys.js')
const app=express();
const bodyParser= require('body-parser');

//parser application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}))

//Setting up DB
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Reversi:reversi@cluster0.twgzzju.mongodb.net/logindb_reversi2playergame", {useNewUrlParser: true, useUnifiedTopology: true});

//Setup database models
require('./model/Account');

//setup routes
require('./routes/authenticationRoutes')(app);


//const port= 13777;
app.listen(keys.port, () => {
    console.log("Listening on " + keys.port);
});