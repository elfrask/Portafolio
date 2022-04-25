
let go = (e) => document.getElementById(e);
let app
let data = {};


function open_blog() {

    app = Blogedit.App();
    
    app.onsave((a) => {
        console.log(a);
        data = a;
        go("content").innerHTML= data.data;
        go("title").innerText = data.title;
        go("des").innerText = data.description;
        go("img").style.backgroundImage = `url("${data.img}")`
    });

    app.onload((x) => {
        console.log("Cargado perros")
        x.load(data)
    })
    
    app.open.win()
}

