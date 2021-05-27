import React from 'react';
import "./header.css"
import Logo from "../../img/graficos-01.png"
import Lupa from "../../img/lupa (1).svg"
import Carrito from "../../img/carrito.svg"
import User from "../../img/user.svg"
import {Link} from "react-router-dom"

const header = () => (



<nav className="navbar navbar-expand-lg ">

    <div className="container-fluid">
        
        {/* LOGO */}
        <div className="logo_buscador-container">

            <div className="o-logo-container">
                <img className="img-fluid logo" src={Logo} alt="" />
            </div>
            {/* BUSCADOR */}

            <div className="input-group rounded">
                <input type="search" className="form-control rounded" placeholder="¿Qué estas buscando?" aria-label="Search"
                    aria-describedby="search-addon" />
                <img className="img-fluid lupa" src={Lupa} alt="" />
            </div>

        </div>
                {/* Carrito */}

                <div className="o-container-carito-user">

                    <a className="nav-link" href="#">

                        <img className="img-fluid carrito" src={Carrito} alt="" />

                    </a>
     
                    {/* Iniciar sesión */}

                    <Link className="o-btn-linkIngrear" to="/footer">

                        <div className="o-btnUser">
                            
                            <img className="img-fluid user" src={User} alt=""/>
                            <p className="ingresartxt">Ingresar</p>
                    
                        </div>     

                    </Link>

                </div>

    </div>

</nav>


);

export default header;