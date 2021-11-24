import React from "react";
import "./header.css";
import Chat from "./headerItems/chat/Chat";
import Noti from "./headerItems/notificaciones/Noti";
import Perfil from "./headerItems/perfil/Perfil";

const Header = ({ nombre, apellido }) => (
  <div className="containerHeader">
    <Noti></Noti>
    <Chat></Chat>
    <Perfil nombre={nombre} apellido={apellido} />
  </div>
);

export default Header;
