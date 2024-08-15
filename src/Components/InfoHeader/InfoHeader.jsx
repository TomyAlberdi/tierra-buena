import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const InfoHeader = () => {
  return (
    <section className="infoHeader">
      <div className="title">
        <h1>
          Tardes en <span>Tierra Buena</span>
        </h1>
        <p>
          Encontrá inspiración en Atalaya - Un día de cursos artesanales para
          tejer, crear y conectar con la tradición.
        </p>
        <button>
        <IoIosArrowForward /> Ver más
        </button>
      </div>
      <div className="stats">
        <article className="stat">
          <span className="data">
            <span className="plus">+</span>
            100
          </span>
          <span className="name">Cursos realizados</span>
        </article>
        <article className="stat">
          <span className="data">
            <span className="plus">+</span>
            100
          </span>
          <span className="name">Personas nos eligieron</span>
        </article>
      </div>
    </section>
  );
};

export default InfoHeader;
