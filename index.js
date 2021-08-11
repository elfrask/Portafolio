let fs = require('fs');
let bp = require('body-parser')
let express = require('express')
let app = express();

app.use(bp.urlencoded({extended:true}))

let open = p => {
    let me = {
        read:() => fs.readFileSync(p, "utf-8"),
        write:(d) => {
            if (typeof(d) == "string") {
                fs.writeFileSync(p, d)
            } else {
                fs.writeFileSync(p, JSON.stringify(d))
            }
        },
    }
    return me
}

function gen_render(conf) {
    let me = {
        render:(b="", h="") => {
            b=(b+"");
            return fs.readFileSync(me.path.template, "utf-8")
            .replace("${{head}}", fs.readFileSync(h||me.path.head, "utf-8"))
            .replace("${{body}}", b)
        },
        path: {
            head:conf.head||"",
            template:conf.template||""
        }
    };

    return me
};

let pagina = gen_render({
    head:"./public/template/head.html",
    template:"./public/template/template.html"
});

function run() {
    app.get("/", (req, res) => {

        res.send(
            pagina.render(
                open("./public/pages/index.html").read()
            )
        )
    });
    
}; 

run()

app.use("/css", express.static("./css"));
app.use("/js", express.static("./js"));
app.use("/img", express.static("./img"));

app.listen(4000, () => {
    console.log("Server open in the port " + 4000)
})