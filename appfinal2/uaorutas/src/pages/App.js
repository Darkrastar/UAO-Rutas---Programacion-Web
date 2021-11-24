import React, { Component } from "react";
import Cookies from "universal-cookie";
import Header from "../components/header/Header";
import Mapa from "../components/mapas/Mapa";
import "../css/App.css";
import DirectionsIndex from "../components/Directions/DirectionsIndex";
import NavBar from "../components/navbar/NavBar";
import Legal from "../components/legal/Legal";

const cookies = new Cookies();

class App extends Component {
  cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("apellido", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("username", { path: "/" });
    window.location.href = "./";
  };

  render() {
    return (
      <div className="containerApp">
        <Header
          nombre={cookies.get("nombre")}
          apellido={cookies.get("apellido")}
        />

        <NavBar></NavBar>
        <button className="btnCerrar btn-primary" onClick={() => this.cerrarSesion()}>
          Cerrar Sesión
        </button>
        <DirectionsIndex className="contenedorDire"></DirectionsIndex>
        <button className="btn btn-primary btnCentrar">
          Crear ruta
        </button>

        <Legal></Legal>
      </div>
    );
  }
}

export default App;
