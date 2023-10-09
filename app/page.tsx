"use client";
import React, { useState } from "react";
import PersonalDetails from "./components/personal-details";
import Navbar from "./components/navbar";
import dynamic from "next/dynamic";

const AboutDynamic = dynamic(() => import("./components/screens/about"), {
	ssr: true,
});
const ResumeDynamic = dynamic(() => import("./components/screens/resume"), {
	ssr: true,
});
const ContactDynamic = dynamic(() => import("./components/screens/contact"), {
	ssr: true,
});

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
				{currentScreenIndex === 0 && <AboutDynamic />}
				{currentScreenIndex === 1 && <ResumeDynamic />}
				{currentScreenIndex === 2 && <></>}
				{currentScreenIndex === 3 && <ContactDynamic />}
			</div>
		</main>
	);
};

export default Home;
