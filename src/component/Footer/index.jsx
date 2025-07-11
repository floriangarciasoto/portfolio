import { usePortfolioContext } from "../../context/usePortfolioContext";
import './index.css'

const Footer = () => {
    const { state: { legal } } = usePortfolioContext();
    console.log('ok');
    console.log(legal);

    return (
        <footer>
            <div id="footer-top"></div>
            <div id="footer-inner">
                <h4>Mentions légales</h4>
                {
                    legal.map((legalLine, index) => <p key={index}>{legalLine}</p>)
                }
            </div>
        </footer>
    )
}

export default Footer
