const express = require('express');
const router = express.Router();


// get -> used to display data
router.get('/',(req,res)=>{
    res.send("Hello world from the server from routerjs")
});

//**just like app.get **/

// app.get('/',(req,res)=>{
//     res.send("Hello world from the server")
// });



// post-> used to get the user entered data

router.post('./Register', (req,res)=>{
    // request.body has the user entered data
    console.log(req.body);
    req.json({message:req.body});
});

module.exports = router;