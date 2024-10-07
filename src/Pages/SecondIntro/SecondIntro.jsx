import React from "react";
import { GiWoodenChair, GiRiceCooker } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";

const SecondIntro = () => {
  return (
    <section className="Page SecondIntro" id="secondIntro">
      <div className="info">
        <span className="aboutPretitle">SOBRE TIERRA BUENA</span>
        <h2>La experiencia Tierra Buena</h2>
        <p>
          Cada vez son más las mujeres que se suman a esta comunidad. Mujeres
          dispuestas a llevarse un objeto hecho con sus manos, una tarde
          compartida, y el corazón pleno de alegría.
          <br />
          Vení a disfrutar de Tierra Buena, ¡La tranquera está abierta!
        </p>
      </div>
      <div className="images">
        <img src="secondIntro.jpg" />
        <section className="infoCard">
          <article>
            <GiWoodenChair />
            <p>Carpintería</p>
          </article>
          <article>
            <GiRiceCooker />
            <p>Cocina</p>
          </article>
          <article className="yoga">
            <GrYoga />
            <p>Yoga</p>
          </article>
          <h4>Y mucho más...</h4>
        </section>
      </div>
    </section>
  );
};

export default SecondIntro;
