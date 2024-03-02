import React from 'react'
import img1 from "./img/ptvsports2021.jpg";
import img2 from "./img/starsports1.jpg";
import img3 from "./img/unnamed.png";
import img4 from "./img/tensport.jpg";
import img5 from "./img/willow.jpg";
import img6 from "./img/asports.jpg";
import img7 from "./img/sky-sports.png";
import img8 from "./img/geosports.png";
import img9 from "./img/GEO-news-logo-vector-01-01.jpg";
import img10 from "./img/ary-news.png";
import { NavLink } from "react-router-dom";

export default function Channels(props) {
  console.log(props)
  return (
    <div className="container-fluid channel-links p-5">
    <div className="row justify-content-center p-2 " id="channels">
      <NavLink to="/Ptvsports" className="col-lg-2 col-md-4 m-1 col-sm-6 tv-btn h-100 ">
          <a  className={`media-btn  ${props.title}`}>
            <img src={img1} alt="ptvsports2021" />
          </a>
      </NavLink>
      <NavLink to='/startv' className="col-lg-2 col-md-4 m-1 col-sm-6 tv-btn">
          <a  className="media-btn">
            <img src={img2} alt="ptvsports2021"/>
          </a>
      </NavLink>
      <NavLink to="/Tamasha" className="col-lg-2 col-md-4 m-1 col-sm-6 tv-btn">
          <a  className="media-btn">
            <img src={img3} alt="Tamasha"/>
          </a>
      </NavLink>
      <NavLink to='/Tensports' className="col-lg-2 col-md-4 m-1 col-sm-6 tv-btn bg-white">
          <a className="media-btn">
            <img src={img4} alt="ptvsports2021"/>
          </a>
      </NavLink>
      <NavLink to='/Willow' className="col-lg-2 col-md-4 m-1 col-sm-6 tv-btn bg-white">
          <a className="media-btn">
            <img src={img5} alt="ptvsports2021" />
          </a>
      </NavLink>
    </div>
    <div className="row d-flex justify-content-center p-2">
      <NavLink to='/Asports' className="col-lg-2 col-md-4 m-1 col-sm-6 tv-btn">
          <a className="media-btn">
            <img src={img6} alt="ptvsports2021" />
          </a>        
      </NavLink>
      <NavLink to="/SkySports" className="col-lg-2 col-md-4 m-1 col-sm-6 tv-btn">
          <a  className="media-btn ">
            <img src={img7} alt="ptvsports2021" />
          </a>
      </NavLink>
      <NavLink to="/Geosuper" className="col-lg-2 col-md-4 m-1 col-sm-6 tv-btn">       
        <a  className="media-btn">
          <img src={img8} alt="ptvsports2021" />
        </a>         
    </NavLink>
      <NavLink to="/Geonews" className="col-lg-2 col-md-4 m-1 col-sm-6 tv-btn">
          <a  className="media-btn">
            <img src={img9} alt="ptvsports2021" />
          </a>
      </NavLink>
      <NavLink to="/Arynews" className="col-lg-2 col-md-4 m-1 col-sm-6 tv-btn">
          <a  className="media-btn">
            <img src={img10} alt="ptvsports2021" />
          </a>        
      </NavLink>
    </div>
    </div>
  )
}
