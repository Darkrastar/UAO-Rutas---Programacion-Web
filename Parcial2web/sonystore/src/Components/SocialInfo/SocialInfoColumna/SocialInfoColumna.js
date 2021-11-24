import React from "react";
import "./SocialInfoColumna.css";

const SocialInfoColumna = ({item0,item1,item2,item3,item4,item5,item6}) => (
  <div className="SocialInfoColumnaContenedor">

      <h5 className="itemColumna">{item0}</h5>
      <h5 className="itemColumna">{item1}</h5>
      <h5 className="itemColumna">{item2}</h5>
      <h5 className="itemColumna">{item3}</h5>
      <h5 className="itemColumna">{item4}</h5>
      <h5 className="itemColumna">{item5}</h5>
      <h5 className="itemColumna">{item6}</h5>

  </div>
);

export default SocialInfoColumna;