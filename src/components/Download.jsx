import React, { useState } from "react";

import "../styles/Download.css";

import download from "../assets/icons/download.svg";

function Download() {
	const [downloadUrl, setDownloadUrl] = useState(null);

	const downloadFile = () => {
		const url = "/CV_FRANCESCO_TURELLO.pdf";
		setDownloadUrl(url);
	};
	return (
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
	);
}

export default Download;
