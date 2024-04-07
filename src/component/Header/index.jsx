const Header = () => {
    return (
        <header>
			<a href="#hero">
                <img className="logo" src="/icon/dark/fgs-logo.svg" alt="Logo" />
            </a>
			<nav>
				<ul>
					<a href="#about">À propos</a>
					<a href="#hobbies">Loisirs</a>
					<a href="#training">Formation</a>
					<a href="#projects">Projets</a>
				</ul>
			</nav>
 			<img className="burger" src="/icon/light/burger-menu-svgrepo-com.svg" alt="Menu burger"/>
        </header>
    )
}

export default Header
