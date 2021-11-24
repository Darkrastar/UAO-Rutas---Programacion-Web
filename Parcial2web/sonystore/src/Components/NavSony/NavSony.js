import React from "react";
import PSImagen from "./Assets/Imagenes/PS.png"
import "./NavSony.css"
import SonyBotones from "./NavSonyItems/SonyBotones/SonyBotones";
import SonyBuscador from "./NavSonyItems/SonyBuscador/SonyBuscador";
import SonyInicioSesion from "./NavSonyItems/SonyInicioSesion/SonyInicioSesion";

const opciones={

    juegos:"Juegos",
    hardware:"Hardware",
    servicios:"Servicios",
    noticias:"Noticias",
    tienda:"Tienda",
    asistencia:"Asistencia"

};



const NavSony = () => (

    <div className="NavsonyContenedor">
        <img className="imagenPS" src={PSImagen}/>
        <SonyBotones opcion={opciones.juegos}></SonyBotones>
        <SonyBotones opcion={opciones.hardware}></SonyBotones>
        <SonyBotones opcion={opciones.servicios}></SonyBotones>
        <SonyBotones opcion={opciones.noticias}></SonyBotones>
        <SonyBotones opcion={opciones.tienda}></SonyBotones>
        <SonyBotones opcion={opciones.asistencia}></SonyBotones>
        <SonyInicioSesion></SonyInicioSesion>
        <SonyBuscador></SonyBuscador>
    </div>

);

export default NavSony;