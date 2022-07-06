const express = require('express');
const cors = require('cors');
const app = express();
const port = 9999;
const bodyParser = require('body-parser');

const userRouter = require('./route/user-router');
const authenRouter = require("./route/authen-router");
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



// app.use('/api', function(req, res, next){
//     console.log("hahaha");

//     next();
// })

app.use("/api/users", userRouter)
app.use("/authen", authenRouter)

// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
// })
app.listen(port, ()=>{
    console.log("Server is running on port 9999");
})