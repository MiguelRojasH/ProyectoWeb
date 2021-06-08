import React from "react"
import "./carrito.css"
import Pollo from "../../img/pollo2.jpg"
import Costilla from "../../img/costilla2.jpg"
import { useState, useEffect } from "react";
import MiniApi from './Api/Miniapi';

const Carrito = ({titulo, peso, cantidad, precio}) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [numBox1, setUserNumBox1] = useState("");
    const [number, setNumber] = useState({ one: 0, two: 0 });
    const [suma, setSuma] = useState();

    const handleInput = (event) => {
        const { name, value } = event.target;
        setNumber({ ...number, [name]: value });
    }    
    useEffect(() => {
        const { one, two } = number;
        setSuma(Number(one) * precio + Number(two) * 18000);
    }, [number]);
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
                                            <div>{/* Datos que se conectan con la api */}
                                                <h5 className="letritas">{`${titulo}`}</h5>
                                                <p className="mb-3  text-uppercase small letritas">{`PESO: ${peso}`}</p>
                                                <p className="mb-2  text-uppercase small letritas">{`PIEZAS:${cantidad}`}</p>
                                            </div>
                                            {/* BOTONES AQUIIIIIII */}
                                            <div className="conatiner-btn-inputs">
                                                <div className="def-number-input number-input safari_only mb-0 w-100">
                                                    <button className="btn-sum" type="number" onClick={() => setCount(count - 1)}   >  - </button>
                                                    <input id="numBox1" name="one" className="quantity" min="0" value={number.one = count} readOnly />
                                                    <button className="btn-rest" type="number" onClick={() => setCount(count + 1)}> + </button>
                                                </div>
                                                <button type="button" className="btn btn-primary btn-sm" onClick={handleInput}>Confirmar cantidad</button>
                                            </div>
                                            {/* BOTONES AQUIIIIIII */}
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3"><i
                                                    className="fas fa-trash-alt mr-1" ></i> Quitar </a>
                                                <a href="#!" type="button" className="card-link-secondary small text-uppercase"><i
                                                    className="fas fa-heart mr-1"></i> Añadir a favoritos </a>
                                            </div>
                                            <p className="mb-0"><span><strong id="summary">${`${precio}`}</strong></span></p>
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
                                            {/* BOTONES AQUIIIIIII */}
                                            <div className="conatiner-btn-inputs">
                                                <div className="def-number-input number-input safari_only mb-0 w-100">
                                                    <button className="btn-sum" type="number" onClick={() => setCount2(count2 - 1)}   >  - </button>
                                                    <input id="numBox2" name="two" className="quantity" value={number.two = count2} readOnly />
                                                    <button className="btn-sum" type="number" onClick={() => setCount2(count2 + 1)}   >  + </button>
                                                </div>
                                                <button type="button" className="btn btn-primary btn-sm" onClick={handleInput}>Confirmar cantidad</button>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <a href="#!" type="button" className="card-link-secondary small text-uppercase mr-3"><i
                                                    className="fas fa-trash-alt mr-1"></i> Quitar </a>
                                                <a href="#!" type="button" className="card-link-secondary small text-uppercase"><i
                                                    className="fas fa-heart mr-1"></i> Añadir a favoritos </a>
                                            </div>
                                            <p className="mb-0"><span><strong id="summary">$18.000</strong></span></p>
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
                                    <span>{suma}</span>
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
                                    <span><strong className="result" id="result" > {suma} </strong></span>
                                </li>
                            </ul>
                            <button type="button" className="btn btn-primary btn-block btn-confirmar" data-toggle="modal" data-target="#exampleModal">
                                Confirmar compra
</button>

                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">¡Tú pedido está en camino!</h5>
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            Gracias por confiar en supermercados La Gran Colombia.
    <br></br>
      Tú pedido estará en tu hogar en los próximos 45 minutos.
      </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary" data-dismiss="modal">Cerrar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Carrito;

