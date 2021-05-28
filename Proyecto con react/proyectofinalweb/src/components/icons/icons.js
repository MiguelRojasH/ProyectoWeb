import React from "react"
import "./icons.css"

const icons = ({img,description}) => (
    


    <div className="card iconcard">

      <img src={`${img}`} className="img-fluid icons" alt="Icono de productos" />

        <div className="card-body iconbody">
          <p className="card-text icontxt">{`${description}`}</p>

        </div>

    </div> 

   

    );
 
  export default icons;