import React from 'react';
import instaImg from './img/instagram.png';
import fbImg from './img/facebook.png';
import twitImg from './img/twitter.png';
import linkedImg from './img/Linkedin.png';
import ytImg from './img/youtube.png';


export default function Footer() {
  return (
    <footer className='text-white' id="my-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 left-footer">
            <h5 className="text-white text-center p-2">These are all my Social Media Accounts Links</h5>
            <ul className="list-unstyled m-2 position-relative text-white">
              <li>
                <a href="https://www.instagram.com/naeemuppal/" target="_blank" id="insta">
                  <i className="fa fa-instagram" aria-hidden="true"></i> Instagram</a>
                  <img src={instaImg} alt="insta" className="social-img" id="insta-img"/>
              </li>
              <li >
                <a href="https://www.facebook.com/neem.eg" target="_blank" id="fb">
                <i className="fa fa-facebook-official" aria-hidden="true"></i> Facebook</a>
                <img src={fbImg} alt="fb" id="fb-img" className="social-img" />
              </li>
              <li>
                <a href="https://twitter.com/MrsNaeemuppal" target="_blank" id="twit">
                <i className="fa fa-twitter-square" aria-hidden="true"></i> Twitter</a>
                <img src={twitImg} alt="twitter" id="twit-img" className="social-img" />
              </li>
              <li>
                <a href="https://www.linkedin.com/in/muhammad-naeem-60984816a/" target="_blank" id="linkedin">
                <i className="fa fa-linkedin" aria-hidden="true"></i> Linkedin</a>
                <img src={linkedImg} id="linkedin-img" className="social-img"/>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UC0s6sa_es2KVZc2aqYKgdLg" target="_blank" id="youtube">
                <i className="fa fa-youtube-play" aria-hidden="true"></i> Youtube</a>
                <img src={ytImg} id="youtube-img" className="social-img"/>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?naeemuppal=username&phone=923323098000" target="_blank" id="whatsap">
                <i className="fa fa-instagram" aria-hidden="true"></i> Whatsapp</a>
                
              </li>
            </ul>
          </div>
          <div className="col-lg-6 text-white">
            <h5 className="text-white p-2 text-center ">Emails And Address</h5>
              <ul className="list-unstyled text-white">
                <li>
                  <i className="fa fa-google" aria-hidden="true"></i>
                  <a href="mailto:neemo.ego.g@gmail.com">Personal Email Id</a>
                </li>
                <li>
                  <i className="fa fa-google" aria-hidden="true"></i>
                  <a href="mailto:aonecomputers22@gmail.com">Business Email Id</a>
                </li>
                <li>
                  <a target="-blank" href="https://www.google.com/maps/place/A+One+Computers/@31.2986015,74.0705847,15z/data=!4m6!3m5!1s0x39185704717f33a3:0x42aec6e14ae610d0!8m2!3d31.2986015!4d74.0705847!16s%2Fg%2F11gfms7qcm?entry=ttu"><i className="fa fa-home" aria-hidden="true"> A-One Computers Al-Shair Market Raiwind Road Manga Mandi District Lahore</i></a>
                </li>
              </ul>
          </div>
        </div>
      </div>
      <div className="footer-end">
      <i class="fa fa-thumbs-o-up" aria-hidden="true"> Thanks for visiting to my site</i>
      </div>
    </footer>
  )
}
