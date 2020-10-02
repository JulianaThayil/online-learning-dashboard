import React from "react";
import "./button.css";
import { Link } from "react-router-dom";

const FilledButton = (props) => {
  return (
    <Link to={props.to}>
      <button class="bg-black text-white rounded-lg px-8 py-3">
        <p class="text"> {props.text} </p>
      </button>
    </Link>
  );
};

export default FilledButton;
