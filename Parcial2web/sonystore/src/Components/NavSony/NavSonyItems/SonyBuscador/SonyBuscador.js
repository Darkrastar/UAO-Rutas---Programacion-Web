import React from "react";
import "./SonyBuscador.css"
import { IoSearch } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

const SonyBuscador = () => (

    <div className="sonyBusContenedor">
        <input className="sonyBustexto" placeholder=" Buscar"></input>
        <BsSearch className="icon"></BsSearch>
    </div>

);

export default SonyBuscador;