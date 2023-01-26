import React from "react";

import Profile from "./components/Profile";
import Download from "./components/Download";
import Code from "./components/Code";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

import "./styles/App.css";

function App() {
	return (
		<div className='wrapper'>
			<div className='background'>
				<img src='/blob1.svg' className='blob1 blob' />
				<img src='/blob2.svg' className='blob2 blob' />
				<img src='/blob3.svg' className='blob3 blob' />
				<img src='/blob4.svg' className='blob4 blob' />
			</div>
			<div className='container'>
				<div className='title-card big-card card'>
					<p className='name'>Francesco Turello</p>
					<p className='job'>&lt;Web Developer /&gt;</p>
				</div>
				<div className='about-card small-card card'>
					<Profile />
					<p className='about'>About me</p>
				</div>
				<div className='cv-card small-card card'>
					<Download />
					<p className='cv'>Download CV</p>
				</div>
				<div className='projects-card small-card card'>
					<Code />
					<p className='projects'>Projects</p>
				</div>
				<div className='contact-card small-card card'>
					<Contact />
					<p className='contact'>Contact</p>
				</div>
				<div className='skills-card big-card card'>
					<Skills />
					<p className='skills'>Skills</p>
				</div>
			</div>
		</div>
	);
}

export default App;
