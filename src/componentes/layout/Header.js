import React from "react";
import Logo from "../../imagenes/LogoArgentina2.png";
import "../../estilos/componentes/layout/Header.css";

function Header () {
  return (
    <header className="contenedor-header">
      <div className="contenedores-secundarios">
        <img className="header-logo" src={Logo} alt="Logo de Mundial 2022" />
      </div>
      <div className="contenedores-secundarios">
        <h1 className="header-titulo" >Selección Argentina 2022</h1>
      </div>
    </header>
  );
}

export default Header;