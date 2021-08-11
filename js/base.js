(() => {
    let go = e=>document.getElementById(e)
    let mets = {
        "fill":(e=new HTMLDivElement()) => {
            let base = e.getAttribute("base");
            let obj = e.getAttribute("obj");
            let metodo = e.getAttribute("dir-fill")||"h";

            if (["h", "H", "0"].includes(metodo))
            e.style.width = (go(base).offsetWidth-go(obj).offsetWidth) +"px";
            
            else if (["v", "V", "1"].includes(metodo))
            e.style.height = (go(base).offsetHeight-go(obj).offsetHeight) +"px";
            
            console.log("llego")
        }
    };
    function draw() {
        let divs = document.getElementsByTagName("div");

        //console.log("llego")
        for (let i = 0; i < divs.length; i++) {
            let e = divs[i];
            let mode = e.getAttribute("mode")


            if (mode) {
                
                (mets[mode]||(()=>{}))(e)
            }
            
        };


    };
    window.addEventListener("load", () => {
        draw();

        setTimeout(() => {
            draw()
        }, 200)
    });
    window.addEventListener("resize", () => {
        draw();
    });
    
})();