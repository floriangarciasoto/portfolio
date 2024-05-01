import axios from 'axios'

export async function fetchData(setState) {
	try {
		const PORTFOLIO_DATA_URL = import.meta.env.VITE_PORTFOLIO_DATA_URL;
		const response = await axios.get(PORTFOLIO_DATA_URL);
		setState(response.data);
	} catch (error) {
		console.error('Erreur lors de la récupération des données:', error);
		alert('Impossible de charger les données du Portfolio ! Il risque de ne pas être très instructif. ☹️')
	}
}

export function copyToClipboard(text) {
	navigator.clipboard.writeText(text);
}
