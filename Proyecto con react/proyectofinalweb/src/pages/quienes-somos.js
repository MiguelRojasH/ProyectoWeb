
import React from "react"
import Header from "../components/header/header.js"
import Footer from "../components/footer/footer.js"
import Navlinks from "../components/links/nav-links"
import QuienesSomos from "../components/Quienes/quienes"

   


function Quienes() {
  return (

    <div>

     <Header></Header>
     <Navlinks></Navlinks>
     <QuienesSomos></QuienesSomos>
     <Footer></Footer>

    

    </div> 

  );
}

export default Quienes;