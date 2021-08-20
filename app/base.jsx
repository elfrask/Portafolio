
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
    
    setTimeout(()=> {

        document.body.style.overflow="auto";

    },1000)
}

function genlink(l) {
    return () => {
        if (l) document.location.assign(l)
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
            data-aos={"fade-" + (this.props.aos||"up")}
            onClick={genlink(this.props.link||"")} 
            className="Imglink"
            style={asi(
                {
                    backgroundImage:`url("${this.props.img||""}")`,
                    width:(this.props.size||"50") +"px",
                    height:(this.props.size||"50") +"px",
                },
                this.props.style
            )}
            >
                
            </div>
        )
    }
}
class Img extends React.Component {
    
    render() {

        let toli = asi(
            this.props.style||{},
            {
                backgroundImage:`url("${this.props.img||""}")`,
                width:(this.props.ancho||this.props.size||"100")+"px",
                height:(this.props.alto||this.props.size||"100")+"px",
            });
        console.log(toli)
        return (
            <div 
            className={"imgb " + (this.props.className||"")}
            style={toli}
            onClick={genlink(this.props.link||"")} 
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
                <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    width:"calc(100%)",
                    height:"max-content"
                }}>
                    <Imglink img="/img/red/git.png" link="https://github.com/elfrask" aos="right"/>
                    <Imglink img="/img/red/git.png" link="https://github.com/elfrask" aos="up"/>
                    <Imglink img="/img/red/git.png" link="https://github.com/elfrask" aos="left"/>

                </div>
                <br /> <br />
                <div style={{
                    display:"flex",
                    justifyContent:"space-around",
                    width:"calc(100%)",
                    height:"max-content"
                }}>
                    Contactame
                </div>
                <div style={{
                    width:"calc(100%)",
                    height:"40px"
                }}>

                </div>
            </div>
        )
    }
}


class Cuerpo extends React.Component {
    
    render() {

        
        return (
            <div className="Body">

                <div>

                </div>
                
                <Cabeza/>
                <div className="bbd" style={{width:"100%", minHeight:"calc(100% - 90px)"}}>
                    {this.props.children}
                </div>
                <Floor/>
            </div>
        )
    }
}