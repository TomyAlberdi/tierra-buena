import React from "react";
import list from "../../Utils/CoursesInfo.json";
import CourseCard from "../../Components/CourseCard/CourseCard";

const Courses = () => {
  return (
    <section className="Courses Page" id="courses">
      <div className="coursesIntro">
        <h2>Nuestros Talleres</h2>
        <p>Contamos con experiencia realizando todo tipo de actividades.</p>
      </div>
      <div className="coursesList">
        {list?.map((course, index) => {
          return <CourseCard data={course} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Courses;
