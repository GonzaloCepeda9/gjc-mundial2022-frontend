import React from "react";
import "../estilos/componentes/pages/HomePage.css";
import imagenHome from "../imagenes/ImagenHome.png"

function HomePage () {
  return (
    <main className="contenedor-principal contenedor-home">      
      <h2 className="titulo-seccion titulo-home">Selección Argentina</h2>
      <div className="contenedor-home-imagen">
        <img className="imagen-home" src={imagenHome} alt="" />
      </div>
      <div className="contenedor-texto">
        <p>Los números hablan por sí solos. De sus últimos 33 encuentros, el equipo de Lionel Scaloni ganó 22 y empató 11, con 64 goles a favor y 17 en contra (19 vallas en cero).</p>

        <p>La mayoría de esos juegos del último campeón de América fueron por competiciones: 17 de Eliminatorias (11-6), 8 por Copa América (6-2), 7 amistosos (4-3) y la Finalissima, en la que goleó por 3-0 a Italia en Wembley.</p>
      </div>
      <div className="contenedor-texto texto-resultados">
        <h3>Resultados de los últimos partidos de Argentina:</h3>

        <h4>2022</h4>

        <ul className="resultados-lista">
          <li>5/6/2022 - Amistoso: 5-0 vs. Estonia</li>
          <li>1/6/2022 - Finalissima: 3-0 vs. Italia</li>
          <li>29/3/2022 - Eliminatorias: 1-1 vs. Ecuador (V)</li>
          <li>25/3/2022 - Eliminatorias: 3-0 vs. Venezuela (L)</li>
          <li>1/2/2022 - Eliminatorias: 1-0 vs. Colombia (L)</li>
          <li>27/1/2022 - Eliminatorias: 2-1 vs. Chile (V)</li>
        </ul>

        <h4>2021</h4>

        <ul className="resultados-lista">
          <li>17/11/2021 - Eliminatorias: 0-0 vs. Brasil (L)</li>
          <li>12/11/2021 - Eliminatorias: 1-0 vs. Uruguay (V)</li>
          <li>14/10/2021 - Eliminatorias: 1-0 vs. Perú (L)</li>
          <li>10/10/2021 - Eliminatorias: 3-0 vs. Uruguay (L)</li>
          <li>7/10/2021 - Eliminatorias: 0-0 vs. Paraguay (V)</li>
          <li>9/9/2021 - Eliminatorias: 3-0 vs. Bolivia (L)</li>
          <li>2/9/2021 - Eliminatorias: 3-1 vs. Venezuela (V)</li>
          <li>10/7/2021 - Copa América 2021: 1-0 vs. Brasil</li>
          <li>6/7/2021 - Copa América 2021: 1-1 (3-2) vs. Colombia</li>
          <li>3/7/2021 - Copa América 2021: 3-0 vs. Ecuador</li>
          <li>28/6/2021 - Copa América 2021: 4-1 vs. Bolivia</li>
          <li>21/6/2021 - Copa América 2021: 1-0 vs. Paraguay</li>
          <li>18/6/2021 - Copa América 2021: 1-0 vs. Uruguay</li>
          <li>14/6/2021 - Copa América 2021: 1-1 vs. Chile</li>
          <li>8/6/2021 - Eliminatorias: 2-2 vs. Colombia (V)</li>
          <li>3/6/2021 - Eliminatorias: 1-1 vs. Chile (L)</li>
        </ul>
      </div>
    </main>
  );
}

export default HomePage;