import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import "./SonyBotones.css"


const SonyBotones = ({opcion}) => (

    <div className="sonyBContenedor">
        <h3 className="sonyBh3">{opcion} </h3>
        <IoChevronDownOutline className="iconB"/>
    </div>

);

export default SonyBotones;