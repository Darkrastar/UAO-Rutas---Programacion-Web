import React from "react";
import Tarjeta from "./items/Tarjeta";
import imgConductor from "../../assets/conductor.png";
import imgPasajero from "../../assets/pasajero1.png";
import "./tarjeta.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Tarjetas = () => {
  function iniciarConductor(){
    window.location.href="./app"
  }

  function iniciarPasajero(){
    window.location.href="./app1"
  }

  return (
    <div className="contarinerItemsT">
        <h1 className="tituloSele">¿Qué quieres ser hoy?</h1>
      <Tarjeta onClick={iniciarConductor} rol={"Conductor"} imgRol={imgConductor}></Tarjeta>
      <Tarjeta rol={"Pasajero"} imgRol={imgPasajero}></Tarjeta>
      <button className="buttonSele" onClick={iniciarConductor}>Conductor</button>
      <button className="buttonPasa" onClick={iniciarPasajero}>Pasajero</button>
    </div>
  );
};

export default Tarjetas;
