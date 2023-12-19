let express = require("express");
let bp = require("body-parser");

let app = express();


app.get("/", (req, res) => {

    res.send(`<h1>Hello World</h1>`)
});

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server open in the port: ${PORT}`)
})