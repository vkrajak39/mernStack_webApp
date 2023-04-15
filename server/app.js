const dotenv =require('dotenv');
const express = require('express');
const mongoose= require('mongoose');
const app = express();


//database connection
dotenv.config({path:"./config.env"});


//moved this part in db section
        // const DB = process.env.DATABASE;    //hiding database userid and password
const PORT = process.env.PORT;      //hiding port number to keep data secure




//moved this part in db section

            // mongoose.connect(DB).then(()=>{//for successful connection
            //     console.log("database successfully connected")
            // }).catch((error)=>{//for error
            //     console.log("database not connected  \n"+error)

            // });

require("./db/conn");   //requiring the above mentioned db connection code



//middleware

const middleware = (req,res,next)=>{
    console.log("hello from middleware");

    if(true /*condition to check */)
    {
        next();
    }

}

app.get('/',(req,res)=>{
    res.send("Hello world from the server")
});

app.get('/AboutMe',middleware,(req,res)=>{
    console.log("hello from aboutMe");
    res.send("Hello world from the AboutMe page ")
});

app.get('/Contacts',(req,res)=>{
    res.send("Hello world from the  contacts page")
});
app.get('/Login',(req,res)=>{
    res.send("Hello world from the login page")
});

app.get('/Register',(req,res)=>{
    res.send("Hello world from the register page")
});




app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`)
});