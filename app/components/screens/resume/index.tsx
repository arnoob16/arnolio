import VerifiedIcon from "@mui/icons-material/Verified";

const Resume: React.FC = () => {
	return (
		<article className="resume" data-page="resume">
			<header>
				<h2 className="h2 article-title">Resume</h2>
			</header>

			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<VerifiedIcon />
					</div>

					<h3 className="h3">Education</h3>
				</div>

				<ol className="timeline-list">
					<li className="timeline-item">
						<h4 className="h4 timeline-item-title">
							SRM Institute of Science & Technology, Chennai
						</h4>

						<span>2018 - 2022</span>

						<p className="timeline-text">
							B. Tech ( Computer Science and Engineering )
						</p>
					</li>

					<li className="timeline-item">
						<h4 className="h4 timeline-item-title">
							DBMS English School, Jamshedpur
						</h4>

						<span>2004 - 2018</span>

						<p className="timeline-text">Schooling ( Xth & XIIth )</p>
					</li>
				</ol>
			</section>

			<section className="timeline">
				<div className="title-wrapper">
					<div className="icon-box">
						<VerifiedIcon />
					</div>

					<h3 className="h3">Experience</h3>
				</div>

				<ol className="timeline-list">
					<li className="timeline-item">
						<h4 className="h4 timeline-item-title">
							Bajaj Finserv Health Limited - Software Engineer II
						</h4>
						<span>October 2023 - Present</span>

						<p className="timeline-text">
							- Improved the loading speed of 20 screens to under 0.5 seconds
							and enhanced the performance of 8 web-pages elevating Lighthouse
							scores to 90+ resulting in reduced load time by 40%.
							<br />
							- Enhanced monitoring functionality by introducing real-time
							alerting for critical APIs and page crashes within Grafana,
							leading to a 31% improvement in journey uptimes.
							<br />- Guided and provided mentorship to 2 interns across various
							features, facilitating the development of optimized cross-platform
							user experiences.
						</p>
					</li>

					<li className="timeline-item">
						<h4 className="h4 timeline-item-title">
							Bajaj Finserv Health Limited - Software Engineer I
						</h4>

						<span>July 2022 - September 2023</span>

						<p className="timeline-text">
							- Designed a highly versatile file-upload component with
							customizable constraints, image compression, and image cropping,
							which found application in four separate user journeys within a
							React Native application. This component manages a daily traffic
							volume of over 5000 files.
							<br />
							- Implemented a budget-conscious localization solution to address
							a critical client requirement, enabling support for over 10
							different locales across the website. <br />- Enhanced code
							coverage in a React Native project from 0% to 34% and elevated
							coverage from 42% to 60% in a Next.js project through the creation
							of Jest unit test cases.
						</p>
					</li>

					<li className="timeline-item">
						<h4 className="h4 timeline-item-title">
							Bajaj Finserv Health Limited - Software Engineer Intern
						</h4>

						<span>January 2022 - June 2022</span>

						<p className="timeline-text">
							- Employed React Native and TypeScript to construct screens with
							impeccable designs, ensuring responsiveness, high performance, and
							accessibility. These screens effectively supported a daily influx
							of approximately 500 successful claims. <br />- Migrated the
							squad’s codebase to TypeScript and enhanced code quality by
							reducing vulnerabilities and code-smells on sonarqube to 0.
						</p>
					</li>
				</ol>
			</section>

			<section className="skill">
				<h3 className="h3 skills-title">My skills</h3>

				<ul className="skills-list content-card">
					<li className="skills-item">
						<div className="title-wrapper">
							<h5 className="h5">Languages -</h5>
							<data value="80">JavaScript, TypeScript, HTML, CSS</data>
						</div>
					</li>

					<li className="skills-item">
						<div className="title-wrapper">
							<h5 className="h5">Libraries & Frameworks -</h5>
							<data value="80">
								ReactJS, NextJS, ReactNative, Redux, React-query
							</data>
						</div>
					</li>

					<li className="skills-item">
						<div className="title-wrapper">
							<h5 className="h5">Tools and Technologies -</h5>
							<data value="80">
								Git, Github, Azure Devops, VS Code, Chrome Devtools, Android
								Studio, XCode
							</data>
						</div>
					</li>

					<li className="skills-item">
						<div className="title-wrapper">
							<h5 className="h5">Familiar with -</h5>
							<data value="80">
								Python & Flask, Node & ExpressJS, Web Scraping, API Development,
								Java
							</data>
						</div>
					</li>
				</ul>
			</section>
		</article>
	);
};

export default Resume;
