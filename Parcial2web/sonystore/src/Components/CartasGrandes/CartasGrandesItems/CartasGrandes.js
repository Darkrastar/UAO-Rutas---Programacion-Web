import React from "react";
import "./CartasGrandes.css";

const CartasGrandes = ({ cartaGrandeImagen }) => (
  <div className="cartGrandesItemContenedor">
    <img className="imagenCartaGrandeItem" src={cartaGrandeImagen} />
  </div>
);

export default CartasGrandes;
