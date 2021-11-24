import React from "react";
import BotonInfo from "./BotonInfo/BotonInfo";
import "./CajasJuegos.css"

const CajasJuegos = ({ titulo,descripcion,InfoBtn,imagenJuego} ) => (
  <div className="cajaJuegoContenedor">
    <img className="imagenFifa" src={imagenJuego} />
    <h1 className="cajaJuegosTitulo">{titulo}</h1>
    <BotonInfo InfoBtn={InfoBtn}></BotonInfo>
    <h3 className="cajaJuegosDescrip">{descripcion}</h3>
  </div>
);

export default CajasJuegos;
