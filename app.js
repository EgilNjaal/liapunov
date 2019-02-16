const express = require("express");


const app = express();


//Static files - all static files in public folder
app.use(express.static("./public"));

//Fire controllers
function server(app){
    app.get("/", function(req,res){
        res.sendFile("./index.html");
    });
};

server(app);

//Listen to port
const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log(`Port: ${PORT}`);