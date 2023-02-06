import React, { useState, useRef, useLayoutEffect } from "react";

import "./styles/App.css";

import about from "./assets/icons/about.svg";
import download from "./assets/icons/download.svg";
import projects from "./assets/icons/projects.png";
import contact from "./assets/icons/contact.svg";
import skills from "./assets/icons/skills.svg";

import react from "./assets/skills/react.svg";
import sql from "./assets/skills/sql.png";
import back from "./assets/skills/back.svg";
import git from "./assets/skills/workflow.svg";
import js from "./assets/skills/js.svg";
import html from "./assets/skills/html.svg";
import css from "./assets/skills/css.svg";
import bootstrap from "./assets/skills/bootstrap.svg";

import github from "./assets/github.png";
import dyschronicles from "./assets/dyschronicles.png";
import galaxyGetaways from "./assets/galaxy_getaways.png";
import stickApp from "./assets/stickapp.png";

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

	const cardRef = useRef(null);

	useLayoutEffect(() => {
		isProjectsDisplayed
			? (cardRef.current.style.height = "100%")
			: (cardRef.current.style.height = "auto");
	}, [isProjectsExpanded]);

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
					className={`img ${isAboutExpanded ? "about-img" : ""}`}
				/>
				<p className={`about desc ${isAboutExpanded ? "expanded" : ""}`}>
					About me
				</p>
				<a href='#' className={isAboutExpanded ? "close" : ""}></a>
				<p
					className={isAboutDisplayed ? "text-displayed" : "hide-content"}
					onClick={(e) => e.stopPropagation()}
				>
					Passionné d'informatique et de nouvelles technologies depuis toujours,
					j'ai entamé en novembre 2022 une reconversion dans le développement
					Web et Web Mobile full-stack. <br /> Adepte du code propre, du
					principe DRY et très intéressé par les problématiques de performances,
					je suis toujours à la recherche de nouvelles ressources et
					optimisations dans le code. <br /> Je suis actuellement à la recherche
					d'un stage dans le secteur du développement Web/Web-mobile.
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
					ref={cardRef}
					className={`project-container ${
						isProjectsExpanded ? "expanded" : ""
					}`}
				>
					<div
						className={`${
							isProjectsDisplayed ? "project-card" : "hide-content"
						}`}
						onClick={(e) => e.stopPropagation()}
					>
						<img
							src={dyschronicles}
							alt='ice'
							className='project-img'
							onClick={() =>
								window.open(
									"https://github.com/fturello/Code-Chronicles",
									"_blank"
								)
							}
						/>
						<div className='project-content'>
							<h1 className='project-title'>Dyschronicles</h1>
							<p className='project-desc'>
								(fevrier 2023) <br />
								React, SQL
								<br />
								<br />
								Site web réalisé lors d'un hackathon d'une durée de deux jours
								ayant pour thème le voyage temporel. <br />
								<br />
								Le principe du site étant de pouvoir choisir une époque et
								d'avoir un aperçu de comment cela aurait pu donner
							</p>
							<img
								src={github}
								alt='github'
								className='github'
								onClick={() =>
									window.open(
										"https://github.com/fturello/Code-Chronicles",
										"_blank"
									)
								}
							/>
						</div>
					</div>
					<div
						className={`${
							isProjectsDisplayed ? "project-card" : "hide-content"
						}`}
						onClick={(e) => e.stopPropagation()}
					>
						<img
							src={galaxyGetaways}
							alt='ice'
							className='project-img'
							onClick={() =>
								window.open(
									"https://orbital-code.remote-qbis.wilders.dev/",
									"_blank"
								)
							}
						/>
						<div className='project-content'>
							<h1 className='project-title'>Galaxy Getaways</h1>
							<p className='project-desc'>
								(janvier-fevrier 2023) <br />
								React, SQL
								<br />
								<br />
								Site web d'une agence fictive de voyages spatiaux
							</p>
							<img
								src={github}
								alt='github'
								className='github'
								onClick={() =>
									window.open(
										"https://github.com/fturello/Galaxy-Getaways",
										"_blank"
									)
								}
							/>
						</div>
					</div>
					<div
						className={`${
							isProjectsDisplayed ? "project-card" : "hide-content"
						}`}
						onClick={(e) => e.stopPropagation()}
					>
						<img src={stickApp} alt='ice' className='project-img' />
						<div className='project-content'>
							<h1 className='project-title'>StickApp</h1>
							<p className='project-desc'>
								(decembre-janvier 2022) <br />
								React Native, MongoDB
								<br />
								<br />
								Application proposant aux utilisateurs des récompenses en
								cashback pour l'utilisation de stickers de marques
							</p>
							<img
								src={github}
								alt='github'
								className='github'
								onClick={() =>
									window.open(
										"https://github.com/Slim2680/stickapp_backend",
										"_blank"
									)
								}
							/>
						</div>
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
					action='https://formspree.io/f/xvonkprl'
					method='POST'
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
						type='email'
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
					<textarea
						type='text'
						name='message'
						placeholder='Message'
						className='message'
					/>
					<button type='submit' className='btn-send'>
						Submit
					</button>
				</form>
			</div>
			<div
				className={`skills-card big-card card ${
					isSkillsExpanded ? "expanded skills-expanded" : "skills-unexpanded"
				}`}
				onClick={expandSkills}
			>
				<img
					src={skills}
					alt='my skills'
					className={isSkillsExpanded ? "hide-content" : ""}
				/>
				<p className={isSkillsExpanded ? "hide-content" : "desc"}>Skills</p>
				<a href='#' class={isSkillsExpanded ? "close" : ""}></a>
				<div
					className={isSkillsExpanded ? "skills-img" : "hide-content"}
					onClick={(e) => e.stopPropagation()}
				>
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
					{/* <p className='more'>... and more !</p> */}
				</div>
			</div>
		</div>
	);
}

export default App;
