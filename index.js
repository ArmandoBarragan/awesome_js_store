const express = require("express");
const routerApi = require('./app');


const port = 3000;


var app = express();

routerApi(app);


app.listen(port), () => {
    console.log("Listening on port ", port);
};
