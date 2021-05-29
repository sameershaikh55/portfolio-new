import React from "react";

const Loader = () => {
	return (
		<>
			<div className="loader">
				<svg
					width="300"
					height="250"
					viewBox="0 0 818 498"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<defs>
						<linearGradient id="strokeGradient">
							<stop offset="5%" stopColor="#191919" />
							<stop offset="60%" stopColor="#0089e4" />
							<stop offset="100%" stopColor="#0a66a3" />
						</linearGradient>
					</defs>
					<path
						className="pulse"
						d="M0 305.5H266L295.5 229.5L384 496L460 1.5L502.5 377.5L553 305.5H818"
						strokeWidth="8"
					/>
				</svg>
				<span>Loading...</span>
			</div>
		</>
	);
};

export default Loader;
