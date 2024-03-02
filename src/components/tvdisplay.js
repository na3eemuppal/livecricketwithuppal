import React, {useState} from 'react';
import img1 from "./img/myimg.jpg";

export default function TvDisplay() {
  
  let handleClick =()=>{
    if (buttonText === "Show More") {
      console.log("the button click");
      setButtonText('Hidden');
    }else{
      setButtonText('Show More');
    }
  }
  const [buttonText, setButtonText] = useState('Show More');
  return (
    <div className="container">
     <div className="row">
      <div className="col-md-6 col-lg-6 col-sm-12">
        <div className="tv-display col-md-12 mt-5 m-0 d-flex justify-content-center">
          <div className="card naeem-card" >
            <img className="card-img-top" src={img1} alt="Card cap" />
            <div className="card-body">
              <h5 className="card-title">Naeem Uppal</h5>
              <p className="card-text">Welcome to Naeem Uppal's Corner,
                 where innovation meets elegance in the world of web development! As a seasoned front-end web developer,
                  I specialize in crafting immersive digital experiences using the latest technologies.
                </p>
              <a href="/" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
      </div>
     </div>
     <div className="expertise col-md-6 col-lg-6 col-sm-12 mt-5" > 
       <h2>🚀 Expertise at Your Fingertips:</h2>
       <p>
         Explore the seamless fusion of HTML5, CSS, and JavaScript as I weave them together to bring your vision to life. From pixel-perfect layouts to interactive user interfaces, every line of code is meticulously crafted to ensure a flawless user experience.
         </p>
         <h2>🎨 Aesthetic Brilliance with Bootstrap:</h2>
         <p>
           Witness the power of responsive design with Bootstrap, as your website adapts effortlessly to every screen size. The marriage of creativity and functionality is evident in every element, promising a visually stunning and user-friendly interface.</p>
           <h2>🔧 Innovation Unleashed:</h2>
           <p>Stay on the cutting edge of web development with my commitment to staying abreast of the latest industry trends. Your website is not just a digital presence but a dynamic, ever-evolving reflection of the latest technologies and design principles.</p>
           <button className="btn btn-primary" id="showmorebtn" onClick={handleClick} data-toggle="collapse" data-target="#moreshow" >{buttonText}</button>
           <div id="moreshow" className="collapse">
            <h2>  💼 Portfolio Showcase:</h2>
            <p>Explore a curated collection of projects that showcase my proficiency and creativity. Each project is a testament to my passion for delivering top-notch web solutions that not only meet but exceed expectations.</p>
            <h2> 📞 Let's Collaborate:</h2>
            <p>Ready to elevate your online presence? Whether you're launching a new project, revamping an existing site, or need a custom web solution, let's collaborate! Your vision, combined with my technical prowess, will result in a website that stands out in the digital landscape.</p>
            <h2>🌐 Connect With Me:</h2>
            <p> Ready to embark on a web development journey together? Connect with me through the provided channels, and let's turn your ideas into a captivating online reality.</p>
          
           </div>
      </div>
      </div>
    </div>
  )
}
