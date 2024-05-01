import { useState, useEffect } from "react";
import { usePortfolioContext } from "../../context/usePortfolioContext";
import './index.css'

const Hero = () => {
	const { state, setShowContact } = usePortfolioContext();
	const [showArrow, setShowArrow] = useState(false);
	const [leaveArrow, setLeaveArrow] = useState(false);
	let firstScrollDone = false;

	const handleClickContact = () => {
		setShowContact(true);
	}

	const handleFirstScroll = () => {
		firstScrollDone = true;
		setLeaveArrow(true);
		setTimeout(() => { setShowArrow(false) }, 500);
		window.removeEventListener('scroll', handleFirstScroll);
	}

	useEffect(() => {
		setTimeout(() => {
			if (!firstScrollDone) setShowArrow(true);
		}, 5000);
		window.addEventListener('scroll', handleFirstScroll);
	}, [])

	return (
		<section id="hero" className="d-flex flex-column align-items-center justify-content-between">
			<div className="d-flex flex-column align-items-center justify-content-center">
				<div id="about" className="d-flex flex-column align-items-center justify-content-center">
					<img id="pp" src="/img/blank-pp.webp" alt="Photo de profil" />
					<div id="about-infos">
						<h1 id="about-name"><span className="first-letter">F</span>lorian <span className="first-letter">G</span>arcia <span className="first-letter">S</span>oto</h1>
						<h2 id="about-subtitle">{state.subtitle}</h2>
						{
							state.about.map((paragraph, index) => <p key={index} className="about-hook">{paragraph}</p>)
						}
						<div id="about-cta" className="d-flex flex-wrap justify-content-center align-items-center">
							<a href="/doc/cv.pdf" rel="noreferrer" target="_blank"><button id="about-cv-btn">Voir mon CV</button></a>
							<button onClick={handleClickContact}>Me contacter</button>
							<div id="about-cta-icons" className="d-flex">
								<a className="element-hover" href="https://www.linkedin.com/in/florian-garcia-soto/" rel="noreferrer" target="_blank" title="Voir mon profil LinkedIn">
									<img src="/icon/blue/LinkedIn_icon.svg" />
									<img src="/icon/white/LinkedIn_icon.svg" />
								</a>
								<a className="element-hover" href="https://github.com/floriangarciasoto/" rel="noreferrer" target="_blank" title="Voir mon compte GitHub">
									<img src="/icon/blue/github-icon-2.svg" />
									<img src="/icon/white/github-icon-2.svg" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="info">
					<p dangerouslySetInnerHTML={{ __html: state.buildInPublicMessage }}></p>
					<img src="/icon/blue/info-svgrepo-com.svg" />
				</div>
			</div>
			<div>
				<img id="hero-arrow" src="/img/arrow-down-1.gif" className={(showArrow ? 'show' : '') + ' ' + (leaveArrow ? 'leave' : '')} />
			</div>
		</section>
	)
}

export default Hero
