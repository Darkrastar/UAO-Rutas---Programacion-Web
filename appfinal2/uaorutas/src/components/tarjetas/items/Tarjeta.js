import React from "react";
import "./tarjeta.css"


const Tarjeta = ({ rol, imgRol }) => (
  <div className="containerTarjeta">
    <h1 className="tituloRol">{rol}</h1>
    <img className="imagenTarjeta" src={imgRol} />
  </div>
);

export default Tarjeta;
