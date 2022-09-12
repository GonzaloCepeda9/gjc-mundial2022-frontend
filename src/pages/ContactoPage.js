import React from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import "../estilos/componentes/pages/ContactoPage.css";

function ContactoPage () {

  function sendEmail (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_5xq8j1s",
      "template_1heet47",
      e.target,
      "cmXOTv_U6p33FmZBW"
    ).then(res=>{
      console.log(res);
      swal({
        title: "Mensaje enviado",
        text: "El mensaje ha sido enviado con éxito.",
        icon: "success",
        button: "Aceptar",
        timer: 2000
      });
    }).catch(err=> console.log(err));
  }

  return (
    <main className="contenedor-principal contacto-contenedor">
      <h2 className="titulo-seccion titulo-contacto">Formulario de contacto</h2>
      <form className="contenedor-formulario" onSubmit={sendEmail}>
        <div className="contenedor-secundario">
          <label className="formulario-label" htmlFor="nombre">Nombre</label>
          <input type="text" className="formulario-input" placeholder="Escribe tu nombre y apellido" name="nombre" />
        </div>
        <div className="contenedor-secundario">
          <label className="formulario-label" htmlFor="correo">Email</label>
          <input type="email" className="formulario-input" placeholder="Escribe tu dirección de email" name="correo" id="correo" />
        </div>
        <div className="contenedor-secundario">
          <label className="formulario-label" htmlFor="asunto">Asunto</label>
          <input type="text" className="formulario-input" placeholder="Escribe el asunto del mensaje" id="asunto" name="asunto" />
        </div>
        <div className="contenedor-secundario">
          <label className="formulario-label" htmlFor="mensaje">Mensaje</label>
          <textarea className="formulario-textarea" placeholder="Escribe tu mensaje..." name="mensaje" id="mensaje" />
        </div>
        <button className="formulario-boton" type="submit">Enviar</button>
      </form>
    </main>
  );
}

export default ContactoPage;