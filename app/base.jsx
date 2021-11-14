let page = true
let go = q => document.getElementById(q);
let asi = (q, r) => Object.assign(q, r);
let toc = localStorage.getItem("toc");


function set(d=(new React.Component()), a={}) {
    
    d.props = asi(a, d.props)

    return d
}
function range(i, f, j) {
    j=j||1
    let salida = []
    for (let x = i||0; x< f; x=x+j) {
        salida.push(x)
    };
    return(salida)
}
function show() {
    go("__body__").style.opacity="1";
    
    setTimeout(() => {

        document.body.style.overflow="auto";

    },1000)
};
function gen_proj(title, img, data, link) {
    return(
        {
            img:(img || "none"),
            title:(title || "Titulo"),
            link:(link || "/"),
            data:(data || "")
        }
    )
}

let proj = [
    gen_proj(
        "Blogedit",
        "/img/proj/blogedit.png",
        `
            Blogedit es un editor de contenido
            (CMS minimalista) para editar el 
            contenido de tus blog's o web's 
            basadas en contenido.
        `,
        "/blog"
    ),
    gen_proj(
        "CLS Project",
        "/img/proj/cls.png",
        `
            CLS es un lenguaje de programación
            orientado a objetos y fácil de usar,
            creado por el autor de esta pagina
            (Frask)
        `,
        "/clsweb"
    ),
    gen_proj(
        "Temmie Conga!",
        "/img/proj/temmie.png",
        `
            La cura definitiva a la depresión
            al alcance de un solo clic.
            Baila con temmie y recolecta los a 
            todos :D y no dejes ni uno
        `,
        "/temtem"
    ),
]
proj.push(

    proj[0],
    proj[0],
    proj[0]
)



function genlink(l) {
    return () => {
        if (l) document.location.assign(l)
    }
}
function copiar(p) {
    let me = go("__cop__");
    
    me.value = p+"";
    me.select();
    document.execCommand("copy");
}
function clink(l, msg) {
    return () => {
        copiar(l)
        alert(msg||"link copiado")
    }
}
class Mult extends React.Component {
    render() {
        return (
            range(0, this.props.count||1).map(e=>this.props.children)
        )
    }
}
class Imglink extends React.Component {//style, size, link
    
    render() {
        let cc = (() =>{});
        if (typeof(this.props.link) == "string") {
            cc = genlink(this.props.link||"")
        } else {
            cc = this.props.link
        }
        return (
            <div 
            data-aos={"fade-" + (this.props.aos||"up")}
            onClick={cc} 
            className="Imglink"
            style={asi(
                {
                    backgroundImage:`url("${this.props.img||""}")`,
                    width:(this.props.size||"50") +"px",
                    height:(this.props.size||"50") +"px",
                },
                this.props.style||{}
            )}
            >
                
            </div>
        )
    }
}
class Img extends React.Component {//style, size, className, link
    
    render() {

        let toli = asi(
            this.props.style||{},
            {
                backgroundImage:`url("${this.props.img||""}")`,
                width:(this.props.ancho||this.props.size||"100")+"px",
                height:(this.props.alto||this.props.size||"100")+"px",
            }
        );
        //console.log(toli)
        let click = genlink(this.props.link||"");
        if (this.props.click) {
            click = this.props.click;
        };
        
        return (
            <div 
            className={"imgb " + (this.props.className||"")}
            style={toli}
            onClick={click}
            title={this.props.title||"Imagen"}
            alt={this.props.title||"Frask"}
            >
                
            </div>
        )
    }
}
class Boton extends React.Component{//style, className, link, aos, nodos
    render() {
        return (
            <div 
            style={this.props.style||{}} 
            className={"bt medio " + (this.props.className||"")} 
            onClick={genlink(this.props.link||"")}
            data-aos={"fade-"+(this.props.aos||"up")}
            >
                {this.props.children}
            </div>
        )
    }
}
class Cabeza extends React.Component{
    render() {
        return (
            <div className="Cabeza">

                <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    width:"100%",
                    maxWidth:"400px"
                }}>

