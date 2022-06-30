const express = require('express');
const cors = require('cors');
const app = express();
const port = 9999;
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./routes');
routes(app);

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
})
app.listen(port, ()=>{
    console.log("Server is running on port 9999");
})