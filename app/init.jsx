

let rentec = (t, img) => ({title:t, img:img})


let tecno = [
    rentec(
        "HTML",
        "html-5.png"
    ),
    rentec(
        "CSS",
        "css3.png"
    ),
    rentec(
        "JavaScript",
        "javascript.png"
    ),
    rentec(
        "NodeJS",
        "NodeJS.png"
    ),
    rentec(
        "ExpressJS",
        "express.png"
    ),
    rentec(
        "ElectronJS",
        "electron.png"
    ),
    rentec(
        "Git",
        "git.png"
    ),
    rentec(
        "Github",
        "github.png"
    ),
    rentec(
        "ReactJS",
        "react-native.png"
    ),
    rentec(
        "Sass",
        "sass.png"
    ),
    rentec(
        "Python",
        "python.png"
    ),
    rentec(
        "Flask",
        "flask.png"
    )
]


class Block extends React.Component {
    render() {
        return (
            set(
                <div 
                className={"Block " + (this.props.className||"")}
                style={this.props.style||{}}
                >
                    {this.props.children}
                </div>,
                this.props
            )
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <Cuerpo>                
                
                <Block style={{
                    cursor:"default",
                    height:"max-content"
                }}>
                    <div className="" style={{
                        height:"max-content",
                        minHeight:"100%",
                        width:"100%",
                        maxWidth:"625px",
                        margin:"auto",
                    
                    }}>
                        <div style={{
                            "width":"100%",
                            
                        }} className="">
                            <div className="medio" style={{
                                padding:"10%", 
                                "height":"calc(100vh - 180px)",
                                "width":"80%",
                                flexDirection:"column"
                            }}>
                                <h1 className="shadown-title">
                                    Frask
                                </h1>
                                <hr />
                                <p className="text-center">
                                    Hola! Soy Frask un desarrollador web full-stack,
                                    game developer y desarrollador de apps de escritorio.
                                </p>
                            </div>
                            

                            <div 
                            className="box medio" 
                            style={{
                                padding:"10%", 
                                "height":"calc(100vh - 180px)",
                                "width":"80%",
                                flexDirection:"column",    
                                paddingBottom:"100px"
                            }}
                            
                            >

                                <h1
                                className="gold text-impact targ-down" style={{
                                    fontSize:"larger", textAlign:"center", backgroundColor:"gold",
                                    color:"black", width:"100%"
                                    }}>
                                    Tecnologias que uso:
                                </h1>
                                <br /> 
                                <div 
                                
                                className="spacing targ-down" style={{
                                    width:"100%", height:"max-content",
                                    backgroundColor:"crimson"
                                    }}>
                                    {tecno.map(e=>{
                                        return(
                                            <div alt={e.title} className="medio" style={{
                                                "flexDirection":"column"
                                            }}>
                                                <Img 
                                                img={"/img/logos/"+e.img} 
                                                aos="none" 
                                                size="60"
                                                style={{
                                                    margin:"10px",
                                                    borderRadius:"30px",
                                                    backgroundColor:"#222",
                                                    backgroundSize:"80%"
                                                }}
                                                title={e.title}
                                                className=""
                                                
                                                
                                                />
                                                <span className="fonti_title" style={{
                                                    "paddingBottom":"10px"
                                                }}>
                                                    {e.title}
                                                </span>

                                            </div>
                                        )
                                    })}
                                </div>

                            </div>


                        </div>

                        
                    </div>
                    

                </Block>
                <Proj_list data={proj} title="Mis proyectos" />

            </Cuerpo>
        )
    }
};



show()
ReactDOM.render(<App/>, go("__body__"));