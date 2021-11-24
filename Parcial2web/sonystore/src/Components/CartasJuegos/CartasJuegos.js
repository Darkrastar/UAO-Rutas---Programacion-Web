import React from "react";
import CartasJuegosItem from "./CartasJuegosItems/CartasJuegosItem";
import "./CartasJuegos.css"

const CartasJuegos = ({titulo,vermas,cartas}) => (

    <div className="cartJuegosContenedor">
        <h1 className="cartJuegosh1">{titulo}</h1>
        <h2 className="cartJuegosh2">{vermas}</h2>
        <CartasJuegosItem cartaImagen={cartas[0].cartaImagen} cartaTitulo={cartas[0].cartaTitulo} cartaPrecio={cartas[0].cartaPrecio}></CartasJuegosItem>
        <CartasJuegosItem cartaImagen={cartas[1].cartaImagen} cartaTitulo={cartas[1].cartaTitulo} cartaDescrip={cartas[1].cartaDescrip} cartaPrecio={cartas[1].cartaPrecio}></CartasJuegosItem>
        <CartasJuegosItem cartaImagen={cartas[2].cartaImagen} cartaTitulo={cartas[2].cartaTitulo} cartaDescrip={cartas[2].cartaDescrip} cartaPrecio={cartas[2].cartaPrecio}></CartasJuegosItem>
        <CartasJuegosItem cartaImagen={cartas[3].cartaImagen} cartaTitulo={cartas[3].cartaTitulo} cartaDescrip={cartas[3].cartaDescrip} cartaPrecio={cartas[3].cartaPrecio}></CartasJuegosItem>
        <CartasJuegosItem cartaImagen={cartas[4].cartaImagen} cartaTitulo={cartas[4].cartaTitulo} cartaDescrip={cartas[4].cartaDescrip} cartaPrecio={cartas[4].cartaPrecio}></CartasJuegosItem>
        <CartasJuegosItem cartaImagen={cartas[5].cartaImagen} cartaTitulo={cartas[5].cartaTitulo} cartaDescrip={cartas[5].cartaDescrip} cartaPrecio={cartas[5].cartaPrecio}></CartasJuegosItem>
    </div>

);

export default CartasJuegos;