import React from "react";

const IconLink = ({ href, label, Icon }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			title={label}
			aria-label={label}
			className="group" // mark the anchor as a group
		>
			<Icon className="text-3xl text-white" />
		</a>
	);
};

export default IconLink;
