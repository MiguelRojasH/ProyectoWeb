import React from "react"
import Carne from "../../img/carne2.jpg"
import Chroizo from "../../img/chorizo2.jpg"
import Costilla from "../../img/costilla2.jpg"
import Tocino from "../../img/tocino2.jpg"
import Pollo from "../../img/pollo2.jpg"
import Cerdo from "../../img/cerdo2.jpg"
import "../NuestrosProductos/nproductos.css"
import Card2 from "../cards/card2"
import Arandano from "../../img/arandanos.jpg"
import Artesano from "../../img/artesano.jpg"
import Baguettes from "../../img/baguettes.jpg"
import Bananas from "../../img/bananas.jpg"
import Bollos from "../../img/bollos.jpg"
import Brocoli from "../../img/brocoli.jpg"
import Cebolla from "../../img/cebolla.jpg"
import Cereza from "../../img/cereza.jpg"
import Frances from "../../img/frances.jpg"
import Cilantro from "../../img/cilantro.jpg"
import Fresas from "../../img/fresas.jpg"
import Manzana from "../../img/manzana.jpg"
import PanCacho from "../../img/panCacho.jpg"
import Pepinillo from "../../img/pepinillo.jpg"
import Pera from "../../img/pera.jpg"
import Tomate from "../../img/tomate.jpg"
import Zanahoria from "../../img/zanahoria.jpg"
import Atun from "../../img/atun.jpg"
import Camaron from "../../img/camaron.jpg"
import Langosta from "../../img/langosta.jpg"
import Salmon from "../../img/salmon.jpg"
import Sardina from "../../img/sardina.jpg"
import Tilapia from "../../img/tilapia.jpg"
import Canela from "../../img/canela.jpg"
import Focaccia from "../../img/focaccia.jpg"







import "./Productos.css"


const ListaProductos = () => (




  <div className="nproductos">

   

    <div className="o_card list">

      {/* CARNES */}

      <div className="filter carne">
        <Card2 img={Carne} description={"Rés"}></Card2>
      </div>

      <div className="filter carne">
        <Card2 img={Chroizo} description={"Chorizo"}></Card2>
      </div>
      <div className="filter carne">
        <Card2 img={Costilla} description={"Costilla"}></Card2>
      </div>

      <div className="filter carne">
        <Card2 img={Tocino} description={"Tocino"}></Card2>
      </div>

      <div className="filter carne">
        <Card2 img={Pollo} description={"Pollo"}></Card2>

      </div>

      <div className="filter carne">
        <Card2 img={Cerdo} description={"Cerdo"}></Card2>
      </div>

     {/* VERDURAS */}

     <div className="filter verduras">
        <Card2 img={Brocoli} description={"Brócoli"}></Card2>
      </div>

      <div className="filter verduras">
        <Card2 img={Cebolla} description={"Cebolla"}></Card2>
      </div>
      <div className="filter verduras">
        <Card2 img={Cilantro} description={"Cilantro"}></Card2>
      </div>

      <div className="filter verduras">
        <Card2 img={Pepinillo} description={"Pepinillo"}></Card2>
      </div>

      <div className="filter verduras">
        <Card2 img={Tomate} description={"Tomate"}></Card2>

      </div>

      <div className="filter verduras">
        <Card2 img={Zanahoria} description={"Zanahoria"}></Card2>
      </div>

 {/* FRUTAS */}
 <div className="filter frutas">
        <Card2 img={Arandano} description={"Arándano"}></Card2>
      </div>
      
      <div className="filter frutas">
        <Card2 img={Bananas} description={"Bananas"}></Card2>
      </div>

      <div className="filter frutas">
        <Card2 img={Cereza} description={"Cereza"}></Card2>
      </div>

      <div className="filter frutas">
        <Card2 img={Fresas} description={"Fresas"}></Card2>
      </div>

      <div className="filter frutas">
        <Card2 img={Manzana} description={"Manzana"}></Card2>
      </div>

      <div className="filter frutas">
        <Card2 img={Pera} description={"Pera"}></Card2>
      </div>

  {/* PEZCADERIA */}

  <div className="filter peces">
        <Card2 img={Langosta} description={"Langosta"}></Card2>
      </div>


      <div className="filter peces">
        <Card2 img={Atun} description={"Atún"}></Card2>
      </div>


      <div className="filter peces">
        <Card2 img={Camaron} description={"Camarón"}></Card2>
      </div>


      <div className="filter peces">
        <Card2 img={Salmon} description={"Salmón"}></Card2>
      </div>


      <div className="filter peces">
        <Card2 img={Sardina} description={"Sardina"}></Card2>
      </div>


      <div className="filter peces">
        <Card2 img={Tilapia} description={"Tilapia"}></Card2>
      </div>

   {/* PANES */}

   
   <div className="filter panes">
        <Card2 img={PanCacho} description={"Pan Cacho"}></Card2>
      </div>

      
      <div className="filter panes">
        <Card2 img={Artesano} description={"Artesanal"}></Card2>
      </div>

      
      <div className="filter panes">
        <Card2 img={Canela} description={"Canela"}></Card2>
      </div>

      
      <div className="filter panes">
        <Card2 img={Focaccia} description={"Focaccia"}></Card2>
      </div>

      
      <div className="filter panes">
        <Card2 img={Bollos} description={"Bollos"}></Card2>
      </div>

      
      <div className="filter panes">
        <Card2 img={Frances} description={"Francés"}></Card2>
      </div>

    </div>


  </div>



);


export default ListaProductos;

