import React from 'react'

export default function Contact() {
  return (
    <>
        <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Contact</h2>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-12">
					<div className="wrapper">
						<div className="row mb-5">
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-map-marker"></span>
			        		</div>
			        		<div className="text">
				            <p><span>Address:</span> A-One Computers, Al-shair Market Raiwind Road Manga Mandi Lahore.</p>
				          </div>
			          </div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-phone"></span>
			        		</div>
			        		<div className="text">
				            <p><span>Phone:</span> <a href="tel:+923323098000">+923323098000</a></p>
				          </div>
			          </div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-paper-plane"></span>
			        		</div>
			        		<div className="text">
				            <p><span>Email:</span> <a href="mailto:info@yoursite.com">codewithuppal@gmail.com</a></p>
				          </div>
			          </div>
							</div>
							<div className="col-md-3">
								<div className="dbox w-100 text-center">
			        		<div className="icon d-flex align-items-center justify-content-center">
			        			<span className="fa fa-globe"></span>
			        		</div>
			        		<div className="text">
				            <p><span>Website</span> <a href="https://www.youtube.com/channel/UC0s6sa_es2KVZc2aqYKgdLg" target="_blank">YouTubeChannle.com</a></p>
				          </div>
			          </div>
							</div>
						</div>
						<div className="row no-gutters">
							<div className="col-md-7">
								<div className="contact-wrap w-100 p-md-5 p-4">
									<h3 className="mb-4">Contact Us</h3>
									<div id="form-message-warning" className="mb-4"></div> 
				      		<div id="form-message-success" className="mb-4">
				            Your message was sent, thank you!
				      		</div>
									<form method="POST" id="contactForm" name="contactForm" className="contactForm">
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label className="label" for="name">Full Name</label>
													<input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
												</div>
											</div>
											<div className="col-md-6"> 
												<div className="form-group">
													<label className="label" for="email">Email Address</label>
													<input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" for="subject">Subject</label>
													<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" for="#">Message</label>
													<textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input type="submit" value="Send Message" className="btn btn-primary"/>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-md-5 d-flex align-items-stretch">
								<div className="info-wrap w-100 p-5 img border-primary " >
			          </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}
