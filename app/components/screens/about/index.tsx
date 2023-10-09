/* eslint-disable @next/next/no-img-element */

const About: React.FC = () => {
	return (
		<article className="about" data-page="about">
			<header>
				<h2 className="h2 article-title">About me</h2>
			</header>

			<section className="about-text">
				<p>
					I&apos;m a Software Engineer based in Jamshedpur, India. I&apos;ll fix
					your problems React-ing with NextJs, ReactNative & Typescript.
				</p>

				<p>
					Craftsmanship in production-quality projects, delivering immersive
					customer experiences. Ready to bring your ideas to life and boost your
					web and mobile app game. Let&apos;s build brilliance together! 🚀
				</p>
			</section>

			<section className="service">
				<h3 className="h3 service-title">How can I help?</h3>

				<ul className="service-list">
					<li className="service-item">
						<div className="service-icon-box">
							<img
								className="serviceIcon"
								src="/web-design.svg"
								alt="Web development icon"
								width="40"
							/>
						</div>

						<div className="service-content-box">
							<h4 className="h4 service-item-title">Responsive Web design</h4>

							<p className="service-item-text">
								Let&apos;s create a website that&apos;s as flexible as your
								needs, for your success online.
							</p>
						</div>
					</li>

					<li className="service-item">
						<div className="service-icon-box">
							<img
								className="serviceIcon"
								src="/web-dev.svg"
								alt="Web development icon"
								width="40"
							/>
						</div>

						<div className="service-content-box">
							<h4 className="h4 service-item-title">Web development</h4>
							<p className="service-item-text">
								Let&apos;s build scalable web apps together for your
								business&apos;s growth and success.
							</p>
						</div>
					</li>

					<li className="service-item">
						<div className="service-icon-box">
							<img
								className="serviceIcon"
								src="/app-dev.svg"
								alt="Web development icon"
								width="40"
							/>
						</div>

						<div className="service-content-box">
							<h4 className="h4 service-item-title">App Development</h4>

							<p className="service-item-text">
								Let&apos;s create seamless cross-platform mobile solutions for
								you.
							</p>
						</div>
					</li>
				</ul>
			</section>
		</article>
	);
};

export default About;
