import React from "react";

// COUNT UP PACKAGE
import Tilt from "react-tilt";

import Flip from "react-reveal/Flip";

const SingleExperience = ({ Title, Img, GradientC_1, GradientC_2 }) => {
	return (
		<div class="col-lg-3 col-md-4 col-sm-6">
			<Flip left>
				<Tilt className="Tilt" options={{ max: 25, scale: 1.03 }}>
					<div
						style={{
							background: `linear-gradient(to right, ${GradientC_1}, ${GradientC_2})`,
						}}
						className="singleExperience text-center"
					>
						<div className="innerSingleExp">
							<h1>
								{Title}&nbsp;
								<img
									style={{
										width: (Title === "Ruby " && "35%") || "",
										height: (Title === "Ruby " && "38%") || "",
									}}
									src={Img}
									alt=""
								/>
							</h1>
						</div>
					</div>
				</Tilt>
			</Flip>
		</div>
	);
};

export default SingleExperience;
