import React, { useState } from "react";

import "../styles/Card.css";

function Card({ children, isCardExpanded, setIsCardExpanded }) {
	return (
		<div
			className={`big-card card ${isCardExpanded ? "expanded" : ""}`}
			onClick={() => setIsCardExpanded(true)}
		>
			{children}
			<a
				href='#'
				className={isCardExpanded ? "close" : ""}
				onClick={() => setIsCardExpanded(false)}
			></a>
		</div>
	);
}

export default Card;
