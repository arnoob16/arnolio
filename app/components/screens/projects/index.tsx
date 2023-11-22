import React from "react";
import ProjectCard from "./components/project-card";

type Project = {
	redirectionUrl: string;
	projectTitle: string;
};

const Projects = () => {
	const projects: Project[] = [
		{
			projectTitle: "Memeories",
			redirectionUrl: "https://github.com/arnoob16/Memeories",
		},
		{
			projectTitle: "Unofficial GFG Api",
			redirectionUrl: "https://github.com/arnoob16/GeeksForGeeksAPI",
		},
		{
			projectTitle: "CP Api",
			redirectionUrl: "https://github.com/arnoob16/cpAPI",
		},
		{ projectTitle: "Strapi driven Portfolio", redirectionUrl: "#" },
		{
			projectTitle: "Aapka Apna Doctor",
			redirectionUrl: "https://github.com/zyberg2091/Aapka-Apna-Hiphop",
		},
		{
			projectTitle: "CoviDapp",
			redirectionUrl: "https://github.com/sukesh2000/coviDapp",
		},
	];

	return (
		<article className="portfolio">
			<header>
				<h2 className="h2 article-title">Projects</h2>
			</header>

			<section className="projects">
				<ul className="project-list">
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							projectTitle={project.projectTitle}
							redirectionUrl={project.redirectionUrl}
							source={`/project${index}.png`}
						/>
					))}
				</ul>
			</section>
		</article>
	);
};

export default Projects;
