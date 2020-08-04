const express = require("express");
const connectDB = require("./config/db");
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;
const host = process.env.host;

// CONNECT DB
connectDB();

//app.use(express.static("public"));
app.use(express.json({extended: false}));
app.use("/api/users", require('./routes/user'));
app.use("/api/auth", require('./routes/auth'));

/*app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});*/

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

var server = app.listen(port, function(){
    console.log(`Server listening at http://${host}:${port}`);
});