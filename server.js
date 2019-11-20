'use strict'
const dotenv = require('dotenv').config();
const express = require('express');
var PORT= process.env.PORT || 3000 ;
const server = express();



// application Q2
server.use('/',( request , response)=>{
    response.status(200).send('home Page');
}) ;

// application Q3 
server.use ('/data' , (request , response)=>{
let data = request.get('./data/friend.json') ;
response.data.map(data=>)


})


// application Q4
server.use ('*',(request , response)=>{
response.status(404).send ('not found');
});


server.listen(PORT=>(Console.log('listening on.. ')));