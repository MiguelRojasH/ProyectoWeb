import React, { useEffect as Effect } from "react"
import AOS from "aos";
import "aos/dist/aos"
import "./quienes.css"
import Fondo from "../../img/fondo.jpg"
import Aos from "aos";



const quienes = () => {

    Effect(() => {
    Aos.init({ duration:2000 });
},[]);

return(
        <div className="fondo_quienes">
        

            <div className="Contenedor-aniamciones">
                
                <div data-aos="fade-up" className="card border-light contenedortexto" >
                    <div  className="card-header">Quiénes Somos</div>
                    <div className="card-body">
                        <p className="card-text chachara">Desde 1987, con el objetivo principal de incursionar 
                        en el mercado con excelentes precios, buena calidad y ofrecer un mejoramiento continuo 
                        en el servicio al cliente. Se gestó LA GRAN COLOMBIA, Hoy poseen una cadena de supermercados 
                        ubicados en varios lugares de la ciudad de Cali.</p>
                    </div>
                </div>

                <div data-aos="fade-up" className="card border-light contenedortexto" >
                    <div  className="card-header">Quiénes Somos</div>
                    <div className="card-body">
                    <p className="card-text chachara">Desde 1987, con el objetivo principal de incursionar 
                        en el mercado con excelentes precios, buena calidad y ofrecer un mejoramiento continuo 
                        en el servicio al cliente. Se gestó LA GRAN COLOMBIA, Hoy poseen una cadena de supermercados 
                        ubicados en varios lugares de la ciudad de Cali.</p>
                    </div>
                </div>

                <div data-aos="fade-right" className="card border-light contenedortexto" >
                    <div  className="card-header">Quiénes Somos</div>
                    <div className="card-body">
                    <p className="card-text chachara">Desde 1987, con el objetivo principal de incursionar 
                        en el mercado con excelentes precios, buena calidad y ofrecer un mejoramiento continuo 
                        en el servicio al cliente. Se gestó LA GRAN COLOMBIA, Hoy poseen una cadena de supermercados 
                        ubicados en varios lugares de la ciudad de Cali.</p>
                    </div>
                </div>


                <div data-aos="fade-left" className="card border-light contenedortexto2" >
                    <div  className="card-header">Quiénes Somos</div>
                    <div className="card-body">
                    <p className="card-text chachara">Desde 1987, con el objetivo principal de incursionar 
                        en el mercado con excelentes precios, buena calidad y ofrecer un mejoramiento continuo 
                        en el servicio al cliente. Se gestó LA GRAN COLOMBIA, Hoy poseen una cadena de supermercados 
                        ubicados en varios lugares de la ciudad de Cali.</p>
                    </div>
                </div>

            </div> 


        </div> 


);

};


export default quienes;