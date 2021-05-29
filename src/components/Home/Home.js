import React from "react";

import video from "./video/video.mp4";
import thumbnail from "./video/thumbnail.png";

// IMPORTING REACT REVEAL
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";

const Home = () => {
	return (
		<>
			<Fade>
				<div id="About" className="HomeContainer">
					<video poster={thumbnail} autoPlay loop muted src={video} />
				</div>
			</Fade>
			<div className="AboutUS">
				<div className="text-center">
					<Fade delay={2100} right cascade>
						<h1 className="text-center">
							Hello! My name is
							<span style={{ fontWeight: 600 }}> Ikechukwu Ekedede </span>
						</h1>
					</Fade>
					<Fade duration={2000} delay={2400} right cascade>
						<h3>
							Hey! Are you looking For a Software Engineer? I have many years of
							experience and working to make your development faster, easier and
							efficient. Available 24/7 get in touch to discuss details.
						</h3>
					</Fade>
					{/* <!--===================== BLOB BUTTON START  =====================--> */}
					<a href="mailto:ikeekedede@gmail.com">
						<Flip delay={2600} duration={3200} bottom>
							<div className="buttons">
								<button className="blob-btn">
									Contact me
									<span className="blob-btn__inner">
										<span className="blob-btn__blobs">
											<span className="blob-btn__blob"></span>
											<span className="blob-btn__blob"></span>
											<span className="blob-btn__blob"></span>
											<span className="blob-btn__blob"></span>
										</span>
									</span>
								</button>
								<br />
							</div>
						</Flip>
					</a>
					{/* <!--===================== BLOB BUTTON END  =====================--> */}
				</div>
			</div>
		</>
	);
};

export default Home;
