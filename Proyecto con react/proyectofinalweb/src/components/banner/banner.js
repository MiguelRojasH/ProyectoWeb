
import React from "react" 
import Banner from "../../img/localtxt.png"
import "./banner.css"

function banner() {
  return (
   
    <img src={Banner} className="img-fluid banner mw-100" alt="Responsive image"></img>
    
  );
}

export default banner;