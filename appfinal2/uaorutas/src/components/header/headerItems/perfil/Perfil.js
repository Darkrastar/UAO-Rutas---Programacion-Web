import React from "react";
import "./perfil.css"
import { BiUser } from 'react-icons/bi';


const Perfil = ({nombre,apellido}) => (

    <div className="containerPerfil">
        <h5>{nombre} {apellido} <BiUser/> </h5>
    </div>
);

export default Perfil;