import { createContext, useContext, useState } from "react";

const PortfolioContext = createContext();

const PortfolioContextProvider = ({ children }) => {
    const [showContact, setShowContact] = useState(false);
    const [message, setMessage] = useState('');

    return <PortfolioContext.Provider value={{ showContact, setShowContact, message, setMessage }}>{children}</PortfolioContext.Provider>
}

export const usePortfolioContext = () => useContext(PortfolioContext);
export default PortfolioContextProvider;
