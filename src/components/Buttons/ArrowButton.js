import React from "react";

const ArrowButton = (props) => {
  return (
    <button class="w-8 h-8 border-2 border-black rounded-full font-bold">
      <i class="fas">{props.text}</i>{" "}
    </button>
  );
};

export default ArrowButton;
