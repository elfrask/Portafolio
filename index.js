let fs = require('fs');
let bp = require('body-parser')
let express = require('express');
let path = require("path");
let app = express.Router();
let r = express();

let j = path.join;

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
    return me // 0
};

//https://condinglive.frask.repl.co/

function gen_render(conf = {head:"./public/template/head.html",template:"./public/template/template.html"}) {
    conf = conf||{}
    let me = {
        render:(b="", h="") => {
            b=(b+"");

            let app = "";
            
            if (fs.existsSync(me.path.template)) app = fs.readFileSync(me.path.template, "utf-8");

            return app
            .replace("${{head}}", ((v) => {
                if (!fs.existsSync(v)) return "";
                
                return fs.readFileSync(v, "utf-8")
            })(h||me.path.head))

            .replace("${{body}}", b)
        },
        path: {
            head:conf.head||"",
            template:conf.template||""
        }
    };

    return me
};



let page = gen_render({template:j(__dirname, "./src/public/template/plantilla.html")});

function run() {
	app.get("/clsweb", (req, res) => {
        res.redirect("https://clswebsite.frask.repl.co/")
    });

    app.get("/codinglive", (req, res) => {
        res.redirect("https://codinglive.frask.repl.co/");
        //res.redirect("https://codinglive.herokuapp.com/");
    });

    app.get("/corin", (req, res) => {
        res.redirect("https://corin.frask.repl.co/");
        //res.redirect("https://codinglive.herokuapp.com/");
    });
    

    
    app.use("/blog", express.static("./src/public/apps/blogedit"));
    app.use("/blogedit", express.static("./src/public/apps/blogedit/blogedit"));

    app.get("/", (req, res) => {
        
        /*
        pagina.render(
            open("./public/pages/index.html").read()
        )
        */
        res.send(
            page.render(
                open(j(__dirname, "./src/public/pages/home.html")).read()
            )
        )
    });
    app.get("/temtem", (req, res) => {
        res.send(
            open(j(__dirname, "./src/public/pages/temm.html")).read()
        )
    })

    app.get("/server_info", (req, res) => {
        res.json({
            cwd:process.cwd(),
            dirname: __dirname,
            serverless: true,
            currentdirectory: fs.readdirSync(".", "utf-8")
        })
    })
    
}; 


// app.use("/css", express.static("./src/css"));
// app.use("/sass", express.static("./src/sass"));
// app.use("/js", express.static("./src/js"));
// app.use("/img", express.static("./src/img"));
// app.use("/music", express.static("./src/music"));
// app.use("/font", express.static("./src/font"));
// app.use("/app", express.static("./src/app"));
run()

app.use("/", express.static(path.join(__dirname, "src")));



let PORT = process.env.PORT || 3000;

r.use(app);

r.listen(PORT, () => {
    console.log("Server open in the port " + PORT)
    console.log();
    console.log([
        `App path: ${__dirname}`,
        `Src path: ${path.join(__dirname, "src")}`
    ].join("\n"))
})