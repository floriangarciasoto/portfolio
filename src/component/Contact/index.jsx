import { usePortfolioContext } from "../../context/usePortfolioContext";
import { copyToClipboard } from "../../utils";

const Contact = () => {
	const {setShowContact, setMessage} = usePortfolioContext();

	const handleClickOut = () => {
		setShowContact(false);
	}

	const handleCopyPhoneNumber = () => {
		copyToClipboard('+33(0) 6 13 32 27 36');
		setMessage('Numéro copié !');
	}

	const handleCall = () => {
		window.open('tel:+33613322736');
	}

	const handleRendezVous = () => {
		window.open('https://calendly.com/equipe-3wa/prise-de-contact-entreprise-eleve?utm_content=Florian%20Garcia&utm_campaign=rectInocEnkWgtXUU&utm_source=+33613322736', '_blank');
	}

	const handleMailCopy = () => {
		copyToClipboard('floriangarciasoto@outlook.fr');
		setMessage('Addresse mail copiée !');
	}

	const handleMailTo = () => {
		window.open('mailto:floriangarciasoto@outlook.fr');
	}

    return (
		<div className="contact-container">
			<div className="contact-out" onClick={handleClickOut}></div>
			<div className="contact box">
				<h2>Me contacter</h2>
				<div className="contact-sep">
					<div></div>
					<h3>Par téléphone</h3>
					<div></div>
				</div>
				<h4>+33(0) 6 13 32 27 36</h4>
				<div className="cta-dv-contact">
					<div className="button-icon button-icon-copy" title="Copier le numéro" onClick={handleCopyPhoneNumber}>Copier</div>
					<div className="button-icon button-icon-call" title="M'appeler directement" onClick={handleCall}>Appeler</div>
					<div className="button-icon button-icon-calendar" title="Prendre un rendez-vous téléphonique" onClick={handleRendezVous}>RDV</div>
				</div>
				<div className="contact-sep">
					<div></div>
					<h3>Par mail</h3>
					<div></div>
				</div>
				<h4>floriangarciasoto@outlook.fr</h4>
				<div className="cta-dv-contact">
					<div className="button-icon button-icon-copy" title="Copier l'addresse mail" onClick={handleMailCopy}>Copier</div>
					<div className="button-icon button-icon-mail" title="Ouvrir votre boîte mail" onClick={handleMailTo}>MailTo</div>
				</div>
			</div>
		</div>
    )
}

export default Contact
