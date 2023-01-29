import React, { useState } from "react";

import "./styles/App.css";

import about from "./assets/icons/about.svg";
import download from "./assets/icons/download.svg";
import projects from "./assets/icons/projects.svg";
import contact from "./assets/icons/contact.svg";
import skills from "./assets/icons/skills.svg";

function App() {
	const [downloadUrl, setDownloadUrl] = useState(null);
	const [isExpanded, setIsExpanded] = useState(false);
	const [isDisplayed, setIsDisplayed] = useState(false);

	const downloadFile = () => {
		const url = "/CV_FRANCESCO_TURELLO.pdf";
		setDownloadUrl(url);
	};

	const expandCard = () => {
		setIsExpanded(!isExpanded);
		setIsDisplayed(!isDisplayed);
	};

	return (
		<div className='container'>
			<div className='title-card big-card card'>
				<p className='name'>Francesco Turello</p>
				<p className='activity desc'>&lt;Web Developer /&gt;</p>
			</div>
			<div
				onClick={expandCard}
				className={`about-card small-card card ${isExpanded ? "expanded" : ""}`}
			>
				<img
					src={about}
					alt='about me'
					className={`img ${isExpanded ? "expanded" : ""}`}
				/>
				<p className={`about desc ${isExpanded ? "expanded" : ""}`}>About me</p>
				<p className={isDisplayed ? "displayed" : "not-displayed"}>
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
			<div className='projects-card small-card card'>
				<img src={projects} alt='my projects' />
				<p className='desc'>Projects</p>
			</div>
			<div className='contact-card small-card card'>
				<img src={contact} alt='contact me' />
				<p className='desc'>Contact</p>
			</div>
			<div className='skills-card big-card card'>
				<img src={skills} alt='my skills' />
				<p className='desc'>Skills</p>
			</div>
		</div>
	);
}

export default App;
