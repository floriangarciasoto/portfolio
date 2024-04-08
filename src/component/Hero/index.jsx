import { usePortfolioContext } from "../../context/usePortfolioContext";

const Hero = () => {
	const {setShowContact} = usePortfolioContext();

	const handleClickContact = () => {
		setShowContact(true);
	}

    return (
		<div className="hero">
			<img src="/img/blank-pp.webp" className="hero-pp" alt="Photo de profil"/>
			<div className="hero-infos">
				<h1 className="hero-name">Florian GARCIA SOTO</h1>
				<h2 className="hero-subtitle">Développeur Web Full-Stack</h2>
				<h3 className="hero-hook">
                    Ayant commencé la programmation en écrivant un script de commandes Windows de plus de 2000 lignes sur Bloc-notes, je pense être un développeur web assez particulier. Etant un ex étudiant en Réseaux et Télécoms, j'ai appris la programmation Web durant ces études, avant de développer mon propre site de jeu de rôle en ligne.
                    <br/><br/>
                    Maintenant qu'il est temps de professionnaliser mon profil, je recherche actuellement une alternance pour ma formation de Développeur web full stack à la 3W Academy.
                </h3>
				<div className="cta-dv hero-cta-dv">
					<div>
						<a href="/doc/cv.pdf" rel="noreferrer" target="_blank"><button>Voir mon CV</button></a>
						<button onClick={handleClickContact}>Me concacter</button>
					</div>
					<div>
						<a href="https://www.linkedin.com/in/florian-garcia-soto/" rel="noreferrer" target="_blank" title="Voir mon profil LinkedIn">
							<img src="/icon/dark/LinkedIn_icon.svg"/>
						</a>
						<a href="https://github.com/floriangarciasoto" rel="noreferrer" target="_blank" title="Voir mon compte GitHub">
							<img src="/icon/light/github-mark.svg"/>
						</a>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Hero
