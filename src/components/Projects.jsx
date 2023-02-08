import React, { useState, useRef, useLayoutEffect } from "react";

import "../styles/Projects.css";

import projects from "../assets/icons/projects.png";

import github from "../assets/github.png";
import dyschronicles from "../assets/dyschronicles.png";
import galaxyGetaways from "../assets/galaxy_getaways.png";
import stickApp from "../assets/stickapp.png";

function Projects() {
	const [isProjectsExpanded, setIsProjectsExpanded] = useState(false);

	const expandProjects = () => {
		setIsProjectsExpanded(!isProjectsExpanded);
	};

	const projectRef = useRef(null);

	useLayoutEffect(() => {
		isProjectsExpanded
			? (projectRef.current.style.height = "100%")
			: (projectRef.current.style.height = "auto");
	}, [isProjectsExpanded]);

	return (
		<div
			className={`projects-card small-card card ${
				isProjectsExpanded ? "expanded projects-expanded" : ""
			}`}
			onClick={!isProjectsExpanded && expandProjects}
		>
			<img
				src={projects}
				alt='my projects'
				className={`img ${isProjectsExpanded ? "hide-content" : ""}`}
			/>
			<p className={`desc ${isProjectsExpanded ? "expanded" : ""}`}>Projects</p>
			<a
				href='#'
				className={isProjectsExpanded ? "close" : ""}
				onClick={expandProjects}
			></a>
			<div
				ref={projectRef}
				className={`project-container ${isProjectsExpanded ? "expanded" : ""}`}
			>
				<div
					className={`${isProjectsExpanded ? "project-card" : "hide-content"}`}
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
							Le principe du site étant de pouvoir choisir une époque et d'avoir
							un aperçu de comment cela aurait pu donner
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
					className={`${isProjectsExpanded ? "project-card" : "hide-content"}`}
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
					className={`${isProjectsExpanded ? "project-card" : "hide-content"}`}
				>
					<img
						src={stickApp}
						alt='ice'
						className='project-img'
						onClick={() =>
							window.open(
								"https://res.cloudinary.com/dy4mctfzt/video/upload/v1675722676/StickApp_va1tni.mp4",
								"_blank"
							)
						}
					/>
					<div className='project-content'>
						<h1 className='project-title'>StickApp</h1>
						<p className='project-desc'>
							(decembre-janvier 2022) <br />
							React Native, MongoDB
							<br />
							<br />
							Application proposant aux utilisateurs des récompenses en cashback
							pour l'utilisation de stickers de marques
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
	);
}

export default Projects;
