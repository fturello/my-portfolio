import React, { useState } from "react";

import "../styles/Skills.css";

import skills from "../assets/icons/skills.svg";

import react from "../assets/skills/react.svg";
import sql from "../assets/skills/sql.png";
import back from "../assets/skills/back.svg";
import git from "../assets/skills/workflow.svg";
import js from "../assets/skills/js.svg";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import bootstrap from "../assets/skills/bootstrap.svg";

function Skills() {
	const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);

	const expandSkills = () => {
		setIsSkillsExpanded(!isSkillsExpanded);
	};

	return (
		<div
			className={`skills-card big-card card ${
				isSkillsExpanded ? "expanded skills-expanded" : "skills-unexpanded"
			}`}
			onClick={!isSkillsExpanded && expandSkills}
		>
			<img
				src={skills}
				alt='my skills'
				className={isSkillsExpanded ? "hide-content" : ""}
			/>
			<p className={isSkillsExpanded ? "hide-content" : "desc"}>Skills</p>
			<a
				href='#'
				className={isSkillsExpanded ? "close" : ""}
				onClick={expandSkills}
			></a>
			<div className={isSkillsExpanded ? "skills-img" : "hide-content"}>
				<div>
					<img src={react} alt='my skills' />
					<p>
						React <br />
						React Native
					</p>
				</div>
				<div>
					<img src={sql} alt='my skills' />
					<p>
						SQL <br />
						NoSQL
					</p>
				</div>
				<div>
					<img src={back} alt='my skills' />
					<p>
						Node.js <br />
						Express.js
					</p>
				</div>
				<div>
					<img src={git} alt='my skills' />
					<p>
						Git <br />
						GitHub
					</p>
				</div>
				<div>
					<img src={js} alt='my skills' />
					<p>JavaScript</p>
				</div>
				<div>
					<img src={html} alt='my skills' />
					<p>HTML5</p>
				</div>
				<div>
					<img src={css} alt='my skills' />
					<p>CSS3</p>
				</div>
				<div>
					<img src={bootstrap} alt='my skills' />
					<p>Bootstrap</p>
				</div>
			</div>
		</div>
	);
}

export default Skills;
