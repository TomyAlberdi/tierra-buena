import React, { useContext, useState } from "react";
import { AppContext } from "../../Hooks/AppContextComponent";

const CourseCard = ({ data }) => {
  const { handleScrollToSection, BASE_URL } = useContext(AppContext);

  const [Hovered, setHovered] = useState(false);

  return (
    <article
      className="CourseCard"
      style={{
        backgroundImage: `url(${BASE_URL}${data.imgUrl})`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => handleScrollToSection('contact')}
    >
      <div className={"shadowBox" + (Hovered ? " hovered" : "")}>
        <h4>
          {data.title}
        </h4>
      </div>
    </article>
  );
};

export default CourseCard;
