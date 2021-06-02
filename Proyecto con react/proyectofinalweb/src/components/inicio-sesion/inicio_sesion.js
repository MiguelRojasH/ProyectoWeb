import React from "react"
import "./inicio_sesion.css"
import Logo from "../../img/graficos-01.png"
import {Link} from "react-router-dom"

function Inicio() {

    return (
<div className="fondo">
        
    <div className="header-container">
        <div className="imagen">
            <img className="o-logo" src={Logo} alt="Logo de La Gran Colombia"/>
        </div>

    </div>

    <div className="o-container-login">

        <div className="login">

            <h2 className="mensaje">¡Hola! Ingresa tus datos <br></br> para iniciar sesión</h2>

        <div className="registro">

                <input className="input" type="text"  placeholder="Correo Electrónico"/>
                
                <input className="input" type="password"  placeholder="Contraseña"/>
            </div>
            
            <div className="o-link-container">

                <Link className="o-btn" to="/Inicio">Continuar</Link>
                <br></br>
                <Link className="o-btn CrearCuenta"  to="/Registro">Crear cuenta</Link>
        
            </div>
            
        </div> 
               
    </div> 
 
    <div className="derechos">
            <div className="derechos-Minticris">
                <br></br>
                <p className="derechostxt">@2021 Todos los derechos reservados. Minticris. <br></br></p>
            </div>
        </div>

</div>

    );
}
 
export default Inicio;