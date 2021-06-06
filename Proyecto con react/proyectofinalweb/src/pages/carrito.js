
import React from "react"
import Header from "../components/header/header.js"
import Footer from "../components/footer/footer.js"
import Navlinks from "../components/links/nav-links"
import CarritoCompras from "../components/Carrito/carrito"




function Carrito() {
  return (

    <div>

     <Header></Header>
     <Navlinks></Navlinks>
     <CarritoCompras></CarritoCompras>


     <Footer></Footer>

    </div> 

  );
}

export default Carrito;