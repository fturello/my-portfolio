import React, { useState } from "react";

import "../styles/About.css";

import about from "../assets/icons/about.svg";

function About({ isCardExpanded }) {
	return (
		<>
			<img
				src={about}
				alt='about me'
				className={isCardExpanded ? "about-img" : ""}
			/>
			<p className={`about desc ${isCardExpanded ? "expanded" : ""}`}>
				About me
			</p>
			<p className={isCardExpanded ? "text-displayed" : "hide-content"}>
				Passionné par l'informatique et les nouvelles technologies depuis
				toujours, j'ai entamé en novembre 2022 une reconversion dans le
				développement Web et Web Mobile full-stack. <br /> Adepte du code
				propre, du principe DRY et très intéressé par les problématiques de
				performances, je suis toujours à la recherche de nouvelles ressources et
				optimisations dans le code. <br /> Je suis actuellement à la recherche
				d'un stage dans le secteur du développement Web et Web-mobile.
			</p>
		</>
	);
}

export default About;
