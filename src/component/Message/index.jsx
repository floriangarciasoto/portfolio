import { useEffect, useRef } from "react";
import { usePortfolioContext } from "../../context/usePortfolioContext"
import './index.css'

const Message = () => {
	const { message, setMessage } = usePortfolioContext();
	const timeoutID = useRef(null);

	useEffect(() => {
		// Reset message opacity animation
		var messageNode = document.getElementById('message');
		messageNode.style.animation = 'none';
		messageNode.offsetHeight;
		messageNode.style.animation = null;

		// Reset message bar animation
		var messageBarNode = document.getElementById('message-bar');
		messageBarNode.style.animation = 'none';
		messageBarNode.offsetHeight;
		messageBarNode.style.animation = null;

		clearTimeout(timeoutID.current);
		timeoutID.current = setTimeout(() => {
			setMessage('');
		}, 5000);
	}, [message]);

	return (
		<div id="message-dv">
			<div id="message">
				<div id="message-text">{message}</div>
				<div id="message-bar"></div>
			</div>
		</div>
	)
}

export default Message
