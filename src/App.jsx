import BgVideo from './component/BgVideo'
import Contact from './component/Contact'
import Header from './component/Header'
import Hero from './component/Hero'
import Hobbies from './component/Hobbies'
import Message from './component/Message'
import Projects from './component/Projects'
import Training from './component/Training'
import { usePortfolioContext } from './context/usePortfolioContext'

function App() {
  const {showContact, message} = usePortfolioContext();

  return (
    <>
      <BgVideo />
      <Header />
      <Hero />
      <Projects />
      <Training />
      <Hobbies />
      {
        showContact && <Contact />
      }
      {
        message !== '' && <Message />
      }
    </>
  )
}

export default App
