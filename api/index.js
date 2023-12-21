let express = require("express");

let app = express();


app.get("/api", (req, res) => {

    res.send(`<h1>Hello World</h1>`)
});


module.exports = app;