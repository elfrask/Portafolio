
let consola_API = {
    write:(c=(new HTMLDivElement()), w="", d=0, call) => {
        let ct =" "+ consola_API.trim(w) + " ";

        let cadena = "";
        let iter = 0;
        let pid = setInterval(()=>{
            let e = ct[iter];
            iter++;
            if (e==undefined) {
                clearInterval(pid);
                call();
                return undefined
            };
            cadena = cadena+e
            if (![" ", N].includes(e)) {
                c.innerHTML = c.innerHTML +cadena;
                cadena ="";

            }

        }, d||100)

        return pid;
    },
    print:(c, t, color) => {
        c.innerHTML = c.innerHTML + `<font color="${color||"white"}">${
            
                consola_API.replace(t, N, "<br>")
                
        }</font>`
    },
    replace:(t="", f, r) => {
        
        while (t.includes(f)) {
            t = t.replace(f, r)
        }
        return t
    },
    trim:(x) => {
        let salida=x+ "";
        while ([" ", N].includes(salida[0])) {
            salida = salida.substr(1)
        }
        while ([" ", N].includes(salida.substr(-1))) {
            salida = salida.substr(0, salida.length-1)
        }
        return salida
    }
}

let name_user = (N+
    "<font color=yellowgreen>Frask-Page@</font>"+
    "<font color=dodgerblue>User</font> <font color=yellowgreen>~/</font> " +
    " <font color=yellowgreen>$</font>"
)
let moin = () => {
    let g = document.getElementById("con");
    //console.log("inicio")
    consola_API.print(g, 
`Frask Website - Portfolio (2021).
Todos los derechos reservados (C)
` +name_user
)
    consola_API.write(g, "web me -info", 100, () =>{
        consola_API.print(g, 
`
Esta web Fue hecha por Carlos Alejandro Pages Azocar (Frask).
Frask: Esta es mi web espero sea de su agrado, tengo 16 años y he decidido empezar mi propio emprendimiento de desarrollo web. 
Les dare la bienvenida a mi portafolio.
`+name_user
    );

    setTimeout(() => {
        consola_API.write(g, "services list", 100, () => {
            consola_API.print(g, `
    
            Desarrollo web Front-end y Back-end
            Desarrollo de Software
            Desarrollo Mobile
    ` + name_user)
        })
        
        setTimeout(() => {
            consola_API.write(g, "frask contact list", 100, () => {
                consola_API.print(g, `

Correo(Gmail): <a class=al href="mailto:carlosxpages@gmail.com">carlosxpages@gmail.com</a>
Celular(Telegram): <a class=al href="tel:+584248310640">+58 4248310640</a>
` +name_user)
            })


            setTimeout(() => {
                consola_API.write(g, "exit", 100, () => {
                    consola_API.print(g, `
[process: ${
                        (Math.random()+"").substr(-4)
                    } to stop]`)
                })
            }, 3000)

        }, 3000)

        

    }, 3000)

    
    })
    
};

setTimeout(moin, 1000)