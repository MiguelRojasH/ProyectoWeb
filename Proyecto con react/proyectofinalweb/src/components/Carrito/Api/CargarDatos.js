import React from 'react';
import Carrito from '../carrito';

const CargarDatos = ({data}) =>{
    const {titulo, peso, cantidad, precio} = data;
   return <div>
       <Carrito titulo= {titulo} peso={peso} cantidad ={cantidad} precio ={precio}></Carrito>
   </div>
}
export default CargarDatos;