
import React from 'react';
import "./footer.css";
import Intagram from "../../img/instagram.png"
import Youtube from "../../img/002-youtube.png"
import Facebook from "../../img/045-facebook.png"




const footer = () => (

    <div className="footer">

<footer className="page-footer font-small indigo">
<div className="container text-center text-md-left">

<div className="row">

  <div className="col-md-3 mx-auto">

   
    <h5 className="font-weight text-uppercase mt-3 mb-4">Categoría</h5>

    <ul className="list-unstyled">
      <li>
        <a href="#!">Supermercado</a>
      </li>
      <li>
        <a href="#!">Ofertas</a>
      </li>
      <li>
        <a href="#!">Productos</a>
      </li>
    </ul>

  </div>
  

 

 
  <div className="col-md-3 mx-auto">

 
    <h5 className="font-weight text-uppercase mt-3 mb-4">Información de interés</h5>

    <ul className="list-unstyled">
      <li>
        <a href="#!">Términos y Condiciones</a>
      </li>
      <li>
        <a href="#!">Contáctenos</a>
      </li>
      <li>
        <a href="#!">Quienes somos</a>
      </li>
    </ul>

  </div>
 


    <div className="col-md-3 mx-center">

    
    <h5 className="font-weight text-uppercase mt-3 mb-4">Síguenos</h5>

    <ul className="list-unstyled">
            
        <ul  className="o-list-icons">

          <li className="o-list-icon-item">
              <a href="https://www.youtube.com/channel/UCBjKZq1V936v6GdpTW053sw" target="_blank">
                  <img className="icon" src={Youtube} alt="icono de Youtube"/> 
              </a>

          </li>
              <li className="o-list-icon-item">
              <a href="https://www.facebook.com/supermercadoslagrancolombia/">
                  <img className="icon" src={Facebook}alt="icono de Facebook" target="_blank"/>
              </a>
          </li>

          <li className="o-list-icon-item">
              <a href="https://www.instagram.com/superlagrancolombia/">
              <img className="icon" src={Intagram} alt="icono de instagram" target="_blank"/> 
              </a>
          </li>

          </ul>

          </ul>

  </div>
    

</div>


</div>



<div className="footer-copyright text-center py-3">© 2020 Copyright: Minticris

</div>


</footer>



</div>

);

export default footer;