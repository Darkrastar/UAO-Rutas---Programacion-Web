import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import App from "../pages/App";
import Seleccion from "../pages/Seleccion";
import App1 from "../pages/App1"
function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}></Route>
        <Route exact path="/app" element={<App/>}></Route>
        <Route exact path="/seleccion" element={<Seleccion/>}></Route>
        <Route exact path="/app1" element={<App1/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Rutas;