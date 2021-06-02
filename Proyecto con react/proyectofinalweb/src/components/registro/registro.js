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

                    <div class="form-row">
                        
                        <div class="form-group col-md-6">
                        <label for="inputEmail4">Nombre</label>
                        <input type="text" class="form-control regi" />
                        </div>

                        <div class="form-group col-md-6">
                        <label for="inputPassword4">Apellido</label>
                        <input type="text" class="form-control regi"  />
                        </div>
                    </div>

                    <div class="form-row">
                        
                        <div class="form-group col-md-6">
                        <label >Ciudad</label>
                        <input type="text" class="form-control regi" />
                        </div>
                        <div class="form-group col-md-6">
                        <label >Teléfono</label>
                        <input type="tel" class="form-control regi" />
                        </div>
                        <div class="form-group col-md-12">
                        <label >Email</label>
                        <input type="email" class="form-control regi"  />
                        </div>

                    </div>

                    <div class="form-row">
                        
                    <div class="form-group col-md-6">
                        <label >Contraseña</label>
                        <input type="password" class="form-control regi"  />
                        </div>

                        <div class="form-group col-md-6">
                        <label >Confirme la Contraseña</label>
                        <input type="password" class="form-control regi"  />
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