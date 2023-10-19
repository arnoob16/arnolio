"use client";
import SendIcon from "@mui/icons-material/Send";
import { KeyboardEvent, useState, useEffect } from "react";

interface HybridHTMLInputEvent extends HTMLInputElement {
	target?:
		| {
				name: string | null | undefined;
				value: string | null | undefined;
		  }
		| null
		| undefined;
}

const Contact: React.FC = () => {
	const [disabled, setDisabled] = useState(false);
	const [formValues, setFormValues] = useState<{
		name: string;
		email: string;
		message: string;
	}>({
		email: "",
		message: "",
		name: "",
	});

	const verifyInputsOnKeystrokes = (
		event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const modifiedEvent = event as unknown as HybridHTMLInputEvent;
		switch (modifiedEvent?.target?.name ?? "") {
			case "email":
				return setFormValues((prev) => ({
					...prev,
					email: modifiedEvent.target?.value ?? "",
				}));
			case "fullName":
				return setFormValues((prev) => ({
					...prev,
					name: modifiedEvent.target?.value ?? "",
				}));
			case "message":
				return setFormValues((prev) => ({
					...prev,
					message: modifiedEvent.target?.value ?? "",
				}));
			default:
				return;
		}
	};

	useEffect(() => {
		setDisabled(
			!(!!formValues.email && !!formValues.message && !!formValues.name)
		);
	}, [formValues]);

	return (
		<article className="contact" data-page="contact">
			<header>
				<h2 className="h2 article-title">Contact</h2>
			</header>

			<section className="mapbox" data-mapbox>
				<figure>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117711.79652324876!2d86.09336892037416!3d22.78416551881985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e31989f0e2b5%3A0xeeec8e81ce9b344!2sJamshedpur%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1696812699062!5m2!1sen!2sin"
						width="600"
						height="450"
						loading="lazy"
					></iframe>
				</figure>
			</section>

			<section className="contact-form">
				<h3 className="h3 form-title">Contact Form</h3>

				<form
					action="https://formsubmit.co/350f5a48d02709b411a2b58c19a9a0c1"
					method="POST"
					className="form"
					data-form
				>
					<div className="input-wrapper">
						<input
							type="hidden"
							name="_subject"
							value="New email from portfolio!"
						/>

						<input type="hidden" name="_captcha" value="false" />

						<input
							type="text"
							name="fullName"
							className="form-input"
							placeholder="Full name"
							required
							data-form-input
							onKeyDown={verifyInputsOnKeystrokes}
						/>

						<input
							type="email"
							name="email"
							className="form-input"
							placeholder="Email address"
							required
							data-form-input
							onKeyDown={verifyInputsOnKeystrokes}
						/>
					</div>

					<textarea
						name="message"
						className="form-input"
						placeholder="Your Message"
						required
						data-form-input
						onKeyDown={verifyInputsOnKeystrokes}
					></textarea>

					<button
						className="form-btn"
						type="submit"
						disabled={disabled}
						data-form-btn
					>
						<SendIcon />
						<span>Send Message</span>
					</button>
				</form>
			</section>
		</article>
	);
};

export default Contact;
