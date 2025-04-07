import { useMemo } from "react";
import Timeline from "./partials/timeline";
import SkillStrip from "./components/skills-strip";

type TimelineData = {
	what: string[];
	when: string;
	where: string;
};

type Timelines = {
	[timelineTitle: string]: TimelineData[];
};

type Skills = {
	[skillGroup: string]: string;
};

const Resume: React.FC = () => {
	const timelines: Timelines = useMemo(() => {
		return {
			Education: [
				{
					what: ["B. Tech ( Computer Science and Engineering )"],
					when: "2018 - 2022",
					where: "SRM Institute of Science & Technology, Chennai",
				},
				{
					what: ["Schooling ( Xth & XIIth )"],
					when: "2004-2018",
					where: "DBMS English School, Jamshedpur",
				},
			],
			Experience: [
				{
					what: [
						"Developed and optimized reusable file-upload components with customizable constraints, image compression, and cropping, streamlining the management of over 8,000 health files daily.",
						"Engineered a cost-efficient localization solution, enabling support for over 10 locales on the website.",
						"Implemented manual cache-busting in a react app, ensuring users always received the latest updates and improving overall user experience.",
						"Optimized application efficiency by reducing API calls by 50% through React Query’s stale time configuration, decreasing backend resource usage and eliminating redundant requests.",
						"Improved monitoring and reliability by integrating ELK, Google Analytics, and Microsoft Clarity, while introducing real-time alerting for critical APIs and page crashes in Grafana, resulting in a 40% reduction in page crashes and achieving 99% overall uptime.",
						"Actively mentored junior developers fostering growth and ensuring code quality through peer reviews."
					],
					when: "July 2022 - Present",
					where: "Bajaj Finserv Health Limited - Software Engineer - II",
				},
				{
					what: [
						"Implemented SonarQube Pipeline to transform code quality, slashing code smells by 50% and reducing duplications from 25% to 2%.",
						"Enhanced application performance by decreasing screen load times to under 0.5 seconds across 25 screens, delivering a more seamless user experience.",
						"Enhanced application security by replacing base64 encoding with multipart file upload."
					],
					when: "January 2022 - June 2022",
					where: "Bajaj Finserv Health Limited - Software Engineer - Intern",
				},
			],
		};
	}, []);

	const skills: Skills = useMemo(() => {
		return {
			Languages: "JavaScript, Typescript, HTML, CSS",
			"Libraries & Frameworks":
				"ReactJS, NextJS, ReactNative, Redux, React-query, Tailwind, Material-UI",
			Technologies:
				"Git, Github, Azure Devops, VS Code, Chrome Devtools, Android Studio, XCode",
			"Familiar with":
				"Python, Flask, Node & ExpressJS, Web Scraping, API Development, Java",
			"Developer Tools":
				"Git, VS Code, Postman, Xcode, Android Studio, Azure Devops, Elastic Search (ELK), Microsoft Clarity, Google Analytics, SonarQube"
		};
	}, []);

	const timelineTitles = Object.keys(timelines);
	const skillTitles = Object.keys(skills);
	return (
		<article className="resume" data-page="resume">
			<header>
				<h2 className="h2 article-title">Resume</h2>
			</header>

			{timelineTitles.map((timelineTitle, index) => (
				<Timeline
					key={index}
					timelineTitle={timelineTitle}
					timelineItems={timelines[timelineTitle]}
				/>
			))}

			<section className="skill">
				<h3 className="h3 skills-title">My skills</h3>

				<ul className="skills-list content-card">
					{skillTitles.map((skillTitle, index) => (
						<SkillStrip
							key={index}
							title={skillTitle}
							list={skills[skillTitle]}
						/>
					))}
				</ul>
			</section>
		</article>
	);
};

export default Resume;
