
import React from 'react';
import "./footer.css";
import Intagram from "../../img/instagram.png"
import Youtube from "../../img/002-youtube.png"
import Facebook from "../../img/045-facebook.png"




const footer = () => (

    <div class="footer">

<footer class="page-footer font-small indigo">
<div class="container text-center text-md-left">

<div class="row">

  <div class="col-md-3 mx-auto">

   
    <h5 class="font-weight text-uppercase mt-3 mb-4">Categoría</h5>

    <ul class="list-unstyled">
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
  

 

 
  <div class="col-md-3 mx-auto">

 
    <h5 class="font-weight text-uppercase mt-3 mb-4">Información de interés</h5>

    <ul class="list-unstyled">
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
 


    <div class="col-md-3 mx-center">

    
    <h5 class="font-weight text-uppercase mt-3 mb-4">Síguenos</h5>

    <ul class="list-unstyled">
            
        <ul  class="o-list-icons">

          <li class="o-list-icon-item">
              <a href="https://www.youtube.com/channel/UCBjKZq1V936v6GdpTW053sw" target="_blank">
                  <img class="icon" src={Youtube} alt="icono de Youtube"/> 
              </a>

          </li>
              <li class="o-list-icon-item">
              <a href="https://www.facebook.com/supermercadoslagrancolombia/">
                  <img class="icon" src={Facebook}alt="icono de Facebook" target="_blank"/>
              </a>
          </li>

          <li class="o-list-icon-item">
              <a href="https://www.instagram.com/superlagrancolombia/">
              <img class="icon" src={Intagram} alt="icono de instagram" target="_blank"/> 
              </a>
          </li>

          </ul>

          </ul>

  </div>
    

</div>


</div>



<div class="footer-copyright text-center py-3">© 2020 Copyright: Minticris

</div>


</footer>



</div>

);

export default footer;