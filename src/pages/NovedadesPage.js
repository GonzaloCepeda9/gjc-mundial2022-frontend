import React from "react";
import "../estilos/componentes/pages/NovedadesPage.css";
import Novedad from "../componentes/layout/novedad/Novedad";
import { useState, useEffect } from "react";
import axios from "axios";

function NovedadesPage (props) {

  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);

      var response = await axios.get(axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`));

      setNovedades(response.data);
      setLoading(false);
    };

    cargarNovedades()
  }, []);

  return (
    <main className="contenedor-principal">
      <h2 className="titulo-seccion titulo-novedades">Novedades</h2>
      <div className="contenedor-novedades">
        {loading ? (
          <p>Cargando Novedades...</p>
        ) : (
          novedades.map(item => <Novedad
            key={item.id_novedad}
            title={item.titulo}
            subtitle={item.subtitulo}
            image={item.imagen}
            body={item.cuerpo} />)
        )}
      </div>
    </main>
  );
}

export default NovedadesPage;