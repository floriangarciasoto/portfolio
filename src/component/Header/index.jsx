import { useState } from "react"

const Header = () => {
	const [showNav, setShowNav] = useState(false);
	const [leavingNav, setLeavingNav] = useState(false);

	const hideNav = () => {
		setLeavingNav(true);
		setTimeout(() => {
			setLeavingNav(false);
			setShowNav(false);
		}, 490);
	}

	const handleShowClick = () => {
		if (showNav) hideNav();
		else setShowNav(true);
	}

	const handleHideClick = () => {
		hideNav();
	}

    return (
        <header>
			<a href=".">
                <img className="logo" src="/icon/dark/fgs-logo.svg" alt="Logo"/>
            </a>
			<nav className={(showNav ? 'show-nav' : '')+(leavingNav ? ' nav-leaving' : '')}>
				<ul>
					<a onClick={handleHideClick} href="#about">À propos</a>
					<a onClick={handleHideClick} href="#hobbies">Loisirs</a>
					<a onClick={handleHideClick} href="#training">Formation</a>
					<a onClick={handleHideClick} href="#projects">Projets</a>
				</ul>
			</nav>
 			<img className="burger" src="/icon/light/burger-menu-svgrepo-com.svg" alt="Menu burger" onClick={handleShowClick}/>
        </header>
    )
}

export default Header
