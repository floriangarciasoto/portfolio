import { createContext, useContext, useState } from "react";

const PortfolioContext = createContext();

const initialState = {
    subtitle: '',
    about: [
        '',
        ''
    ],
    buildInPublicMessage: '',
    projects: [

    ]
}

const PortfolioContextProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const [showContact, setShowContact] = useState(false);
    const [message, setMessage] = useState('');

    return <PortfolioContext.Provider value={{ state, setState, showContact, setShowContact, message, setMessage }}>{children}</PortfolioContext.Provider>
}

export const usePortfolioContext = () => useContext(PortfolioContext);
export default PortfolioContextProvider;
