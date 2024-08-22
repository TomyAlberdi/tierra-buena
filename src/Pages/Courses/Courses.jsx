import React from "react";
import CourseCard from "../../Components/CourseCard/CourseCard";

const coursesList = [
  {
    title: "Yoga",
    imgUrl: "/yoga.bmp"
  },
  {
    title: "Cocina",
    imgUrl: "/cooking.bmp"
  },
  {
    title: "Cerámica",
    imgUrl: "/ceramics.bmp"
  },
  {
    title: "Carpintería",
    imgUrl: "/woodwork.bmp"
  },
  {
    title: "Tejido",
    imgUrl: "/knitting.bmp"
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
