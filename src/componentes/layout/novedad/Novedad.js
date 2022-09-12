import React from "react";
import "./Novedad.css";

function Novedad (props) {
  const { title, subtitle, image, body } = props;

  return (
    <div className="contenedor-novedad">
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      <div className="contenedor-novedad-imagen">
        <img className="imagen-novedad" src={image} alt="" />
      </div>
      <p dangerouslySetInnerHTML={{ __html: body}} />
      <hr />
    </div>
  );
}

export default Novedad;