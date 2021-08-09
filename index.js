let fs = require('fs');
let bp = require('body-parser')
let express = require('express')
let app = express();

app.use(bp.urlencoded({extended:true}))

app.get("/", (req, res, next) => {

});

app.listen(4000, () => {
    console.log("Server open in the port " + 4000)
})