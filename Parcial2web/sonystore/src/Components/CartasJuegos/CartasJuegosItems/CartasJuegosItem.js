import React from "react";
import "./CartasJuegosItem.css"

const CartasJuegosItem = ({cartaImagen,cartaTitulo,cartaDescrip,cartaPrecio}) => (

    <div className="cartJuegosItemContenedor">
        <img className="imagenCarta" src={cartaImagen} />
        <h1 className="cartaJuegoItem">{cartaTitulo}</h1>
        <h2 className="cartaJuegoDescrip">{cartaDescrip}</h2>
        <h2 className="cartaJuegoPrecio">{cartaPrecio}</h2>
    </div>

);

export default CartasJuegosItem;