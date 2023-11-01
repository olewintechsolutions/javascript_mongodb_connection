// this is a js file sending data to mongodb in local machine 
// bandaru mahesh
// https://olewintechsolutions.com


// requirements npm installed in your machine
// mongo db 
// mongo compass
// npm install nodemon 

const mongodb = require('mongodb');

// if local host is not working use 0.0.0.0 instead of localhost 

// mongodb://0.0.0.0:27017/mynewCollection

// mongodb://localhost:27017/mynewCollection 

var url = ( "mongodb://localhost:add your port number here// collection name (database name) ");

then (() =>{
    console.log("Successfully connected to MongoDB");
})
.catch (() => {
console.log("Failed to connect to MongoDB");

});

// this is a function created in html form 
const Formdata = new mongodb.Schema({
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
const collection = new mongodb.model('mynewCollection',Formdata);

demoData ={

    name:'MongoDB',
}

collection.insertMany([demoData]);


// in terminal run nodemon along with filename
