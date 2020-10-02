import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = (props) => {
  return (
    <div class="react-player">
      <ReactPlayer
        url={props.url}
        width="100%"
        height="100%"
        controls
        onProgress={props.onProgress}
      />
    </div>
  );
};

export default VideoPlayer;
