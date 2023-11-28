import Image from "next/image";
import React from "react";

interface Props {
	source: string;
	projectTitle: string;
	redirectionUrl: string;
}

const ProjectCard: React.FC<Props> = ({
	source,
	projectTitle,
	redirectionUrl,
}) => {
	return (
		<li className="project-item">
			<a href={redirectionUrl}>
				<figure className="project-img">
					<Image
						src={source}
						alt={`Snapshot of ${projectTitle}`}
						width={1920}
						height={1080}
					/>
				</figure>
				<h3 className="project-title">{projectTitle}</h3>
			</a>
		</li>
	);
};

export default ProjectCard;
