import React from "react"
import "./cards.css"

const CardWdescription = ({img,description}) => (
    


    <div className="card">
      <img src={`${img}`} className="img-fluid cardtxt" alt="imagen de productos" />

        <div className="card-body">
          <p className="card-text">{`${description}`}</p>

        </div>

    </div> 

   

    );
 
  export default CardWdescription;