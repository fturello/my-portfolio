import React, { useState } from "react";

import "../styles/Contact.css";

import contact from "../assets/icons/contact.svg";

function Contact() {
	const [isContactExpanded, setIsContactExpanded] = useState(false);

	const expandContact = () => {
		setIsContactExpanded(!isContactExpanded);
	};

	return (
		<div
			className={`contact-card small-card card ${
				isContactExpanded ? "expanded contact-expanded" : ""
			}`}
			onClick={!isContactExpanded && expandContact}
		>
			<img
				src={contact}
				alt='contact me'
				className={`img ${isContactExpanded ? "contact-img" : ""}`}
			/>
			<p className={`desc ${isContactExpanded ? "expanded" : ""}`}>Contact</p>
			<a
				href='#'
				className={isContactExpanded ? "close" : ""}
				onClick={expandContact}
			></a>
			<form
				action='https://formspree.io/f/xvonkprl'
				method='POST'
				className={isContactExpanded ? "form" : "hide-content"}
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
				<input type='text' name='phone' placeholder='Phone' className='phone' />
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
	);
}

export default Contact;
