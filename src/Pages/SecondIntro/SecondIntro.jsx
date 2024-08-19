import React from "react";
import { GiWoodenChair, GiRiceCooker } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";

const SecondIntro = () => {
  return (
    <section className="Page SecondIntro" id="secondIntro">
      <div className="info">
        <span className="aboutPretitle">SOBRE TIERRA BUENA</span>
        <h2>Use su Tiempo Libre Activamente</h2>
        <p>
          Tierra buena es un lugar para aprender, conectar y compartir con otros
          y con la naturaleza.
          <br />
          Mediante diferentes cursos realizados junto a profesionales, siempre
          aprenderás algo nuevo. Además, ¡Te llevás lo que hiciste!
        </p>
      </div>
      <div className="images">
        <img src="https://kfkit.rometheme.pro/garvest/wp-content/uploads/sites/21/2022/03/F-7.jpg" />
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
