
import './App.css';
import Header from "../src/components/header/header.js"
import Footer from "../src/components/footer/footer.js"
import Inicio from "../src/pages/Inicio"
import Productos from "./pages/productos"
import Contactenos from "./pages/Contactenos"
import Inicio_sesion from "./pages/inicio-sesion"
import Registro from "./pages/Registro"
import Quienes from "./pages/quienes-somos"
import React, { useEffect } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useLocation,
    withRouter
} from 'react-router-dom'


  function _ScrollToTop(props) {
      const { pathname } = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [pathname]);
        return props.children
    }
  const ScrollToTop = withRouter(_ScrollToTop)


function App() {
  return (
<BrowserRouter>
  <ScrollToTop>

    <Route exact path="/Inicio" component={Inicio}></Route>
    <Route exact path="/productos" component={Productos}></Route>
    <Route exact path="/Contactenos" component={Contactenos}></Route>
    <Route exact path="/Inicio_sesion" component={Inicio_sesion}></Route>
    <Route exact path="/Registro" component={Registro}></Route>
    <Route exact path="/quienes-somos" component={Quienes}></Route>

  </ScrollToTop>
</BrowserRouter>




  );
}

export default App;
