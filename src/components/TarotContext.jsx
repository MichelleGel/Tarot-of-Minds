import { createContext, useContext, useState } from "react";

const TarotContext = createContext();

export const TarotProvider = ({ children }) => {
    const [deck, setDeck] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [revealed, setRevealed] = useState(false);

    const resetReading = () => {
        setSelectedCards([]);
        setRevealed(false);
        // si quieres también puedes regenerar el mazo aquí
    };

    return (
        <TarotContext.Provider
            value={{
                deck,
                setDeck,
                selectedCards,
                setSelectedCards,
                revealed,
                setRevealed,
                resetReading
            }}
        >
            {children}
        </TarotContext.Provider>
    );
};

export const useTarot = () => useContext(TarotContext);