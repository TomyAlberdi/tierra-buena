import React, { useEffect, useState, useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AppContext } from "../../Hooks/AppContextComponent";

const InfoHeader = () => {
  const { targetCoursesAmmount, targetPeopleAmmount, handleScrollToSection } =
    useContext(AppContext);

  const [CoursesAmmount, setCoursesAmmount] = useState(1);
  const [PeopleAmmount, setPeopleAmmount] = useState(1);

  useEffect(() => {
    const totalDuration = 1500;
    const startTime = Date.now();

    const updateAmounts = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / totalDuration, 1);

      const newCoursesAmmount =
        1 + Math.round(progress * (targetCoursesAmmount - 1));
      const newPeopleAmmount =
        1 + Math.round(progress * (targetPeopleAmmount - 1));

      setCoursesAmmount(newCoursesAmmount);
      setPeopleAmmount(newPeopleAmmount);

      if (progress < 1) {
        requestAnimationFrame(updateAmounts);
      }
    };

    requestAnimationFrame(updateAmounts);
  }, [targetCoursesAmmount, targetPeopleAmmount]);

  return (
    <section className="infoHeader" id="infoHeader">
      <div className="title">
        <h1>
          Los días en <span>Tierrabuena</span>
        </h1>
        <p>
          Te invitamos a compartir con nosotras una tarde de taller y
          aprendizaje, a conocer gente con tu misma curiosidad, a hacer algo con
          tus manos y a llevarte algo más que un objeto.
        </p>
        <button onClick={() => handleScrollToSection("secondIntro")}>
          <IoIosArrowForward /> Ver más
        </button>
      </div>
      <div className="stats">
        <article className="stat">
          <span className="data">
            <span className="plus">+</span>
            {CoursesAmmount}
          </span>
          <span className="name">Talleres realizados</span>
        </article>
        <article className="stat">
          <span className="data">
            <span className="plus">+</span>
            {PeopleAmmount}
          </span>
          <span className="name">Personas nos eligieron</span>
        </article>
      </div>
    </section>
  );
};

export default InfoHeader;
