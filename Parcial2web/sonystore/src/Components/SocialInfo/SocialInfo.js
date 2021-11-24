import React from "react";
import "./SocialInfo.css";
import logoSonyBlan from "./Assets/Imagenes/logoSonyBlan.png";
import { BiWorld } from "react-icons/bi";
import SocialInfoColumna from "./SocialInfoColumna/SocialInfoColumna";

const infoSocial = {
  columna1: [
    {
      item0: "Asistencia",
      item1: "Política de privacidad",
      item2: "Términos de uso del sitio web",
      item3: "Mapa del sitio",
      item4: "PlayStation Studios",
      item5: "Legal",
      item6: "Acerca de SIE",
    },
  ],
  columna2: [
    {
      item0: "Términos de servicio de PSN",
      item1: "Política de cancelación de PS Store",
      item2: "Avisos de salud",
      item3: "Acerca de las clasificaciones",
    },
  ],
  columna3: [
    {
      item0: "Facebook",
      item1: "Twitter",
      item2: "YouTube",
      item3: "Instagram",
      item4: "Aplicación Android",
      item5: "Aplicación iOS",
    },
  ],
};

const SocialInfo = () => (
  <div className="socialInfoContenedor">
    <img className="logoSocialInfo" src={logoSonyBlan} />
    <BiWorld className="iconMundo"></BiWorld>
    <h5 className="paisInfo">País/región: Colombia</h5>
    <SocialInfoColumna
      item0={infoSocial.columna1[0].item0}
      item1={infoSocial.columna1[0].item1}
      item2={infoSocial.columna1[0].item2}
      item3={infoSocial.columna1[0].item3}
      item4={infoSocial.columna1[0].item4}
      item5={infoSocial.columna1[0].item5}
      item6={infoSocial.columna1[0].item6}
    ></SocialInfoColumna>
    <SocialInfoColumna
      item0={infoSocial.columna2[0].item0}
      item1={infoSocial.columna2[0].item1}
      item2={infoSocial.columna2[0].item2}
      item3={infoSocial.columna2[0].item3}
      item4={infoSocial.columna2[0].item4}
      item5={infoSocial.columna2[0].item5}
      item6={infoSocial.columna2[0].item6}
    ></SocialInfoColumna>
    <SocialInfoColumna
      item0={infoSocial.columna3[0].item0}
      item1={infoSocial.columna3[0].item1}
      item2={infoSocial.columna3[0].item2}
      item3={infoSocial.columna3[0].item3}
      item4={infoSocial.columna3[0].item4}
      item5={infoSocial.columna3[0].item5}
      item6={infoSocial.columna3[0].item6}
    ></SocialInfoColumna>
  </div>
);

export default SocialInfo;
