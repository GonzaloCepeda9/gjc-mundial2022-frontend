import React from "react";
import "../estilos/componentes/pages/PlantelPage.css";
import LionelScaloni from "./../imagenes/LionelScaloni2.png"
import Jugador from "../componentes/layout/plantel/Jugador";
import { useState, useEffect } from "react";
import axios from "axios";

function PlantelPage (props) {

  const [loading, setLoading] = useState(false);
  const [plantel, setPlantel] = useState([]);

  useEffect(() => {
    const cargarPlantel = async () => {
      setLoading(true);

      var response = await axios.get(`${process.env.REACT_APP_API_URL}/api/plantel`);

      setPlantel(response.data);
      setLoading(false);
    }

    cargarPlantel()
  }, []);

  return (
    <main className="contenedor-principal">
      <h2 className="titulo-seccion titulo-plantel ">Plantel</h2>
      <h3>Posibles convocados al Mundial de Qatar 2022</h3>
      <div className="contenedor-plantel">
        {loading ? (
          <p>Cargando Plantel...</p>
        ) : (
          plantel.map(jugador => <Jugador
          key={jugador.id_jugador}
          image={jugador.imagen_jugador}
          name={jugador.nombre}
          surname={jugador.apellido}
          position={jugador.posicion}
          age={jugador.edad}
          club={jugador.club}
          />)
        )}
      </div>
      <div className="div-dt">
        <div className="contenedor-jugador contenedor-dt">
          <div className="jugador-imagen">
            <img className="imagen-scaloni" src={LionelScaloni} alt="" />
          </div>
          <div className="jugador-texto">
            <h4 className="texto texto-nombre">Lionel Scaloni</h4>
            <h5 className="texto texto-posicion">Director Técnico</h5>
            <p className="texto texto-club">Selección Argentina</p>
            <p className="texto texto-edad">Edad: 44 años</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PlantelPage;