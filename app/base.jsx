
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
    document.body.style.opacity="1";
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

class Head extends React.Component{
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

class Floor extends React.Component{
    render() {
        return (
            <div>
                
            </div>
        )
    }
}


class Body extends React.Component {
    render() {
        return (
            <div className="Body">
                <Head/>
                <div>
                    {this.props.children}
                </div>
                <Floor/>
            </div>
        )
    }
}