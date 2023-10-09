import SendIcon from "@mui/icons-material/Send";
const Contact: React.FC = () => {
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
					action="https://formsubmit.co/reachout.amansingh@gmail.com"
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
							name="fullname"
							className="form-input"
							placeholder="Full name"
							required
							data-form-input
						/>

						<input
							type="email"
							name="email"
							className="form-input"
							placeholder="Email address"
							required
							data-form-input
						/>
					</div>

					<textarea
						name="message"
						className="form-input"
						placeholder="Your Message"
						required
						data-form-input
					></textarea>

					<button className="form-btn" type="submit" disabled data-form-btn>
						<SendIcon />
						<span>Send Message</span>
					</button>
				</form>
			</section>
		</article>
	);
};

export default Contact;
