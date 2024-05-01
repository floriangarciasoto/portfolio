import BgVideo from './component/BgVideo'
import Header from './component/Header'
import Hero from './component/Hero'
import Projects from './component/Projects'
// import Training from './component/Training'
// import Hobbies from './component/Hobbies'
import Contact from './component/Contact'
import Message from './component/Message'
import Footer from './component/Footer'
import { usePortfolioContext } from './context/usePortfolioContext'
import { useEffect } from 'react'
import { fetchData } from './utils'

function App() {
	const { setState, showContact, message } = usePortfolioContext();

	useEffect(() => {
		fetchData(setState);
	}, [])

	return (
		<>
			<BgVideo />
			<Header />
			<Hero />
			<Projects />
			{/* <Training /> */}
			{/* <Hobbies /> */}
			{
				showContact && <Contact />
			}
			{
				message !== '' && <Message />
			}
			<Footer />
		</>
	)
}

export default App
