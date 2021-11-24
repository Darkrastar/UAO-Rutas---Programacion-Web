import React from "react";
import PSS from "./Assets/Imagenes/playLogo2.png"
import "./NavPlayStore.css"
import NavPlayStoreItem from "./NavPlayStoreItems/NavPlayStoreItem";

const items={

    recientes:"Más reciente",
    coleccion:"Colecciones",
    ofertas:"Ofertas",
    ps5:"PS5",
    subscripciones:"Subscripciones",
    explorar:"Explorar"

};

const NavPlayStore = () => (

    <div className="navPlaySContenedor">
        <img className="imagenPSS" src={PSS}/>
        <NavPlayStoreItem className="navPlaysHover" item={items.recientes} ></NavPlayStoreItem>
        <NavPlayStoreItem item={items.coleccion}></NavPlayStoreItem>
        <NavPlayStoreItem item={items.ofertas}></NavPlayStoreItem>
        <NavPlayStoreItem item={items.ps5}></NavPlayStoreItem>
        <NavPlayStoreItem item={items.subscripciones}></NavPlayStoreItem>
        <NavPlayStoreItem item={items.explorar}></NavPlayStoreItem>
    </div>

);

export default NavPlayStore;