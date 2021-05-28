
import React from "react"
import Header from "../components/header/header.js"
import Footer from "../components/footer/footer.js"
import Navlinks from "../components/links/nav-links"
import Banner from "../components/banner/banner"
import NProductos from "../components/NuestrosProductos/NuestrosProductos"



function inicio() {
  return (

    <div>

     <Header></Header>
     <Navlinks></Navlinks>
     <Banner></Banner>
     <NProductos  title={"NUESTROS PRODUCTOS"}></NProductos>
     <Footer></Footer>

    </div> 

  );
}

export default inicio;