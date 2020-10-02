import React from "react";
import "./styles.css";
import OutlinedButton from "../Buttons/OutlinedButton";

//icons
import clock from "../../assets/icons/clock.svg";
import rating from "../../assets/icons/rating.svg";

const ListItem = (props) => {
  return (
    <div>
      <div class="rectangle4">
        <div class="rectangle3">
          <img style={{ margin: "auto" }} src={props.imageUrl} alt="figma" />
        </div>

        <div>
          <p class="courseName"> {props.name}</p>
          <p class="author"> by {props.author}</p>
        </div>

        <div class="flex items-center justify-between">
          <img src={clock} alt="clock" />
          <p class="caption"> {props.time} </p>
        </div>

        <div class="flex items-center justify-between">
          <img src={rating} alt="rating" />
          <p class="caption"> {props.rating} </p>
        </div>

        <OutlinedButton to={`/course/${props.id}`} />
      </div>
      <br />
    </div>
  );
};

export default ListItem;
