import React from "react";
import "./styles.css";

const ProgressCard = (props) => {
  return (
    <div class="card">
      <h1 class="num"> {props.num} </h1>
      <p class="txt">
        Courses <br /> {props.text}
      </p>
    </div>
  );
};

export default ProgressCard;
