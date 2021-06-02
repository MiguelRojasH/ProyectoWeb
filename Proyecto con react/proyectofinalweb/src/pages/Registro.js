
import React from "react"
import Header from "../components/header/header.js"
import Footer from "../components/footer/footer.js"
import Navlinks from "../components/links/nav-links"
import RegistroComponent from "../components/registro/registro"




function Registro() {
  return (

    <div>

     <Header></Header>
     <Navlinks></Navlinks>

     <RegistroComponent></RegistroComponent>
    
     <Footer></Footer>
    </div> 

  );
}

export default Registro;