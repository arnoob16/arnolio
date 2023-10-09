const Resume: React.FC = () => {
	return (
		<article className="resume" data-page="resume">
			<header>
				<h2 className="h2 article-title">Resume</h2>
			</header>

			<div className="resume-btn">
				<a
					className="resume-link"
					href="/Arnab's_resume.pdf"
					download="Arnab's Resume"
				>
					Download Resume
				</a>
			</div>
			<section className="iframe-wrapper">
				<embed src="/Arnab's_Resume.pdf" />
				<iframe
					src="/Arnab's_Resume.pdf"
					frameBorder="0"
					className="iframe-resume"
				></iframe>
			</section>
		</article>
	);
};

export default Resume;
