import React from "react";
import "./styles.css";
import FilledButton from "../Buttons/FilledButton";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const CurrentCourse = () => {
  return (
    <div class="rectangle2">
      <div class="rectangle3">
        <img
          src="/assets/courseIcons/spanish.svg"
          style={{ margin: "auto" }}
          alt="spanish"
        />
      </div>
      <div>
        <p class="courseName"> Spanish B2</p>
        <p class="author"> by Alejandro Velazquez</p>
      </div>

      <div class="progress">
        <CircularProgressbar
          value={83}
          text={`${83}%`}
          styles={buildStyles({
            pathColor: `#000000`,
            textSize: "32px",
            textColor: "#000000",
          })}
        />
      </div>
      <FilledButton to={`/course/6`} text="Continue" />
    </div>
  );
};

export default CurrentCourse;
