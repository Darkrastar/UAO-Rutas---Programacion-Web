import React from "react";
import "./CartasGrandesConte2.css";
import CartasGrandes from "./CartasGrandesItems/CartasGrandes";

const CartasGrandesConte = ({titulo,cartasG}) => (

    <div className="cartGrandesContenedor2">
        <h1 className="cartasGrandesTitulo">{titulo}</h1>
        <CartasGrandes cartaGrandeImagen={cartasG[0].cartaGrandeImagen}></CartasGrandes>
        <CartasGrandes cartaGrandeImagen={cartasG[1].cartaGrandeImagen}></CartasGrandes>
        <CartasGrandes cartaGrandeImagen={cartasG[2].cartaGrandeImagen}></CartasGrandes>
        <CartasGrandes cartaGrandeImagen={cartasG[3].cartaGrandeImagen}></CartasGrandes>
        <CartasGrandes cartaGrandeImagen={cartasG[4].cartaGrandeImagen}></CartasGrandes>
        <CartasGrandes cartaGrandeImagen={cartasG[5].cartaGrandeImagen}></CartasGrandes>
        <CartasGrandes cartaGrandeImagen={cartasG[6].cartaGrandeImagen}></CartasGrandes>

    </div>

);

export default CartasGrandesConte;