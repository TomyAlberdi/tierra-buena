import React from "react";
import CourseCard from "../../Components/CourseCard/CourseCard";

const coursesList = [
  {
    title: "Yoga",
    imgUrl: "yoga.jpg"
  },
  {
    title: "Cocina",
    imgUrl: "cooking.jpg"
  },
  {
    title: "Cerámica",
    imgUrl: "ceramics.jpg"
  },
  {
    title: "Carpintería",
    imgUrl: "woodwork.jpg"
  },
  {
    title: "Tejido",
    imgUrl: "knitting.jpg"
  },
];

const Courses = () => {
  return (
    <section className="Courses Page" id="courses">
      <div className="coursesIntro">
        <h2>Nuestros Talleres</h2>
        <p>Contamos con experiencia realizando todo tipo de actividades.</p>
      </div>
      <div className="coursesList">
        {coursesList?.map((course, index) => {
          return <CourseCard data={course} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Courses;
