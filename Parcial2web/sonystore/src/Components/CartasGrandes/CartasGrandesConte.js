import React from "react";
import "./CartasGrandesConte.css";
import CartasGrandes from "./CartasGrandesItems/CartasGrandes";

const CartasGrandesConte = ({titulo,cartasG}) => (

    <div className="cartGrandesContenedor">
        <h1>{titulo}</h1>
        <CartasGrandes cartaGrandeImagen={cartasG[0].cartaGrandeImagen}></CartasGrandes>
        <CartasGrandes cartaGrandeImagen={cartasG[1].cartaGrandeImagen}></CartasGrandes>
        <CartasGrandes cartaGrandeImagen={cartasG[2].cartaGrandeImagen}></CartasGrandes>
        <CartasGrandes cartaGrandeImagen={cartasG[3].cartaGrandeImagen}></CartasGrandes>

    </div>

);

export default CartasGrandesConte;