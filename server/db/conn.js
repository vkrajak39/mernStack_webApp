const mongoose= require('mongoose');

const DB=process.env.DATABASE;

mongoose.connect(DB).then(()=>{//for successful connection
    console.log("database successfully connected")
}).catch((error)=>{//for error
    console.log("database not connected  \n"+error)

});