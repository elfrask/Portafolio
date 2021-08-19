class Block extends React.Component {
    render() {
        return (
            set(
                <div 
                className={"Block " + (this.props.className||"")}
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

                <Block>
                    
                    <div className="d2 medio">
                        <div className="saludo" data-aos="fade-right" data-aos-delay="400">
                            "Saludos! Mi nombre es<span className="text-color-page"> Carlos Pages </span>
                            aunque me pueden llamar <span className="gold"> Frask </span> 
                            sea bienvenido a mi Portafolio. Soy desarrollador web 
                            Full-stack freelancer autodidacta y con muchas 
                            ganas de aprender".
                        </div>
                    </div>
                    <div className="d2 medio">

                        <div 
                        className="box medio" 
                        style={{width:"80%", height:"max-content"}}
                        data-aos="fade-left" 
                        data-aos-delay="400"
                        >

                            <div>
                                <h1 className="gold" style={{fontSize:"larger", textAlign:"center"}}>
                                    Tecnologias que uso:
                                </h1>
                                <br />
                                <div className="spacing" style={{margin:"auto"}}>
                                    {["css3", "git", "github", "html-5", "javascript", "react-native", "sass"].map(e=>{
                                        return(
                                            <Img img={"/img/logos/"+e+".png"} aos="up" size="96"/>
                                        )
                                    })}
                                </div>
                            </div>

                        </div>

                    </div>
                    

                </Block>
                <Block>

                </Block>

            </Cuerpo>
        )
    }
};



show()
ReactDOM.render(<App/>, go("__body__"));