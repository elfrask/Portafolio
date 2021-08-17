
let page = true
let go = q => document.getElementById(q);
let asi = (q, r) => Object.assign(q, r);
let toc = localStorage.getItem("toc");


function range(i, f, j) {
    j=j||1
    let salida = []
    for (let x = i||0; x< f; x=x+j) {
        salida.push(x)
    };
    return(salida)
}

function genlink(l) {
    return () => {
        open(l)//document.location.assign(l)
    }
}

function copy(p) {
    let me = go("__cop__");
    
    me.value = p+"";
    me.select();
    document.execCommand("copy");
}

class Mult extends React.Component {
    render() {
        return (
            range(0, this.props.count||1).map(e=>this.props.children)
        )
    }
}

class Imglink extends React.Component {
    
    render() {

        return (
            <div 
            data-aos={"fade-" + this.props.aos||"up"}
            onClick={genlink(this.props.link||"")} 
            style={asi(
                {backgroundImage:`url("${this.props.img||""}")`},
                this.props.style)}
            className="imglink"
            >
                
            </div>
        )
    }
}

class Widgetbox extends React.Component {
    render() {
        return (
            <div className="wid_box">
                {this.props.children}
            </div>
        )
    }
};

class Widget extends React.Component {
    render() {
        return (
            <div data-aos="fade-up" className="wid medio" onDoubleClick={() =>{
                if (this.props.url) open(this.props.url)
            }} onClick={() => {
                if (!toc) {
                    alert("dar doble click para abrir")
                    toc = true;
                    localStorage.setItem("toc", toc)
                }
            }} style={{
                backgroundImage:`url("${this.props.src||"none"}")`
            }}>
                <div className="page foo medio" style={{
                    fontWeight:"bold",
                    fontSize:"20px",
                    color:"gold"
                }}>
                    
                    {this.props.title||""}

                </div>
            </div>
        )
    }
}

class Win extends React.Component {
    render() {
        let size = 40;
        let salida = Object.assign({
            width: (this.props.width || this.props.ancho || "100px"),
            height: (this.props.height || this.props.alto || "100px"),
            borderRadius: (this.props.rad || 0) + "px"
        }, this.props.style || {})

        
        console.log(salida)
        
        let saluda = (
            <div className="win" style={salida}>


                <div className="win_title" style={{ height: size + "px" }}>
                    {this.props.title || this.props.titulo || "Titulo"}
                    
                </div>
                <div className="win_cont" style={{
                    height: "calc(" +
                        (this.props.height || this.props.alto || "100px")
                        + " - " + size + "px)"
                }}>
                    <div style={{ padding: "20px", width: "max-content", height: "max-content", textAlign: "center" }}>

                        {this.props.children || "Contenido vacio"}
                        
                    </div>
                </div>
            </div>
        );

        saluda.props = Object.assign(this.props, saluda.props)

        return saluda
    }
}

class Pub extends React.Component {
    render() {
        let salida = (
            <div className="pub" style={this.props.style||{}}>
                <div className="pub_left">
                    <img src={this.props.profile || ""} className="pub_img" />
                </div>
                <div className="pub_cont">
                    <p className="pub_p">
                        {this.props.children}
                        
                    </p>
                </div>
            </div>
        )
        salida.props = Object.assign(this.props, salida.props)

        return salida
    }
    
}

class Framepage extends React.Component {
    render() {
        let meco = page ? "page0" : "page1";
        page = !page

        let salida = (
            <div className={meco + " page " +(this.props.className||"")} style={this.props.style || {}} id={this.props.id}>
                {this.props.children}
            </div>
        )

        salida.props = Object.assign(this.props, salida.props)

        return salida

    }
}

class Logo extends React.Component {
    render() {
        let salida = (
            <div className="logo">
                Frask-Dev
            </div>
        );
        salida.props = Object.assign(this.props, salida.props)

        return salida
    }
};

class Rbloqup extends React.Component {
    render() {
        let salida = (
            <div className="R_up" onClick={() => {
                document.location.assign("#contact")
            }}>
                Contactar
            </div>
        );
        salida.props = Object.assign(this.props, salida.props)

        return salida
    }
}

class Opt extends React.Component {
    render() {
        let salida= (

            <div className="opt medio" style={{flexDirection:"column", transition:"0.4s", height:"100%"}}>
                <div style={{width:"100%", height:"200px"}} className="medio">
                    <img src={this.props.img} className="img0" />
                </div> <br />
                <div style={{width:"100%", height:"max-content", flexDirection:"column"}} className="medio">
                    <font className="medio tti"  color="gold">
                        {this.props.title}
                    </font> <br />
                    <p style={{padding:"20px"}} className="medio">
                        {this.props.children}
                    </p>
                </div>
            </div>
        
        );
        salida.props = Object.assign(this.props, salida.props)

        return salida
    }
}