import { useEffect, useState } from "react"
import './index.css'

const Header = () => {
	const [showNav, setShowNav] = useState(false);
	const [leavingNav, setLeavingNav] = useState(false);
	const [showHeaderShadow, setShowHeaderShadow] = useState(false)

	const hideNav = () => {
		setLeavingNav(true);
		setTimeout(() => {
			setLeavingNav(false);
			setShowNav(false);
		}, 480);
	}

	const handleShowClick = () => {
		if (showNav) hideNav();
		else setShowNav(true);
	}

	const handleHideClick = () => {
		hideNav();
	}

	const handleNavClick = (id) => {
		document.getElementById(id).scrollIntoView({ behavior: "smooth" });
	}

	const checkScrollState = () => {
		const scrollPosition = window.scrollY;
		setShowHeaderShadow(scrollPosition > 0);
	}

	const handleLogoClick = (e) => {
		const { target: logo } = e;
		logo.classList.remove('rotate');
		void logo.offsetWidth;
		logo.classList.add('rotate');
	}

	useEffect(() => {
		checkScrollState();
		window.addEventListener('scroll', checkScrollState);
	}, [])

	return (
		<header>
			<div id="header-wrapper">
				<div id="header-shadow" className={showHeaderShadow ? 'on' : ''}></div>
				<img id="logo" src="/icon/fgs-logo-dark-theme.svg" alt="Logo" onClick={handleLogoClick} />
				<img id="burger" src="/icon/white/burger-menu-svgrepo-com.svg" alt="Menu burger" onClick={handleShowClick} />
				<nav className={(showNav ? 'show-nav' : '') + (leavingNav ? ' nav-leaving' : '')} onClick={handleHideClick}>
					<ul>
						<a href="https://www.linkedin.com/in/florian-garcia-soto/" rel="noreferrer" target="_blank" title="Voir mon profil LinkedIn">
							<img src="/icon/white/LinkedIn_icon-2.svg" />
						</a>
						<a href="https://github.com/floriangarciasoto" rel="noreferrer" target="_blank" title="Voir mon compte GitHub">
							<img src="/icon/white/github-mark.svg" />
						</a>
						<div onClick={() => handleNavClick('projects')}>Projets</div>
						{/* <div onClick={() => handleNavClick('training')}>Formation</div> */}
						{/* <div onClick={() => handleNavClick('hobbies')}>Loisirs</div> */}
						<div onClick={() => handleNavClick('hero')}>À propos</div>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
