import React from 'react'
import logoImg from "./img/logo.png";
import { NavLink } from 'react-router-dom';


export default function navbar() {
  return (
    <header className="site-navbar mt-3">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="site-logo col-6"><NavLink to="/Display">
            <img src={logoImg} id="logo"/>
          </NavLink></div>

          <nav className="mx-auto site-navigation">
            <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
              <li><NavLink to="/Display" className="nav-link">Home</NavLink></li>
              <li><NavLink to="/my-footer">About</NavLink></li>
              <li className="has-children">
                <a to="/">News</a>
                <ul className="dropdown">
                  <li><NavLink to="/Geonews">Geo News</NavLink></li>
                  <li><NavLink to="/Arynews">ARY News</NavLink></li>
                </ul>
              </li>
              <li className="has-children">
                <NavLink to="/Sports">Sports</NavLink>
                <ul className="dropdown">
                  <li><NavLink to="/Asports">A Sports</NavLink></li>
                  <li><a to="/Btsports">BT Sports</a></li>
                  <li><NavLink to="/Geosuper">Geo Super</NavLink></li>
                  <li><NavLink to="/Ptvsports">PTV Sports</NavLink></li>
                  <li><a to="/Skysports">Sky Sports</a></li>
                  <li><NavLink to="/Startv">Star Tv</NavLink></li>
                  <li><NavLink to="/Tamasha">Tamasha</NavLink></li>
                  <li><NavLink to="/Willow">Willow</NavLink></li>
                  <li><NavLink to="/Tensports">Ten Sports</NavLink></li>
                </ul>
              </li>
              <li><a href="blog.html">Blog</a></li>
              <li><NavLink to="/Contact" className='hi'>Contact</NavLink></li>
              <li className="d-lg-none"><a href="/"><span className="mr-2">+</span> Post a Job</a></li>
              <li className="d-lg-none"><a href="/">Log In</a></li>
            </ul>
          </nav>
          
          <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
            <div className="ml-auto">
              <a href="post-job.html" className="btn btn-outline-white border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-add"></span>Post a Job</a>
              <a href="login.html" className="btn btn-primary border-width-2 d-none d-lg-inline-block"><span className="mr-2 icon-lock_outline"></span>Log In</a>
            </div>
            <a href="/" className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"><span className="icon-menu h3 m-0 p-0 mt-2"></span></a>
          </div>

        </div>
      </div>
    </header>
  )
}


