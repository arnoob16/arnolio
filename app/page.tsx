"use client";
import React, { useState } from "react";
import PersonalDetails from "./components/personal-details";
import Navbar from "./components/navbar";
import About from "./components/screens/about";
import Resume from "./components/screens/resume";
import Contact from "./components/screens/contact";
import Projects from "./components/screens/projects";

const Home: React.FC = () => {
	const [currentScreenIndex, setCurrentScreenIndex] = useState<number>(0);

	return (
		<main className="main">
			<PersonalDetails />
			<div className="main-content">
				<Navbar
					activeIndex={currentScreenIndex}
					setCurrentScreenIndex={setCurrentScreenIndex}
				/>
				{currentScreenIndex === 0 && <About />}
				{currentScreenIndex === 1 && <Resume />}
				{currentScreenIndex === 2 && <Projects />}
				{currentScreenIndex === 3 && <Contact />}
			</div>
		</main>
	);
};

export default Home;
