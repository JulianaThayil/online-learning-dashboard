import React from "react";
import { Link } from "react-router-dom";

const OutlinedButton = (props) => {
  return (
    <Link
      to={props.to}
      class="border-2 border-black rounded-lg px-8 py-2 hover:bg-black hover:text-white"
    >
      <p class="text"> View course </p>
    </Link>
  );
};

export default OutlinedButton;
