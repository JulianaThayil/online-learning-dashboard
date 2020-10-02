import React from "react";
import "./style.css";
import todaygraph from "./todaygraph.svg";

const Graph = () => {
  return (
    <div>
      <nav class="flex justify-between">
        <h3 class="active name">Learning Hours </h3>
        <h3 class="name">My Courses</h3>
        <select class="dropdown">
          <option selected>Weekly </option>
          <option> Daily</option>
        </select>
      </nav>
      <br />
      <img src={todaygraph} alt="graph" />
    </div>
  );
};

export default Graph;
