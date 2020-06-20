const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const host = process.env.host;

app.use(express.static("public"));
app.use("/api/user", require('./routes/user'));
app.use("/api/auth", require('./routes/auth'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

var server = app.listen(port, function(){
    console.log(`Server listening at http://${host}:${port}`);
});