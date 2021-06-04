import React from "react"
import "./Ofertas.css"
import Pollo from "../../img/pollo2.jpg"
import Costilla from "../../img/costilla2.jpg"

import{ useState } from "react";





var num1;
var result;

function suma() {
    num1 = document.getElementById("numBox1").value*1;
    console.log(num1);
    result= ++num1;
    document.getElementById("numBox1").value = result;
}
function resta() {
    num1 = document.getElementById("numBox1").value*1;
    console.log(num1);
    result= --num1;
    document.getElementById("numBox1").value = result;
}


function suma2() {
    num1 = document.getElementById("numBox2").value*1;
    console.log(num1);
    result= ++num1;
    document.getElementById("numBox2").value = result;
}
function resta2() {
    num1 = document.getElementById("numBox2").value*1;
    console.log(num1);
    result= --num1;
    document.getElementById("numBox2").value = result;
}


function suma3() {
    num1 = document.getElementById("numBox3").value*1;
    console.log(num1);
    result= ++num1;
    document.getElementById("numBox3").value = result;
}


function onClickCalculator (){

    this.numero1=parseInt(document.getElementById("numBox1").value);
    this.numero2=parseInt(document.getElementById("numBox2").value);

    Calcular()
}

function Calcular (){

    var result="";
    result = (this.numero1 + this.numero2)*1000;
    document.getElementById("result").innerHTML= result;
    return result;

//document.getElementById("result").innerHTML='< class="input resultadoI"> ' + result +'</div>'; 
    
}





const Ofertas = () => {

    const [count, setCount] = useState(0);
    const [numBox1, setUserNumBox1] = useState("");
 
    return (



        <section className="contenedorCompras">


            <div className="row">

                <div className="col-lg-8">


                    <div className="mb-3">
                        <div className="pt-4 wish-list">

                            <h5 className="mb-4 letritas">(2) Objetos en el carrito</h5>

                            <div className="row mb-4">

                                <div className="col-md-5 col-lg-3 col-xl-3">
                                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                        <img className="img-fluid ProductosCompra" src={Pollo} alt="Pollo" />

                                    </div>
                                </div>


                                <div className="col-md-7 col-lg-9 col-xl-9">
                                    <div>

                                        <div className="d-flex justify-content-between">
                                            <div>


                                                <h5 className="letritas">Pollo entero </h5>
                                                <p className="mb-3  text-uppercase small letritas">Peso: 5Kg</p>
                                                <p className="mb-2  text-uppercase small letritas">Piezas: 5</p>

                                            </div>

                                            <div>
                                                {/* BOTONES AQUIIIIIII */}
                                                <div className="def-number-input number-input safari_only mb-0 w-100">

                                                                                                        
                

                                                    <button className="btn-sum" type="number" onClick={() => setCount(count - 1) } >  - </button>
                                                                                        
                                                    <input  id="numBox1" className="quantity" type="number" min="0" value={count}  />

                                                    <button className="btn-rest" type="number" onClick={() => setCount(count + 1)}> + </button>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3"><i
                                                    className="fas fa-trash-alt mr-1"></i> Quitar </a>
                                                <a href="#!" type="button" className="card-link-secondary small text-uppercase"><i
                                                    className="fas fa-heart mr-1"></i> Añadir a favoritos </a>
                                            </div>
                                            <p className="mb-0"><span><strong id="summary">$5.600</strong></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="row mb-4">

                                <div className="col-md-5 col-lg-3 col-xl-3">
                                    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                        <img className="img-fluid ProductosCompra" src={Costilla} alt="Pollo" />

                                    </div>
                                </div>


                                <div className="col-md-7 col-lg-9 col-xl-9">
                                    <div>

                                        <div className="d-flex justify-content-between">
                                            <div>


                                                <h5 className="letritas">Costillas </h5>
                                                <p className="mb-3  text-uppercase small letritas">Peso: 3Kg</p>
                                                <p className="mb-2  text-uppercase small letritas">Piezas: 8</p>

                                            </div>

                                            <div>
                                                {/* BOTONES AQUIIIIIII */}
                                                <div className="def-number-input number-input safari_only mb-0 w-100">

                                                    <button className="btn-sum"  >-</button>

                                                    <input  id="numBox2" className="quantity" value="1" />

                                                    <button className="btn-rest" >+</button>
                                                </div>

                                            </div>
                                        </div>






                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3"><i
                                                    className="fas fa-trash-alt mr-1"></i> Quitar </a>
                                                <a href="#!" type="button" className="card-link-secondary small text-uppercase"><i
                                                    className="fas fa-heart mr-1"></i> Añadir a favoritos </a>
                                            </div>
                                            <p className="mb-0"><span><strong id="summary">$5.600</strong></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>



                    <div className="mb-3">
                        <div className="pt-4">

                            <h5 className="mb-4 letritas">Métodos de pago</h5>

                            <img className="mr-2" width="45px"
                                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                                alt="Visa" />
                            <img className="mr-2" width="45px"
                                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                                alt="American Express" />
                            <img className="mr-2" width="45px"
                                src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                                alt="Mastercard" />
                            <img className="mr-2" width="45px"
                                src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                                alt="PayPal acceptance mark" />
                        </div>
                    </div>


                </div>



                <div className="col-lg-4">

                    <div className="mb-3">
                        <div className="pt-4">

                            <h5 className="mb-3 letritas2">TOTAL DE LA COMPRA :</h5>

                            <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0 letritas">
                                    Precio
                                    <span>$25.98</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center px-0 letritas">
                                    Envío
                                <span>Gratis</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                    <div>
                                        <strong>Total</strong>
                                        <strong>
                                            <p className="mb-0">Envió Incluido</p>
                                        </strong>
                                    </div>
                                    <span><strong class="result" id="result" >$53.000</strong></span>
                                </li>
                            </ul>

                            <button type="button" className="btn btn-primary btn-block">Confirmar compra</button>

                        </div>
                    </div>



                </div>


            </div>


        </section>


    );

};


export default Ofertas;

