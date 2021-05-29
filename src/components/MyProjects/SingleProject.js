import React, { useState } from "react";

// IMPORTING TILT
import Tilt from "react-tilt";

// IMPORTING PROJECT MODAL
import AlertDialogSlide from "./ProjectModal";

import Fade from "react-reveal/Fade";

const SingleProject = ({ Title, Image, Description, Url }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	return (
		<>
			<div className="col-lg-4 col-md-6 col-sm-6 mb-5 SingleProjectQ">
				<Fade left>
					<Tilt className="Tilt" options={{ max: 25, scale: 1.02 }}>
						<div className="singlePContainer">
							<img src={Image} alt="" />
							<div className="singlePContainerBody">
								<h1> {Title} </h1>
								<div className="wrapper">
									<button onClick={handleClickOpen}>
										<span>View More</span>
									</button>
								</div>
							</div>
						</div>
					</Tilt>
					<AlertDialogSlide
						PopUpImage={Image}
						PopUpTitle={Title}
						PopUpDesc={Description}
						OpenBtn={open}
						SetOpenBtn={setOpen}
						Url={Url}
					/>
				</Fade>
			</div>
		</>
	);
};

export default SingleProject;
