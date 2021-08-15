


//import React, { Component } from 'react'

let page = true
let go = q=>document.getElementById(q)

class Win extends React.Component {
    render() {
        return (
            <div className="win" style={{
                    width: (this.props.width||this.props.ancho||"100px"),
                    height: (this.props.height||this.props.alto||"100px"),
                    borderRadius: (this.props.rad||0)+"px"
                }}>

                <div className="win_title" style={{height:"30px"}}>
                    {this.props.title||this.props.titulo||"Titulo"}
                </div>
                <div className="win_cont" style={{height:"calc("+ 
                (this.props.height||this.props.alto||"100px") 
                +" - 30px)"}}>
                    <div style={{padding:"20px", width:"max-content", height:"max-content", textAlign:"center"}}>

                        {this.props.children||"Contenido vacio"}
                    </div>
                </div>
            </div>
        )
    }
}

class Framepage extends React.Component {
    render() {
        let meco = page? "page0":"page1";
        page = !page

        return (
            <div className={meco  +" page"} style={this.props.style||{}} id={this.props.id}>
                {this.props.children}        
            </div>
        )
    }
}

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                Frask-Dev
            </div>
        )
    }
};


class Rbloqup extends React.Component {
    render() {
        return (
            <div className="R_up">
                Contactar
            </div>
        )
    }
}


class App extends React.Component {
    render() {
        //console.log(this.props)
        return (
            <div>
                <div className="head" id="head"> 
                    <Logo/>

                    <Rbloqup />
                </div>
                <div className="body">
                    <Framepage id="m1">
                        <Win title="Hola mundo" alto="200px" ancho="300px" rad="10">
                            <font style={{color:"gold"}}>
                                Bienvenido a mi portafolio web!
                            </font>
                            <br /><br />
                            <hr /> <br />
                            <p>
                                le dare un pequeño recorrido por este pequeño portafolio
                            </p>
                        </Win>
                    </Framepage>
                    <Framepage>
                        <Win title="Hola mundo" alto="400px" ancho="300px" rad="10">
                            Bienvenido a mi portafolio
                        </Win>
                    </Framepage>
                    <Framepage>
                        Hola mundo
                    </Framepage>
                    <Framepage>
                        Hola mundo
                    </Framepage>
                    
                </div>
            </div>
        )
    };
    
}




function main() {
    ReactDOM.render(
        <div>
            <App id="identidad">
                <div>saludos</div>
            </App>
        </div>,
        document.getElementById("__body__")
    )
};
main()


window.addEventListener("load", () => {
    let x= {
        height:(-go("head").offsetHeight+window.innerHeight)+"px"
    };
    go("m1").style.height =x.height
    //console.log(x)
})
