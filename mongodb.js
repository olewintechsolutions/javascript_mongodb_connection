// this is a js file sending data to mongodb in local machine 
// bandaru mahesh
// https://olewintechsolutions.com


// requirements npm installed in your machine
// mongo db 
// mongo compass
// mongoose 
// npm install nodemon 

const mongoose = require('mongoose');

// if local host is not working use 0.0.0.0 instead of localhost 

// mongodb://0.0.0.0:27017/mynewCollection

// mongodb://localhost:27017/mynewCollection 

mongoose.connect('mongodb://localhost:27017/sample');
//or 
//mongoose.connect("mongodb://localhost:add your port number here// collection name (database name) ");

then (() =>{
    console.log("Successfully connected to MongoDB");
})
.catch (() => {
console.log("Failed to connect to MongoDB");

});

// this is a function created in html form 
// it wll create schema in mongodb in json format
const Formdata = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
       
    password:{
        type:String,
        required:true,

    },
    gmail: {
        type:String,
        required:true,

    },
    mobileNumber: {
        type:integer,
        required:true,
    },
    age:{
        type:integer,
        required:true,

    },
    // add additional properties to the element type    

});

// make sure above defined collection name along with localhost is same as here in model
/// add schema name to parameter element
const collection = new mongoose.model('sample',Formdata);

demoData ={

    name:'olewintechsolutions',
}

collection.insertMany([demoData]);


// in terminal run nodemon along with filename
