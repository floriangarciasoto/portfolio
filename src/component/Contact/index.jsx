import { useState } from "react";
import { usePortfolioContext } from "../../context/usePortfolioContext";
import { copyToClipboard } from "../../utils";
import './index.css'

const Contact = () => {
	const { setShowContact, setMessage } = usePortfolioContext();
	const [onLeaveContact, setOnLeaveContact] = useState(false);

	const handleClickOut = () => {
		setOnLeaveContact(true);
		setTimeout(() => setShowContact(false), 480);
	}

	const handleCopyPhoneNumber = () => {
		copyToClipboard('+33(0) 6 13 32 27 36');
		setMessage('Numéro copié !');
	}

	const handleCall = () => {
		window.open('tel:+33613322736');
	}

	// const handleRendezVous = () => {
	// 	window.open('https://calendly.com/equipe-3wa/prise-de-contact-entreprise-eleve?utm_content=Florian%20Garcia&utm_campaign=rectInocEnkWgtXUU&utm_source=+33613322736', '_blank');
	// }

	const handleMailCopy = () => {
		copyToClipboard('floriangarciasoto@outlook.fr');
		setMessage('Addresse mail copiée !');
	}

	const handleMailTo = () => {
		window.open('mailto:floriangarciasoto@outlook.fr');
	}

	return (
		<div id="contact-container" style={onLeaveContact ? { animation: 'onUnmountEffect 0.5s' } : {}}>
			<div id="contact-out" onClick={handleClickOut}></div>
			<div id="contact" className="box">
				<h2>Me contacter</h2>
				<div className="contact-sep">
					<div></div>
					<h3>Par téléphone</h3>
					<div></div>
				</div>
				<h4>+33(0) 6 13 32 27 36</h4>
				<div className="contact-cta">
					<div className="element-hover" title="Copier le numéro" onClick={handleCopyPhoneNumber}>
						<div className="button-icon button-icon-copy">Copier</div>
						<div className="button-icon button-icon-copy-hover button-icon-hover">Copier</div>
					</div>
					<div className="element-hover" title="M'appeler directement" onClick={handleCall}>
						<div className="button-icon button-icon-call">Appeler</div>
						<div className="button-icon button-icon-call-hover button-icon-hover">Appeler</div>
					</div>
{/* 
					<div className="element-hover" title="Prendre un rendez-vous téléphonique" onClick={handleRendezVous}>
						<div className="button-icon button-icon-calendar">RDV</div>
						<div className="button-icon button-icon-calendar-hover button-icon-hover">RDV</div>
					</div>
*/}
				</div>
				<div className="contact-sep">
					<div></div>
					<h3>Par mail</h3>
					<div></div>
				</div>
				<h4>floriangarciasoto@outlook.fr</h4>
				<div className="contact-cta">
					<div className="element-hover" title="Copier l'addresse mail" onClick={handleMailCopy}>
						<div className="button-icon button-icon-copy">Copier</div>
						<div className="button-icon button-icon-copy-hover button-icon-hover">Copier</div>
					</div>
					<div className="element-hover" title="Ouvrir votre boîte mail" onClick={handleMailTo}>
						<div className="button-icon button-icon-mail">MailTo</div>
						<div className="button-icon button-icon-mail-hover button-icon-hover">MailTo</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
