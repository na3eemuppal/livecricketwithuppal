import React from 'react'
import { Link } from "react-dom";
import ReactPlayer from 'react-player'

export default function Arynews() {
  return (
    <>
    <div className="container">
      <div className="tv-display col-md-12 mt-5 d-flex justify-content-center">
        <ReactPlayer className='reactplayer'
        controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
        url="https://www.youtube.com/watch?v=sUKwTVAc0Vo" 
        title="YouTube video player" 
        frameborder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allowfullscreen="" 
         ></ReactPlayer>
      </div>
    </div>
    
    </>
  )
}
