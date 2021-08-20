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

class Projects_main extends React.Component {
    render() {
        return (
            <div style={{
                width:"100%", height:"max-content"
            }}>
                
            </div>
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
                        <div className="d2 medio" style={{cursor:"default"}}>
                            
                            <div data-aos="fade-right" data-aos-delay="400"
                            className="box medio" 
                            style={{width:"250px", height:"max-content"}}>

                                <div>
                                    <h1 className="gold text-impact targ" style={{
                                        fontSize:"larger", textAlign:"center", backgroundColor:"gold",
                                        color:"black", width:"100%"
                                        }}>
                                        Saludos y bienvenidas:
                                    </h1>
                                    <br />
                                    <div className="targ saludo" style={{
                                        color:"black", backgroundColor:"white"
                                        }}>
                                        "Saludos! Mi nombre es<span className="text-color-page"> Carlos Pages </span>
                                        aunque me pueden llamar <span className="gold"> Frask </span> 
                                        sea bienvenido a mi Portafolio. Soy desarrollador web 
                                        Full-stack freelancer autodidacta y con muchas 
                                        ganas de aprender".
                                    </div>
                                </div>
                                
                            </div>
                            
                        </div>

                        <div className="d2 medio">
                        

                            <div data-aos="fade-left" data-aos-delay="400"
                            className="box medio" 
                            style={{width:"50%", height:"max-content"}}
                            
                            >

                                <div>
                                    <h1 className="gold text-impact targ" style={{
                                        fontSize:"larger", textAlign:"center", backgroundColor:"gold",
                                        color:"black"
                                        }}>
                                        Tecnologias que uso:
                                    </h1>
                                    <br /> 
                                    <div className="spacing targ" style={{
                                        margin:"auto", width:"250px", minHeight:"220px",
                                        backgroundColor:"crimson"
                                        }}>
                                        {["html-5.png", "Css3.png", "javascript.png",
                                        "NodeJS.png", "express.png", "electron.png",
                                        "git.png", "github.png", "react-native.png", 
                                        "sass.png", "python.png", "flask.png"].map(e=>{
                                            return(
                                                <Img 
                                                img={"/img/logos/"+e} 
                                                aos="none" 
                                                size="60"
                                                style={{
                                                    margin:"10px",
                                                    borderRadius:"30px",
                                                    backgroundColor:"#222",
                                                    backgroundSize:"80%"
                                                }}
                                                className=""
                                                
                                                />
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>

                        </div>
                        
                    </div>
                    

                </Block>
                <Block style={{
                    backgroundColor:"#222"
                }}>
                    <Projects_main/>
                </Block>

            </Cuerpo>
        )
    }
};



show()
ReactDOM.render(<App/>, go("__body__"));