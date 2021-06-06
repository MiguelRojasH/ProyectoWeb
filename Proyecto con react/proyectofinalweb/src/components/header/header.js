import React from 'react';
import "./header.css"
import Logo from "../../img/graficos-01.png"
import Lupa from "../../img/lupa (1).svg"
import Carrito from "../../img/carrito.svg"
import User from "../../img/user.svg"
import { Link } from "react-router-dom"

const header = () => (



    <nav className="navbar navbar-expand-lg ">

        <div className="container-fluid">

            {/* LOGO */}
           

                <div className="col-2 o-logo-container">

                        <img className="img-fluid logo" src={Logo} alt="" />
                   
                </div>

                {/* BUSCADOR */}
                <div className="col-8 input-group rounded">
                    <input type="search" className="form-control rounded" placeholder="¿Qué estas buscando?" aria-label="Search"
                        aria-describedby="search-addon" />
                    <img className="img-fluid lupa" src={Lupa} alt="" />
                </div>

            {/* Carrito */}

            <div className="col o-container-carito-user">

                <Link className="nav-link" to="/carrito">

                    <img className="img-fluid carrito" src={Carrito} alt="" />

                </Link>

                {/* Iniciar sesión */}

                <Link className="o-btn-linkIngrear" to="/Inicio_sesion">

                    <div className="o-btnUser">

                        <img className="img-fluid user" src={User} alt="" />
                        <p className="ingresartxt">Ingresar</p>

                    </div>

                </Link>

            </div>

        </div>

    </nav>


);

export default header;