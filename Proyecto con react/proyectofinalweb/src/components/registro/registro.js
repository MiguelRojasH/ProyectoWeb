import React from "react"
import "./registro.css"
import {Link} from "react-router-dom"

function Registro() {

    return (
<div className="center">
    <div className="registro-container">

  

        <div className="registrarse">
        
       

            <div className="registro-credenciales">
            <h2 >Registrarse</h2>

                    <div className="form-row">
                        
                        <div className="form-group col-md-6">
                        <label >Nombre</label>
                        <input type="text" className="form-control regi" />
                        </div>

                        <div className="form-group col-md-6">
                        <label >Apellido</label>
                        <input type="text" className="form-control regi"  />
                        </div>
                    </div>

                    <div className="form-row">
                        
                        <div className="form-group col-md-6">
                        <label >Ciudad</label>
                        <input type="text" className="form-control regi" />
                        </div>
                        <div className="form-group col-md-6">
                        <label >Teléfono</label>
                        <input type="tel" className="form-control regi" />
                        </div>
                        <div className="form-group col-md-12">
                        <label >Email</label>
                        <input type="email" className="form-control regi"  />
                        </div>

                    </div>

                    <div className="form-row">
                        
                    <div className="form-group col-md-6">
                        <label >Contraseña</label>
                        <input type="password" className="form-control regi"  />
                        </div>

                        <div className="form-group col-md-6">
                        <label >Confirme la Contraseña</label>
                        <input type="password" className="form-control regi"  />
                        </div>
                    </div>
                    <div className="o-link-container">
                        
                        <Link className="o-btn" to="./Inicio">Aceptar</Link>
                
                    </div>
            </div>

            
            
        </div> 

    </div> 
</div>

    );
}
 
export default Registro;