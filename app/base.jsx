
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

function show() {
    go("__body__").style.opacity="1";
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
class Img extends React.Component {
    
    render() {

        return (
            <div 
            data-aos={"fade-" + this.props.aos||"up"}
            style={asi(
                {
                    backgroundImage:`url("${this.props.img||""}")`,
                    width:(this.props.ancho||this.props.size||"100")+"px",
                    height:(this.props.alto||this.props.size||"100")+"px",
                },
                this.props.style)}
            className="imgb"
            >
                
            </div>
        )
    }
}

class Boton extends React.Component{
    render() {
        return (
            <div 
            style={this.props.style||{}} 
            className={"bt medio " + (this.props.className||"")} 
            aos={this.props.aos}
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

                <Boton aos="">
                    Portafolio
                </Boton>

                <Img img="/img/logo.png" aos="down" size="50"/>
                
                <Boton>
                    Contactame
                </Boton>
                

            </div>
        )
    }
}

class Floor extends React.Component{
    render() {
        return (
            <div className="Pie">
                
            </div>
        )
    }
}


class Cuerpo extends React.Component {
    render() {
        
        return (
            <div className="Body">
                <div style={{
                    width:"100%",
                    height:"100%",
                    position:"fixed",
                    zIndex:"-1"
                }}>
                    
                </div>
                <Cabeza/>
                <div>
                    {this.props.children}
                </div>
                <Floor/>
            </div>
        )
    }
}