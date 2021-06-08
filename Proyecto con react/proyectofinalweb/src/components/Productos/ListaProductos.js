import React from "react"
import Carne from "../../img/carne2.jpg"
import Chorizo from "../../img/chorizo2.jpg"
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
        <Card2 img={Carne} description={"Rés"} unidad={"1 kg"} precios={"$12.000"}></Card2>
      </div>

      <div className="filter carne">
        <Card2 img={Chorizo} description={"Chorizo"} unidad={"1 kg"} precios={"$9.400"}></Card2>
      </div>
      <div className="filter carne">
        <Card2 img={Costilla} description={"Costilla"} unidad={"1 kg"} precios={"$6.100"}></Card2>
      </div>

      <div className="filter carne">
        <Card2 img={Tocino} description={"Tocino"} unidad={"1 kg"} precios={"$8.300"}></Card2>
      </div>

      <div className="filter carne">
        <Card2 img={Pollo} description={"Pollo"} unidad={"1 kg"} precios={"$10.900"}></Card2>

      </div>

      <div className="filter carne">
        <Card2 img={Cerdo} description={"Cerdo"} unidad={"1 kg"} precios={"$8.100"}></Card2>
      </div>

     {/* VERDURAS */}

     <div className="filter verduras">
        <Card2 img={Brocoli} description={"Brócoli"} unidad={"100 gr"} precios={"$2.400"}></Card2>
      </div>

      <div className="filter verduras">
        <Card2 img={Cebolla} description={"Cebolla"} unidad={"100 gr"} precios={"$1.000"}></Card2>
      </div>
      <div className="filter verduras">
        <Card2 img={Cilantro} description={"Cilantro"} unidad={"100 gr"} precios={"$800"}></Card2>
      </div>

      <div className="filter verduras">
        <Card2 img={Pepinillo} description={"Pepinillo"} unidad={"100 gr"} precios={"$3.100"}></Card2>
      </div>

      <div className="filter verduras">
        <Card2 img={Tomate} description={"Tomate"} unidad={"100 gr"} precios={"$400"}></Card2>

      </div>

      <div className="filter verduras">
        <Card2 img={Zanahoria} description={"Zanahoria"} unidad={"100 gr"} precios={"$300"}></Card2>
      </div>

 {/* FRUTAS */}
 <div className="filter frutas">
        <Card2 img={Arandano} description={"Arándano"} unidad={"100 gr"} precios={"$5.900"}></Card2>
      </div>
      
      <div className="filter frutas">
        <Card2 img={Bananas} description={"Bananas"} unidad={"1 und"} precios={"$600"}></Card2>
      </div>

      <div className="filter frutas">
        <Card2 img={Cereza} description={"Cereza"} unidad={"100 gr"} precios={"$4.700"}></Card2>
      </div>

      <div className="filter frutas">
        <Card2 img={Fresas} description={"Fresas"} unidad={"100 gr"} precios={"$1.400"}></Card2>
      </div>

      <div className="filter frutas">
        <Card2 img={Manzana} description={"Manzana"} unidad={"100 gr"} precios={"$900"}></Card2>
      </div>

      <div className="filter frutas">
        <Card2 img={Pera} description={"Pera"} unidad={"100 gr"} precios={"$900"}></Card2>
      </div>

  {/* PEZCADERIA */}

  <div className="filter peces">
        <Card2 img={Langosta} description={"Langosta"} unidad={"100 gr"} precios={"$210.000"}></Card2>
      </div>


      <div className="filter peces">
        <Card2 img={Atun} description={"Atún"} unidad={"100 gr"} precios={"$5.700"}></Card2>
      </div>


      <div className="filter peces">
        <Card2 img={Camaron} description={"Camarón"} unidad={"100 gr"} precios={"$7.000"}></Card2>
      </div>


      <div className="filter peces">
        <Card2 img={Salmon} description={"Salmón"} unidad={"100 gr"} precios={"$6.600"}></Card2>
      </div>


      <div className="filter peces">
        <Card2 img={Sardina} description={"Sardina"} unidad={"100 gr"} precios={"$1.700"}></Card2>
      </div>


      <div className="filter peces">
        <Card2 img={Tilapia} description={"Tilapia"} unidad={"100 gr"} precios={"$1.400"}></Card2>
      </div>

   {/* PANES */}

   
   <div className="filter panes">
        <Card2 img={PanCacho} description={"Pan Cacho"} unidad={"1 und"} precios={"$250"}></Card2>
      </div>

      
      <div className="filter panes">
        <Card2 img={Artesano} description={"Artesanal"} unidad={"1 und"} precios={"$5.200"}></Card2>
      </div>

      
      <div className="filter panes">
        <Card2 img={Canela} description={"Canela"} unidad={"1 und"} precios={"$6.000"}></Card2>
      </div>

      
      <div className="filter panes">
        <Card2 img={Focaccia} description={"Focaccia"} unidad={"1 und"} precios={"$8.000"}></Card2>
      </div>

      
      <div className="filter panes">
        <Card2 img={Bollos} description={"Bollos"} unidad={"1 und"} precios={"$3.700"}></Card2>
      </div>

      
      <div className="filter panes">
        <Card2 img={Baguettes} description={"Baguette"} unidad={"1 und"} precios={"$2.600"}></Card2>
      </div>

    </div>


  </div>



);


export default ListaProductos;

