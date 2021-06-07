
import React from "react"

import BannerCarne from "../../img/bannerCarne.png"
import BannerFrutas from "../../img/bannerFrutas.png"
import BannerPanes from "../../img/bannerPanes.png"

import "./nproductos.css"


const BannerProductos = ({title}) => (



    <div className="nproductos">

<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={BannerCarne} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={BannerFrutas} alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={BannerPanes}  alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>

  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  
  </a>
</div>

    </div> 

  );



export default BannerProductos;