
import './App.css';
import Header from "../src/components/header/header.js"
import Footer from "../src/components/footer/footer.js"
import Inicio from "../src/pages/Inicio"
import {BrowserRouter,Route} from "react-router-dom" 

function App() {
  return (


<BrowserRouter>
    <Route exact path="/header" component={Header}></Route>
    <Route exact path="/footer" component={Footer}></Route>
    <Route exact path="/Inicio" component={Inicio}></Route>
</BrowserRouter>
  );
}

export default App;
