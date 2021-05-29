import React from "react";

import htmlImg from "./SkillsImages/html.png";
import cssImg from "./SkillsImages/css.png";
import jsImg from "./SkillsImages/js.png";
import bootstrapImg from "./SkillsImages/bootstrap.png";
import reactjsImg from "./SkillsImages/reactjs.png";
import materialUIImg from "./SkillsImages/materialUI.png";
import ruby from "./SkillsImages/ruby.png";
import jquery from "./SkillsImages/jquery.png";
import mongo from "./SkillsImages/mongo.png";
import cS from "./SkillsImages/cS.png";
import cPlus from "./SkillsImages/c++.png";
import express from "./SkillsImages/express.png";

import Slide from "react-reveal/Slide";

const SkillsDisplay = () => {
	const SkillsData = [
		{
			img: htmlImg,
			alt: "html",
			height: "11rem",
		},
		{
			img: cssImg,
			alt: "css",
			height: "11rem",
			// marginLeft: "45px",
		},
		{
			img: jsImg,
			alt: "js",
			height: "10rem",
			// marginLeft: "60px",
		},
		{
			img: bootstrapImg,
			alt: "bootstrap",
			height: "13.2rem",
			// marginLeft: "40px",
		},
		{
			img: reactjsImg,
			alt: "reactjs",
			height: "8rem",
			// marginLeft: "45px",
		},
		{
			img: materialUIImg,
			alt: "materialUI",
			height: "13.2rem",
			// marginLeft: "40px",
		},
		{
			img: ruby,
			alt: "ruby",
			height: "5.2rem",
			// marginLeft: "40px",
		},
		{
			img: jquery,
			alt: "jquery",
			height: "13.2rem",
			// marginLeft: "40px",
		},
		{
			img: mongo,
			alt: "mongo",
			height: "6rem",
			// marginLeft: "40px",
		},
		{
			img: cS,
			alt: "cS",
			height: "7rem",
			// marginLeft: "40px",
		},
		{
			img: cPlus,
			alt: "cPlus",
			height: "6rem",
			// marginLeft: "40px",
		},
		{
			img: express,
			alt: "express",
			height: "10rem",
			// marginLeft: "40px",
		},
	];

	return (
		<>
			<div className="SkillsContainer bg-white">
				<div className="SC-Slider">
					<Slide bottom cascade>
						<div className="SC-Slide">
							{SkillsData.map((preImg, index) => {
								return (
									<span key={index}>
										<img
											src={preImg.img}
											alt={preImg.alt}
											style={{ height: preImg.height }}
										/>
									</span>
								);
							})}
						</div>
						<div className="SC-Slide">
							{SkillsData.map((preImg, index) => {
								return (
									<span key={index}>
										<img
											src={preImg.img}
											alt={preImg.alt}
											style={{ height: preImg.height }}
										/>
									</span>
								);
							})}
						</div>
						<div className="SC-Slide">
							{SkillsData.map((preImg, index) => {
								return (
									<span key={index}>
										<img
											src={preImg.img}
											alt={preImg.alt}
											style={{ height: preImg.height }}
										/>
									</span>
								);
							})}
						</div>
						<div className="SC-Slide">
							{SkillsData.map((preImg, index) => {
								return (
									<span key={index}>
										<img
											src={preImg.img}
											alt={preImg.alt}
											style={{ height: preImg.height }}
										/>
									</span>
								);
							})}
						</div>
					</Slide>
				</div>
			</div>
		</>
	);
};

export default SkillsDisplay;
