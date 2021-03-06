import React from "react";

import htmlIMG from "../SkillsDisplay/SkillsImages/html.png";
import cssIMG from "../SkillsDisplay/SkillsImages/css.png";
import jsIMG from "../SkillsDisplay/SkillsImages/js.png";
import bootstrapIMG from "../SkillsDisplay/SkillsImages/bootstrap2.png";
import reactjsIMG from "../SkillsDisplay/SkillsImages/reactjs.png";
import materialUI from "../SkillsDisplay/SkillsImages/materialUI.png";
import jQuery from "../SkillsDisplay/SkillsImages/jquery2.png";
import Express from "../SkillsDisplay/SkillsImages/express2.png";
import nodeJs from "../SkillsDisplay/SkillsImages/node_js.svg";
import Ruby from "../SkillsDisplay/SkillsImages/ruby.png";
import Sql from "../SkillsDisplay/SkillsImages/sql.svg";

// IMPORTING SINGLE-EXP COMPONENT
import SingleExperience from "./SingleExperience";

function Experience() {
	return (
		<div id="Experience" className="ExpContainer bg-white">
			<div className="container">
				<div className="section-title">
					<h2>
						<b>Experience</b>
					</h2>
				</div>
				<div className="row justify-content-center">
					<SingleExperience
						Title="HTML"
						Img={htmlIMG}
						GradientC_1="#ff4100"
						GradientC_2="#ff9a78"
						TextColor="#ff6935"
					/>
					<SingleExperience
						Title="CSS"
						Img={cssIMG}
						GradientC_1="#008cfc"
						GradientC_2="#9bd2fe"
						TextColor="#008cfc"
					/>
					<SingleExperience
						Title="JavaScript"
						Img={jsIMG}
						GradientC_1="#fddb22"
						GradientC_2="#ffef96"
						TextColor="#fee03e"
					/>
					<SingleExperience
						Title="Bootstrap"
						Img={bootstrapIMG}
						GradientC_1="#5d329d"
						GradientC_2="#c0a7e6"
						TextColor="#8a67be"
					/>
					<SingleExperience
						Title="React JS"
						Img={reactjsIMG}
						GradientC_1="#4da5bd"
						GradientC_2="#dbf7ff"
						TextColor="#c4e6f0"
					/>
					<SingleExperience
						Title="Material UI"
						Img={materialUI}
						GradientC_1="#005387"
						GradientC_2="#addfff"
						TextColor="#84bee3"
					/>
					<SingleExperience
						Title="jQuery Js"
						Img={jQuery}
						GradientC_1="#0f3551"
						GradientC_2="#1e93e6"
						TextColor="#1e93e6"
					/>
					<SingleExperience
						Title="Express Js"
						Img={Express}
						GradientC_1="#fddb22"
						GradientC_2="#f2f2f2"
						TextColor="#fddb22"
					/>
					<SingleExperience
						Title="Node Js "
						Img={nodeJs}
						GradientC_1="#8cc84b"
						GradientC_2="#c5ff85"
						TextColor="#c5ff85"
					/>
					<SingleExperience
						Title="Ruby "
						Img={Ruby}
						GradientC_1="#8a0707"
						GradientC_2="#ff6a6a"
						TextColor="#ff6a6a"
					/>
					<SingleExperience
						Title="PostgreSql "
						Img={Sql}
						GradientC_1="#336791"
						GradientC_2="#becfdc"
						TextColor="#becfdc"
					/>
				</div>
			</div>
		</div>
	);
}

export default Experience;
