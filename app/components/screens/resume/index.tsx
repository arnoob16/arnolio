import { useMemo } from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
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
						"Improved the loading speed of 20 screens to under 0.5 seconds and enhanced the performance of 8 web-pages elevating Lighthouse scores to 90+ resulting in reduced load time by 40% ",
						"Enhanced monitoring functionality by introducing real - time alerting for critical APIs and page crashes within Grafana, leading to a 31% improvement in journey uptimes.",
						"Guided and provided mentorship to 2 interns across various features, facilitating the development of optimized cross-platform user experiences.",
					],
					when: "October 2023 - Present",
					where: "Bajaj Finserv Health Limited - Software Engineer - II",
				},
				{
					what: [
						"Designed a highly versatile file-upload component with customizable constraints, image compression, and image cropping, which found application in four separate user journeys within a React Native application. This component manages a daily traffic volume of over 5000 files.",
						"Implemented a budget-conscious localization solution to address a critical client requirement, enabling support for over 10 different locales across the website.",
						"Enhanced code coverage in a React Native project from 0% to 34% and elevated coverage from 42% to 60% in a Next.js project through the creation of Jest unit test cases.",
					],
					when: "July 2022 - September 2023",
					where: "Bajaj Finserv Health Limited - Software Engineer - I",
				},
				{
					what: [
						"Employed React Native and TypeScript to construct screens with impeccable designs, ensuring responsiveness, high performance, and accessibility. These screens effectively supported a daily influx of approximately 500 successful claims.",
						"Migrated the squad’s codebase to TypeScript and enhanced code quality by reducing vulnerabilities and code-smells on sonarqube to 0.",
					],
					when: "January 2022 - June 2022",
					where: "Bajaj Finserv Health Limited - Software Engineer - Intern",
				},
			],
		};
	}, []);

	const skills: Skills = useMemo(() => {
		return {
			Languages: "JavaScript, TypeScript, HTML, CSS",
			"Libraries & Frameworks":
				"ReactJS, NextJS, ReactNative, Redux, React-query",
			Technologies:
				"Git, Github, Azure Devops, VS Code, Chrome Devtools, Android Studio, XCode",
			"Familiar with":
				"Python & Flask, Node & ExpressJS, Web Scraping, API Development, Java",
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
