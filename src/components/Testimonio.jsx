import React from "react";
import '../styles/Testimonio.css';

function Testimonio(props) {
  return (
    <section className="contenedor-testimonio">
      <img 
        src={require(`../images/testimonio-${props.imagen}.png`)}
        alt="Foto de Emma" 
        className="imagen-testimonio"/>
      <section className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">
          "{props.testimonio}".
        </p>
      </section>
    </section>
  );
};

export default Testimonio;