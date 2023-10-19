"use cleint";
import { useRef, useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

const Resume: React.FC = () => {
	pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

	const [resumeUrl] = useState<string>(`/Arnab's_Resume.pdf`);
	const resumeContainerRef = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState<number>(
		resumeContainerRef.current?.offsetWidth ?? 250
	);

	const updateWidth = () =>
		setWidth(resumeContainerRef.current?.offsetWidth ?? 250);

	useEffect(() => {
		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	return (
		<article className="resume" data-page="resume">
			<header>
				<h2 className="h2 article-title">Resume</h2>
			</header>

			<div className="resume-btn">
				<a className="resume-link" href={resumeUrl} download="Arnab's Resume">
					Download Resume
				</a>
			</div>
			<section
				id="resumeContainer"
				ref={resumeContainerRef}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Document file={resumeUrl}>
					<Page pageNumber={1} scale={1} width={width} />
				</Document>
			</section>
		</article>
	);
};

export default Resume;
