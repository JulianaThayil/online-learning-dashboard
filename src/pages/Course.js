import React, { useState, useEffect } from "react";
import "../App.css";
import courses from "../data/courses.json";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//components
import VideoPlayer from "../components/Course/VideoPlayer";
import Menu from "../components/Navigation/Menu";

const Course = (props) => {
  const [watchComplete, setWatchComplete] = useState(false);
  const [watchPercentage, setWatchPercentage] = useState(0);
  const [currentCourse, setCurrentCourse] = useState(null);

  useEffect(() => {
    const id = Number(props.match.params.id);
    let selectedCourse = courses.find((course) => course.id === id);
    setCurrentCourse(selectedCourse);
  }, [props.match.params.id]);

  const handleWatchComplete = ({ played }) => {
    const percentage = played * 100;
    setWatchPercentage(Math.round(percentage));

    if (played >= 0.99 && !watchComplete) {
      setWatchComplete(true);
    }
  };

  return (
    <div class="flex justify-between">
      <Menu />
      {currentCourse && (
        <div class="flex flex-col">
          <h1 class="heading"> {currentCourse.name}</h1>
          <p> by {currentCourse.author}</p>
          <VideoPlayer
            url={currentCourse.videoUrl}
            onProgress={handleWatchComplete}
          />
        </div>
      )}

      <div class="flex flex-col">
        <CircularProgressbar
          class="w-12 h-12"
          value={watchPercentage}
          text={`${watchPercentage}%`}
        />
        <br />
        <h2> Complete the course to get your certificate</h2>

        <div
          className={
            watchComplete
              ? "marker marker--is-complete"
              : "marker marker--not-complete"
          }
        >
          Get Certificate
        </div>
      </div>
    </div>
  );
};

export default Course;
