import React, {Component} from 'react';
import CargarDatos from './CargarDatos'
const axios = require('axios').default;

var data = {
    titulo: "",
    peso: "",
    cantidad: "",
    precio: ""
}
class MiniApi extends Component{
    constructor(){
        super();
        this.state = {
            data : data,
        }
    }
    getData = (response_data) =>{
        const{titulo, peso, cantidad, precio} = response_data;
        const data = {
            titulo,
            peso,
            cantidad,
            precio
        }
        return data;
    }

    handleClick3 = () =>{
        axios.get("https://run.mocky.io/v3/73c94c35-2533-4115-988f-81bf50bf9d0b")
        .then((Response) =>{
          //  console.log("Respuesta",this.getData(data));
            this.setState({
                data : this.getData(Response.data)
            });
        })
    } 
    
    render() {
        window.onload= this.handleClick3();
        const {data} = this.state;
        return( 
        <div>
            <CargarDatos data ={data} > </CargarDatos>
        </div>        
        );        
    } 
}
export default MiniApi;
