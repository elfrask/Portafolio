

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
                        <div className="d2 medio" style={{cursor:"default"}}>
                            
                            <div data-aos="fade-right" data-aos-delay="400"
                            className="box medio" 
                            style={{width:"250px", height:"max-content"}}>

                                <div>
                                    <h1 className="gold text-impact targ" style={{
                                        fontSize:"larger", textAlign:"center", backgroundColor:"gold",
                                        color:"black", width:"100%"
                                        }}>
                                        ¡Bienvenidos!
                                    </h1>
                                    <br />
                                    <div className="targ saludo" style={{
                                        color:"white", backgroundColor:"#333", fontSize:"20px"
                                        }}>
                                        "¡Saludos! Mi nombre es<span className="text-color-page"> Frask </span> 
                                        sea bienvenido a mi portafolio. Soy un desarrollador web 
                                        Full-stack y desarrollador de software
                                        autodidacta, con las constantes ganas de aprender mas.
                                        Puedes contactarme en caso que nesecites mas informacion".
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
                                        {tecno.map(e=>{
                                            return(
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
                                                click={x=>{alert(e.title)}}
                                                
                                                />
                                            )
                                        })}
                                    </div>
                                </div>

                            </div>

                        </div>
                        
                    </div>
                    

                </Block>
                <Proj_list data={proj} title="Mis proyectos" />
                <Proj_list data={proj} title="Otros proyectos" />

            </Cuerpo>
        )
    }
};



show()
ReactDOM.render(<App/>, go("__body__"));