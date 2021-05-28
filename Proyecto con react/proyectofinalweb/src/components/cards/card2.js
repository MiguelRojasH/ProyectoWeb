import React from "react"
import "./Card2.css"

const CardWdescription = ({img,description}) => (
    


    <div className="card">
      <img src={`${img}`} className="img-fluid card2" alt="imagen de productos" />

        <div className="card-body">
          <p className="card-text">{`${description}`}</p>

        </div>

    </div> 

   

    );
 
  export default CardWdescription;