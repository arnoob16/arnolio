import React from "react";

interface Props {
	when: string;
	where: string;
	what: string[];
}

const CanonEvent: React.FC<Props> = ({ what, when, where }) => {
	return (
		<li className="timeline-item">
			<h4 className="h4 timeline-item-title">{where}</h4>
			<span>{when}</span>
			{what.length > 1 ? (
				what.map((whatItem, index) => (
					<p key={index} className="timeline-text">
						- {whatItem}
					</p>
				))
			) : (
				<p className="timeline-text">{what}</p>
			)}
		</li>
	);
};

export default CanonEvent;
