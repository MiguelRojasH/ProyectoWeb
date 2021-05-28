
import React from "react" 
import Iframe from "../iframe/iframe"

import "./Contactenos.css"



function contacto() {
  return (
   
    <div class="contacto-container">

        <div class="locales">
            <h4>Nuestras Sucursales en Cali</h4>
            
             <Iframe source="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63722.4029850822!2d-76.54790391349962!3d3.4350191599236335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssupermercados%20la%20gran%20colombia%20cali!5e0!3m2!1ses!2sco!4v1615499285188!5m2!1ses!2sco" >

            </Iframe>
        </div>

            <div class="contactenos">

                <h2>Contáctenos</h2>

                <div class="credenciales">

                    <p>Nombre:</p>
                    <input class="input" type="text"  />
                    <p>Correo:</p>
                    <input class="input" type="text"  />
                    <p>Asunto:</p>
                    <input class="input" type="text"  />
                    <p>Descripción</p>
                    <input class="input desc" type="text" />
            
                
                </div>

                
                    <div class="o-link-container">
                        
                        <a class="o-btn" href="">Enviar</a>
                
                    </div>
            </div> 

    </div> 
    
    
  );
}





export default contacto;