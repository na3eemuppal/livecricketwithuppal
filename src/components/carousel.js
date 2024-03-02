import React from 'react'
import img1 from "./img/cwc23-captains-v7.png";
import img2 from "./img/Pak-football-3-1.jpg";

export default function carousel() {
  return (
  <>
    <div id="carouselExampleControls" className="carousel slide position-relative" data-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </div>
      <div className="carousel-item">
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </div>
      <div className="carousel-item">
        <img
          className="d-block w-100"
          src={img1}
          alt="Third slide"
        />
      </div>
    </div>
    <a
      className="carousel-control-prev"
      href="#carouselExampleControls"
      role="button"
      data-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a
      className="carousel-control-next"
      href="#carouselExampleControls"
      role="button"
      data-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  </>
  )
}
