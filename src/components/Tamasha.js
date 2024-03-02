import React, { useEffect } from 'react'

export default function Tamasha() {
  // const Home = () =>{
  //   useEffect(() => {
  //     document.title = "Tamasha Tv With Uppal"
  // },[]);
  return (
    <div className="tv-display col-md-12 mt-5 d-flex justify-content-center">
    <iframe className="iframe" title="live score"
     src="https://pipcast.cc/embed.php?v=asports&amp;vw=100%&amp;vh=100%" 
      width="600" height="400"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       allowfullscreen="" __idm_id__="1933313" frameborder="0" ></iframe>
  </div>
  )
};
