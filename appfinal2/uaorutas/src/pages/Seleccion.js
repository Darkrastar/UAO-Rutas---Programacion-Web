import React, { Component } from "react";
import NavBar from "../components/navbar/NavBar";
import Cookies from "universal-cookie";
import Header from "../components/header/Header";
import "../css/Seleccion.css"
import Tarjetas from "../components/tarjetas/Tarjetas";
import Legal from "../components/legal/Legal";

const cookies = new Cookies();

class Seleccion extends Component {
    cerrarSesion = () => {
        cookies.remove("id", { path: "/" });
        cookies.remove("apellido", { path: "/" });
        cookies.remove("nombre", { path: "/" });
        cookies.remove("username", { path: "/" });
        window.location.href = "./";
      };
    
  render() {
    return (
      <div className="containerSeleccionador">

          

        <Header
          nombre={cookies.get("nombre")}
          apellido={cookies.get("apellido")}
        />

        <NavBar></NavBar>

        <button className="btnCerrarSele btn-primary" onClick={() => this.cerrarSesion()}>
          Cerrar Sesión
        </button>

        <Tarjetas></Tarjetas>

        <Legal></Legal>
      </div>
    );
  }
}

export default Seleccion;
