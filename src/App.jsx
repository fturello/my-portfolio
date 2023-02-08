import React, { useState, useRef, useLayoutEffect } from "react";

import NotAvailable from "./components/NotAvailable";
import Card from "./components/Card";
import Title from "./components/Title";
import About from "./components/About";
import Download from "./components/Download";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

import "./styles/App.css";

import blob1 from "./assets/blobs/blob1.svg";
import blob2 from "./assets/blobs/blob2.svg";
import blob3 from "./assets/blobs/blob3.svg";
import blob4 from "./assets/blobs/blob4.svg";

function App() {
	const [isToggled, setIsToggled] = useState(false);
	const [isCardExpanded, setIsCardExpanded] = useState(false);

	const onPressToggle = () => {
		setIsToggled(!isToggled);
	};

	const onPressContainer = (e) => {
		// console.log(e.target);
		if (e.target !== e.currentTarget) {
			return;
		}
		// setIsTitleExpanded(false);
		// setIsAboutExpanded(false);
		// setIsProjectsExpanded(false);
		// setIsContactExpanded(false);
		// setIsSkillsExpanded(false);
	};

	return (
		<div className='wrapper' onClick={(e) => onPressContainer(e)}>
			{isToggled && (
				<div className='background'>
					<img src={blob1} className='blob1 blob' />
					<img src={blob2} className='blob2 blob' />
					<img src={blob3} className='blob3 blob' />
					<img src={blob4} className='blob4 blob' />
				</div>
			)}
			<div className='container'>
				<NotAvailable />
				<label className='switch'>
					<input type='checkbox' className='toggle' onClick={onPressToggle} />
					<span className='slider'></span>
				</label>
				<Card>
					<Title />
				</Card>
				<Card
					isCardExpanded={isCardExpanded}
					setIsCardExpanded={setIsCardExpanded}
				>
					<About isCardExpanded={isCardExpanded} />
				</Card>
				<Card>
					<Download />
				</Card>
				<Card>
					<Projects />
				</Card>
				<Card>
					<Contact />
				</Card>
				<Card>
					<Skills />
				</Card>
			</div>
		</div>
	);
}

export default App;
