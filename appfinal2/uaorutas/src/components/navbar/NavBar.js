import React from "react";
import "./navBar.css"
import NavItem from "./navbaritems/NavItems";
import imagLogo from "../../assets/logoRutas.png"


const NavBar = ({}) => (
  <div className="containerNavBar">
    <img className="imagLogo" src={imagLogo} />
    <NavItem item={"Campus UAO"}></NavItem>
    <NavItem item={"Portal Estudiantil"}></NavItem>
    <NavItem item={"Rutas UAO"}></NavItem>
  </div>
);

export default NavBar;