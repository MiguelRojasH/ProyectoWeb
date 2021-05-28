
import './App.css';
import Header from "../src/components/header/header.js"
import Footer from "../src/components/footer/footer.js"
import Inicio from "../src/pages/Inicio"
import Productos from "./pages/productos"
import Contactenos from "./pages/Contactenos"
import Inicio_sesion from "./pages/inicio-sesion"
import {BrowserRouter,Route} from "react-router-dom" 

function App() {
  return (


<BrowserRouter>
    <Route exact path="/header" component={Header}></Route>
    <Route exact path="/footer" component={Footer}></Route>
    <Route exact path="/Inicio" component={Inicio}></Route>
    <Route exact path="/productos" component={Productos}></Route>
    <Route exact path="/Contactenos" component={Contactenos}></Route>
    <Route exact path="/Inicio_sesion" component={Inicio_sesion}></Route>
</BrowserRouter>
  );
}

export default App;
