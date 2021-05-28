
import './App.css';
import Header from "../src/components/header/header.js"
import Footer from "../src/components/footer/footer.js"
import Inicio from "../src/pages/Inicio"
import Productos from "./pages/productos"
import {BrowserRouter,Route} from "react-router-dom" 

function App() {
  return (


<BrowserRouter>
    <Route exact path="/header" component={Header}></Route>
    <Route exact path="/footer" component={Footer}></Route>
    <Route exact path="/Inicio" component={Inicio}></Route>
    <Route exact path="/Productos" component={Productos}></Route>
</BrowserRouter>
  );
}

export default App;
