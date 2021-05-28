
import React from "react"
import Header from "../components/header/header.js"
import Footer from "../components/footer/footer.js"
import Navlinks from "../components/links/nav-links"
import BannerProductos from "../components/NuestrosProductos/BannerProductos"
import NavFilter from "../components/navFilter/navFilter"
import ListaProductos from "../components/Productos/ListaProductos"



function Productos() {
  return (

    <div>

     <Header></Header>
     <Navlinks></Navlinks>
     <BannerProductos title={"OFERTAS"}></BannerProductos>
      <NavFilter></NavFilter>
      <ListaProductos title={"Carne"}></ListaProductos>
     

     <Footer></Footer>

    </div> 

  );
}

export default Productos;