


//import React, { Component } from 'react'
let go = q => document.getElementById(q);

function Jump(p) {
    return(
        <div>
            <br /><br /><br />
        </div>
    )
}

class App extends React.Component {
    render() {
        //console.log(this.props)
        return (
            <div>
                <div className="head" id="head">
                    <Logo data-aos="fade-right" />

                    <Rbloqup data-aos="fade-left" />
                </div>
                <div className="body">
                    <Framepage id="m1" className="medio">
                        <div id="con" style={{
                            width:"80%",
                            height:"500px",
                            backgroundColor:"black",
                            color:"white",
                            fontSize:"14px",
                            padding:"10%"
                        }}>
                        </div>
                        
                        

                        
                    </Framepage>
                    <Framepage className="medio">
                        <p className="" data-aos="fade-up" style={{
                            display:"flex",
                            margin:"auto",
                            position:"relative",
                            maxWidth:"500px",
                            width:"80%",
                            textAlign:"center",
                            top:"10%",
                            justifyContent:"center",
                            alignItems:"center",
                            fontWeight:"bold",
                            fontSize:"16px"
                        }}>
                            "Soy un chico de 16 años que se ha aficionado por
                            todo el asunto de la tecnologia y la informatica a la corta edad de 8 años
                            llevo 5 años de experiencia programando y estoy empezando mi propio emprendimiento
                            los primero clientes les dejare un precio muy bajo para adquirir experiencia laboral".
                        </p>
                    </Framepage>
                    <Framepage>
                        <Pub profile="/img/frask.png" style={{
                            transform:"translate(0px, -30%)",
                            margin:"auto"
                        }} data-aos="fade-down">
                            Mi nombre es <span style={{color:"gold"}}>Carlos Alejandro Pages Azocar</span>  pero tambien pueden llamarme por mi
                            nombre de usuario, como mas les convengan. Mi objetivo es dar la mejor calidad
                            en desarrollo web Full-Stack y desarrollo de aplicaciones al precio mas bajo.
                        </Pub>
                        <div className="cop meno" data-aos="fade-up">
                            <Opt img="/img/opt/front.png" title="Herramientas Front-end" 
                            data-aos="fade-up" data-aos-delay="500">
                                
                                <div>

                                    {["HTML", "CSS", "JavaScript", "ReactJS"].map(e=>(
                                        <div>
                                            <li className="lis">{e}</li>
                                            <br />
                                        </div>
                                    ))}
                                    <Jump></Jump>
                                </div>
                                

                            </Opt>
                            <Opt img="/img/opt/back.png" title="Herramientas Back-end" 
                            data-aos="fade-up" data-aos-delay="500">
                                <div>

                                    {["NodeJS", "Python", "Flask", "MongoDB", "ExpressJS"].map(e=>(
                                        <div>
                                            <li className="lis">{e}</li>
                                            <br />
                                        </div>
                                    ))}
                                    <Jump></Jump>
                                </div>
                            </Opt>
                            <Opt img="/img/opt/win.png" title="Escritorio y Mobile" 
                            data-aos="fade-up" data-aos-delay="500">
                                <div>

                                    {["ElectronJS", "Python Tkinter", "React Native"].map(e=>(
                                        <div>
                                            <li className="lis">{e}</li>
                                            <br />
                                        </div>
                                    ))}
                                    <Jump></Jump>
                                </div>
                            </Opt>
                        </div>
                        <Jump></Jump>
                    </Framepage>
                    <Framepage>
                        <div className="cop meno" data-aos="fade-up" style={{position:"relative", top:"100px"}}>
                            <h3 style={{
                                color:"gold", width:"100%", textAlign:"center",
                                marginTop:"50px"
                            }}
                            >Lo ultimo que he hecho</h3>
                            <Jump></Jump>
                            <Widgetbox>
                                
                                <Widget title="Portafolio" src="/img/proj/port.png" url="/">
                                </Widget>
                                <Widget title="Vacio" src="">
                                </Widget>
                                <Widget title="Vacio" src="">
                                </Widget>
                                
                                
                                <Widget title="Vacio" src="">
                                </Widget>
                                <Widget title="Vacio" src="">
                                </Widget>
                                <Widget title="Vacio" src="">
                                </Widget>
                                
                            </Widgetbox>

                        </div>
                        <div style={{width:"100px", height:"200px"}}></div>
                    </Framepage>
                    <div className="" style={{height:"auto"}}>
                        <section id="contact" />
                        
                        <div style={{
                            width:"80%",
                            height:"max-content",
                            padding:"10%"
                        }}>
                            <div className="up_c medio" style={{
                                justifyContent:"space-around"
                            }}>

                                <Imglink aos="right" link="" img="/img/red/git.png"/>
                                <Imglink aos="up" link="" img="/img/red/lin.png"/>
                                <Imglink aos="left" link="tel:+584248310640" img="/img/red/tel.png"/>
                                
                            </div>
                            

                        </div>
                        
                    </div>

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
    let x = {
        height: (-go("head").offsetHeight + window.innerHeight) + "px"
    };
    go("m1").style.height = x.height
    //console.log(x)
})
