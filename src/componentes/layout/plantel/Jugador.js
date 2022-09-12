import React from "react";
import "./Jugador.css";

function Jugador (props) {
  const { image, name, surname, age, position, club } = props;

  return (
    <div className="contenedor-jugador">
      <div className="jugador-imagen" >
        <img src={image} alt={`"Imagen de " ${name} " " ${surname} `} />
      </div>
      <div className="jugador-texto">
        <h4 className="texto texto-nombre">{name} {surname}</h4>
        <h5 className="texto texto-posicion">{position}</h5>
        <p className="texto texto-edad">Edad: {age} años</p>
        <p className="texto texto-club">Club: {club}</p>
      </div>
    </div>
  );
}

export default Jugador;