import React, { useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../../estilos/componentes/layout/Nav.css";


function Nav () {
  
  function ShowWindowWidth() {
    const [width, setWidth] = useState(0);

    useEffect(() => {
      // Creamos una función para actualizar el estado con el clientWidth
      const updateWidth = () => {
        const width = document.body.clientWidth
        setWidth(width)
      }
      // Actualizaremos el width al montar el componente
      updateWidth()
      // Nos suscribimos al evento resize() de window
      window.addEventListener("resize", updateWidth)
    })
    return width;
  }

  const [clicked, setClicked] = useState(false);

  function mostrarMenu () {
    setClicked(!clicked);
  }

  var width = ShowWindowWidth() 

  return (
    <nav className="contenedor-nav">
      <ul className={clicked && width <= 480 ? "nav-lista--show" : "nav-lista"} id="navResponsive">
        <li className="lista-item"><NavLink to="/">Inicio</NavLink></li>
        <li className="lista-item"><NavLink to="/plantel">Plantel</NavLink></li>
        <li className="lista-item"><NavLink to="/novedades">Novedades</NavLink></li>
        <li className="lista-item"><NavLink to="/contacto">Contacto</NavLink></li>
      </ul>
      <button className= 'menu-boton' id="menu-boton" onClick={mostrarMenu}>
        <FontAwesomeIcon icon={clicked ? faXmark : faBars} className="menu-icon" />
      </button>
    </nav>
  );
}

export default Nav;