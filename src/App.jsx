import React, { useState } from "react";

import "./styles/App.css";

import about from "./assets/icons/about.svg";
import download from "./assets/icons/download.svg";
import projects from "./assets/icons/projects.svg";
import contact from "./assets/icons/contact.svg";
import skills from "./assets/icons/skills.svg";

import react from "./assets/skills/react.svg";
import sql from "./assets/skills/sql.svg";
import back from "./assets/skills/back.svg";
import git from "./assets/skills/workflow.svg";
import js from "./assets/skills/js.svg";
import html from "./assets/skills/html.svg";
import css from "./assets/skills/css.svg";
import bootstrap from "./assets/skills/bootstrap.svg";

import ice from "./assets/ice.jpg";

function App() {
	const [downloadUrl, setDownloadUrl] = useState(null);
	const [isAboutExpanded, setIsAboutExpanded] = useState(false);
	const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);
	const [isContactExpanded, setIsContactExpanded] = useState(false);
	const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);
	const [isAboutDisplayed, setIsAboutDisplayed] = useState(false);
	const [isProjectsDisplayed, setIsProjectsDisplayed] = useState(false);

	const downloadFile = () => {
		const url = "/CV_FRANCESCO_TURELLO.pdf";
		setDownloadUrl(url);
	};

	const expandAbout = () => {
		setIsAboutExpanded(!isAboutExpanded);
		setIsAboutDisplayed(!isAboutDisplayed);
	};

	const expandProjects = () => {
		setIsProjectsExpanded(!isProjectsExpanded);
		setIsProjectsDisplayed(!isProjectsDisplayed);
	};

	const expandContact = () => {
		setIsContactExpanded(!isContactExpanded);
	};

	const expandSkills = () => {
		setIsSkillsExpanded(!isSkillsExpanded);
	};

	return (
		<div className='container'>
			<div className='title-card big-card card'>
				<p className='name'>Francesco Turello</p>
				<p className='activity desc'>&lt;in development /&gt;</p>
			</div>
			<div
				className={`about-card small-card card ${
					isAboutExpanded ? "expanded" : ""
				}`}
				onClick={expandAbout}
			>
				<img
					src={about}
					alt='about me'
					className={`img ${isAboutExpanded ? "expanded" : ""}`}
				/>
				<p className={`about desc ${isAboutExpanded ? "expanded" : ""}`}>
					About me
				</p>
				<a href='#' class={isAboutExpanded ? "close" : ""}></a>
				<p className={isAboutDisplayed ? "text-displayed" : "hide-content"}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
					ultricies lacus sed turpis tincidunt id aliquet risus feugiat. Turpis
					in eu mi bibendum neque. Praesent tristique magna sit amet purus
					gravida quis. Et magnis dis parturient montes. Elementum eu facilisis
					sed odio morbi quis. Nulla aliquet porttitor lacus luctus accumsan
					tortor posuere. Nisl stincidunt eget nullam non nisi est. Aliquam
					etiam erat velit scelerisque. Amet volutpat consequat mauris nunc
					congue nisi. At tempor commodo ullamcorper a lacus vestibulum sed arcu
					non. Amet mauris commodo quis imperdiet massa tincidunt. Pellentesque
					habitant a morbi tristique.
				</p>
			</div>
			<div>
				<a
					href={downloadUrl}
					target='_blank'
					onClick={downloadFile}
					className='card cv-card small-card'
				>
					<img src={download} alt='download cv' />
					<span className='cv desc'>Download CV</span>
				</a>
			</div>
			<div
				className={`projects-card small-card card ${
					isProjectsExpanded ? "expanded projects-expanded" : ""
				}`}
				onClick={expandProjects}
			>
				<img
					src={projects}
					alt='my projects'
					className={`img ${isProjectsExpanded ? "hide-content" : ""}`}
				/>
				<p className={`desc ${isProjectsExpanded ? "expanded" : ""}`}>
					Projects
				</p>
				<a href='#' class={isProjectsExpanded ? "close" : ""}></a>
				<div
					className={`project-small-cards ${
						isProjectsExpanded ? "expanded" : ""
					}`}
				>
					<div
						className={`${
							isProjectsDisplayed ? "project-card" : "hide-content"
						}`}
					>
						<img src={ice} alt='ice' className='project-img' />
						<p className='project-desc'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
							ultricies lacus sed turpis tincidunt id aliquet risus feugiat.
							Turpis in eu mi bibendum neque. Praesent tristique magna sit amet
							purus gravida quis. Et magnis dis parturient montes. Elementum eu
							facilisis sed odio morbi quis. Nulla aliquet porttitor lacus
							luctus accumsan tortor posuere. Nisl stincidunt eget nullam non
							nisi est. Aliquam etiam erat velit scelerisque. Amet de volutpat
							consequat mauris nunc congue nisi. At tempor commodo ullamcorper a
							lacus vestibulum sed arcu non. Amet mauris commodo quis imperdiet
							massa tincidunt. Pellentesque habitant a morbi tristique.
							Elementum eu facilisis sed odio morbi quis.
						</p>
					</div>
				</div>
			</div>

			<div
				className={`contact-card small-card card ${
					isContactExpanded ? "expanded contact-expanded" : ""
				}`}
				onClick={expandContact}
			>
				<img
					src={contact}
					alt='contact me'
					className={`img ${isContactExpanded ? "contact-img" : ""}`}
				/>
				<p className={`desc ${isContactExpanded ? "expanded" : ""}`}>Contact</p>
				<a href='#' class={isContactExpanded ? "close" : ""}></a>
				<form
					className={isContactExpanded ? "form" : "hide-content"}
					onClick={(e) => e.stopPropagation()}
				>
					<input
						type='text'
						name='first-name'
						placeholder='First name'
						className='first-name'
					/>
					<input
						type='text'
						name='last-name'
						placeholder='Last name'
						className='last-name'
					/>
					<input
						type='text'
						name='email'
						placeholder='Email'
						className='email'
					/>
					<input
						type='text'
						name='phone'
						placeholder='Phone'
						className='phone'
					/>
					<input
						type='text'
						name='message'
						placeholder='Message'
						className='message'
					/>
					{/* <input type='submit' value='Submit' /> */}
				</form>
			</div>
			<div
				className={`skills-card big-card card ${
					isSkillsExpanded ? "expanded skills-expanded" : ""
				}`}
				onClick={expandSkills}
			>
				{/* <img src={skills} alt='my skills' /> */}
				{/* <p className='desc'>Skills</p> */}
				<a href='#' class={isSkillsExpanded ? "close" : ""}></a>
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
		</div>
	);
}

export default App;
