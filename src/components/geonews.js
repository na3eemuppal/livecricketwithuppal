import React from "react";
import ReactPlayer from "react-player";

export default function Geonews() {
  return (
    <>
      <div className="tv-display col-md-12 mt-5 d-flex justify-content-center">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=O3DPVlynUM0"
          controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen=""
          height={700}
          ></ReactPlayer>
      </div>
    </>
  );
}
