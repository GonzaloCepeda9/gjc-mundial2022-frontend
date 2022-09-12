import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../../estilos/componentes/layout/Nav.css";


function Nav () {
  
  const [clicked, setClicked] = useState(false);

  function handleClick () {
    console.log(clicked);
    setClicked(!clicked);
  }

  return (
    <nav className="contenedor-nav">
      <ul className={clicked ? "nav-lista--show" : "nav-lista"}>
        <li className="lista-item"><NavLink to="/">Inicio</NavLink></li>
        <li className="lista-item"><NavLink to="/plantel">Plantel</NavLink></li>
        <li className="lista-item"><NavLink to="/novedades">Novedades</NavLink></li>
        <li className="lista-item"><NavLink to="/contacto">Contacto</NavLink></li>
      </ul>
      <button className= 'menu-boton' id="menu-boton" onClick={handleClick}>
        <FontAwesomeIcon icon={clicked ? faXmark : faBars} className="menu-icon" />
      </button>
    </nav>
  );
}

export default Nav;