                    <Boton aos="right" link="/#port">
                        Portafolio
                    </Boton>

                    <Img img="/img/logo.png" aos="down" size="50"/>
                    
                    <Boton aos="left" link="#contact">
                        Contactame
                    </Boton>
                </div>
                

            </div>
        )
    }
}
class Floor extends React.Component{
    render() {
        return (
            <div className="Pie">
                <section id="contact"></section>
                <div className="aco" style={{
                    alignItems:"center"
                }}>

                    <div style={{
                        display:"flex",
                        justifyContent:"space-around",
                        width:"calc(100%)",
                        height:"max-content"
                    }}>
                        <Imglink img="/img/red/git.png" link="https://github.com/elfrask" aos="right"/>
                        <Imglink img="/img/red/ins.png" link="https://www.instagram.com/soyelfrask/" aos="up"/>
                        <Imglink img="/img/red/dis.png" link={clink("ElFrask#4898", "el nombre a sido copiado")} aos="left"/>

                    </div>
                    
                    <div style={{
                        display:"flex",
                        justifyContent:"space-around",
                        width:"calc(100%)",
                        height:"max-content"
                    }}>
                        <div style={{
                            textAlign:"center",
                            marginTop:"40px"
                        }}>
                            ¿Deseas contactarme?
                            <br />
                            <br />
                            <br />
                            <a href="mailto:carlosxpages@gmail.com">carlosxpages@gmail.com</a>
                            <br /><br />
                            <a href="tel:+584248310640">Telegram</a>

                        </div>
                    </div>
                    

                </div>
                
                
                
                <div style={{
                    width:"calc(100%)",
                    height:"50px"
                }}>

                </div>
            </div>
        )
    }
}
class Cuerpo extends React.Component {//nodos
    
    render() {

        
        return (
            <div className="Body">
                <div style={{
                    zIndex:"0"
                }}>

                  

                    <div style={{
                        width:"100%",
                        height:"max-content",
                        overflow:"auto",
                        zIndex:"1",
                        position:"absolute"
                        
                    }}>

                        <div style={{
                            width:"100%",
                            overflowX:"hidden"

                        }}>
                            <Cabeza/>
                            <div className="bbd" style={{width:"100%"/*, minHeight:"calc(100% - 90px)"*/}}>
                                {this.props.children}
                            </div>
                            <Floor/>
                        </div>
                        
                    </div>
                    
                    <div id="particles-js" className="partjs">

                    </div>
                    
                </div>
                
                
            </div>
        )
    }
}
class Project extends React.Component {//nodos, title, img, url
    render() {
        return (
            <div className="proj-box targ" onClick={genlink(this.props.url||"")}>
                <div className="proj-det">
                    <div className="proj-title">
                        {this.props.title||""}
                    </div>
                    <div className="proj-cont medio">
                        {this.props.children||""}
                    </div>
                </div>
                <div className="proj-img" style={{
                    backgroundImage:"url("+(this.props.img||"")+")",
                }}>

                </div>
            </div>
        )
    }
}
class Proj_list extends React.Component {// data, bg, title
    render() {
        return (

            <Block className="medio" style={{
                backgroundColor:this.props.bg||"#2227",
                flexDirection:"column"
            }}>
                <div style={{width:"100%", height:"100px"}}/>
                <div className="targ title">
                    {this.props.title||"Titulo"}
                </div>



                <div className="aco centri" style={{
                    width:"80%", height:"max-content", margin:"10%"
                }}>

                    {(this.props.data||[]).map(e=> {
                        return (
                            <Project img={e.img} title={e.title} url={e.link}>
                                {e.data}
                            </Project>
                        )
                    })}
                    
                </div>



            </Block>
        )
    }
}