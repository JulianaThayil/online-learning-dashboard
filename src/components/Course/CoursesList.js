import React from "react";
import courses from "../../data/courses.json";
import ListItem from "./ListItem";

const CoursesList = () => {
  const allCourses = courses.map((course) => {
    return (
      <ListItem
        id={course.id}
        imageUrl={course.imageUrl}
        name={course.name}
        author={course.author}
        time={course.time}
        rating={course.rating}
      />
    );
  });
  return <div class="flex flex-col mt-4">{allCourses}</div>;
};

export default CoursesList;
