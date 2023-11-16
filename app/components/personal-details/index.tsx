"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhonelinkRingOutlinedIcon from "@mui/icons-material/PhonelinkRingOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { ProfileDetails } from "@/app/constants";
import React, { useState } from "react";
import Image from "next/image";

const PersonalDetails: React.FC = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const handleExpandToggleClick = () => {
		setIsExpanded((prev) => !prev);
	};
	return (
		<aside className={`sidebar ${isExpanded ? "active" : ""}`} data-sidebar>
			<div className="sidebar-info">
				<figure className="avatar-box">
					<Image
						alt={`${ProfileDetails.name}'s Profile Picture`}
						src="/display-pic.jpeg"
						width={1280}
						height={1280}
						className="avatar-icon"
					/>
				</figure>

				<div className="info-content">
					<h1 className="name">{ProfileDetails.name}</h1>
					<p className="title">{ProfileDetails.designation}</p>
				</div>

				<button
					className="info_more-btn"
					data-sidebar-btn
					aria-label="Expand Personal Details"
					onClick={handleExpandToggleClick}
				>
					<span>Show Contacts</span>
					<ExpandMoreOutlinedIcon
						className={isExpanded ? "rotateExpandIcon" : ""}
					/>
				</button>
			</div>

			<div className="sidebar-info_more">
				<div className="separator"></div>

				<ul className="contacts-list">
					<li className="contact-item">
						<div className="icon-box">
							<EmailOutlinedIcon />
						</div>

						<div className="contact-info">
							<p className="contact-title">Email</p>
							<a
								href="mailto:contact.arnab16@gmail.com"
								className="contact-link"
							>
								{ProfileDetails.email}
							</a>
						</div>
					</li>

					<li className="contact-item">
						<div className="icon-box">
							<PhonelinkRingOutlinedIcon />
						</div>

						<div className="contact-info">
							<p className="contact-title">Phone</p>
							<a href="tel:+917004364281" className="contact-link">
								{ProfileDetails.mobile}
							</a>
						</div>
					</li>

					<li className="contact-item">
						<div className="icon-box">
							<LocationOnOutlinedIcon />
						</div>

						<div className="contact-info">
							<p className="contact-title">Location</p>
							<address>{ProfileDetails.location}</address>
						</div>
					</li>
				</ul>

				<div className="separator"></div>

				<ul className="social-list">
					<li className="social-item">
						<a
							href="https://github.com/arnoob16"
							target="_blank"
							className="social-link"
						>
							<GitHubIcon />
						</a>
					</li>

					<li className="social-item">
						<a
							href="https://www.linkedin.com/in/arnabdeep"
							target="_blank"
							className="social-link"
						>
							<LinkedInIcon />
						</a>
					</li>

					<li className="social-item">
						<a
							href="https://twitter.com/arnab4srk"
							target="_blank"
							className="social-link"
						>
							<TwitterIcon />
						</a>
					</li>

					<li className="social-item">
						<a
							href="https://instagram.com/async_arnab.ts"
							target="_blank"
							className="social-link"
						>
							<InstagramIcon />
						</a>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default PersonalDetails;
