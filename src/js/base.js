let N=`
`;
var go = e=>document.getElementById(e);
let Api = {
    console:(e=new HTMLDivElement(), code = []) => {
        let html = ""
        code.forEach((i) => {
            setTimeout(() => {
                html = html + i[1];
                e.innerHTML = html + "<div class=cursor_console>_</div>"
            }, i[0]*1000)
        })
    },
    link:(l)=> {
        let int = go("__interface__");
        
    }
};
(() => {

    function trim(p="") {
        let ca = [N, " "];
        while (ca.includes(p[0])) {
            p = p.slice(1)
        };
        while (ca.includes(p[p.length-1])) {
            p = p.slice(0, p.length-2)
        };
        return p
    };
    let mets = {
        "lener":(e=new HTMLDivElement()) => {
            let texto = e.getAttribute("text")||"!";
            let fin = e.getAttribute("onfinish")||"";
            let delay = parseInt(e.getAttribute("delay")||"100");
            let iter = 0;            
            
            console.log("llego");

            texto = trim(texto)

            let meno = setInterval(() => {
                
                if (iter!==texto.length) {
                    e.innerText = texto.slice(0, iter) + (texto[iter]|| "")
                } else {
                    
                    clearInterval(meno)
                    eval(fin)
                }
                iter++;
                
                //console.log(`"${texto[iter]}"`);
                
            }, delay)
        },
        
    };
    let justo = true;
    let justo_list = ["lener"];
    function draw(just) {
        //just = just||false;
        let divs = document.getElementsByTagName("div");

        //console.log("llego")
        for (let i = 0; i < divs.length; i++) {
            let e = divs[i];
            let mode = e.getAttribute("mode")


            if (mode) {
                
                if (justo | !justo_list.includes(mode)) (mets[mode]||(()=>{}))(e)
            }
            
        };

        justo = false


    };
    

    window.addEventListener("load", () => {
        //draw();

        setTimeout(() => {
            //draw()
        }, 200)
    });
    window.addEventListener("resize", () => {
        //draw();
    });
    
})();