import React, { useEffect as Effect } from "react"
import AOS from "aos";
import "aos/dist/aos"
import "./quienes.css"
import Fondo from "../../img/fondo5.png"
import Aos from "aos";
import Bannersito from "../../img/principalBanner.png"



const quienes = () => {

    Effect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="Contenedor-quienes">

            <div className="bannersito-container">

                <div className="vacio"></div>
                <div className="vacio"></div>


                <div data-aos-easing="linear" data-aos-duration="1500" data-aos="flip-left" className="card border-light mb-3 contenedortexto" >

                    <div className="card-header ChacharaTitulo">QUIÉNES SOMOS</div>

                    <div className="card-body">
                        <p className="card-text chachara">Desde 1987, con el objetivo principal de incursionar en el mercado con excelentes precios, buena calidad y ofrecer un mejoramiento continuo en el servicio al cliente. Se gestó LA GRAN COLOMBIA, Hoy poseen una cadena de supermercados ubicados en varios lugares de la ciudad de Cali, y más concretamente en el oriente y sur occidente. Nos hemos especializado en atender los estratos más populares de la ciudad, es así como nos localizamos en el amplio Distrito de Agua Blanca donde tenemos el grueso de los negocios.</p>
                    </div>
                </div>

                <div className="vacio"></div>
                <div className="vacio"></div>

                <div data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"  className="card  mb-3 contenedortexto2" >

                    <div  className="card-header ChacharaTitulo">MISIÓN</div>

                    <div className="card-body">
                        <p className="card-text chachara">Enfocados en nuestros clientes; ofrecemos amplio surtido de mercado,  con variedad, calidad,  al mejor precio mediante el mejoramiento continuo de los procesos, con un equipo humano de alto desempeño.</p>
                    </div>
                </div>

                <div className="vacio"></div>

                <div data-aos="fade-right"  className="card border-light mb-3 contenedortexto3" >

                    <div className="card-header ChacharaTitulo" >VISIÓN</div>

                    <div className="card-body">
                        <p className="card-text chachara">Ser para el 2019, una cadena de supermercados regional con reconocimiento nacional, ofreciendo mayor diversidad en productos de mercado, distinguiéndose por la excelente calidad en carnes, frutas y verduras.</p>
                    </div>

                </div>

            </div>




        </div>


    );

};


export default quienes;