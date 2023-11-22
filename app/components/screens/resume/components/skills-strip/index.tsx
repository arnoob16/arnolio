import React from "react";

interface Props {
	title: string;
	list: string;
}
const SkillStrip: React.FC<Props> = ({ title, list }) => {
	return (
		<li className="skills-item">
			<div className="title-wrapper">
				<h5 className="h5">{title} -</h5>
				<data value="80">{list}</data>
			</div>
		</li>
	);
};

export default SkillStrip;
