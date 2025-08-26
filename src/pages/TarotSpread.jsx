import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { getAllCards, getOneCardById } from '../services/TarotServices';
import './TarotSpread.css'
import { useTarot } from '../components/TarotContext';

const TarotSpread = () => {
    const {
        deck,
        setDeck,
        selectedCards,
        setSelectedCards,
        revealed,
        setRevealed,
        resetReading
    } =useTarot();

    //cargar mazo y mezclar
    useEffect(() => {
        const fetchDeck = async () => {
            if (deck.length === 0){
            try {
                const allCards = await getAllCards();
                const shuffled = [...allCards].sort(() => Math.random() - 0.5);
                setDeck(shuffled);
            } catch (error) {
                console.error("Error al cargar el mazo", error);
            }
        }
    }
        fetchDeck();
    }, [deck, setDeck]);

    //para seleccionar cartas del mazo en la lectura
    const handleSelectCard = async (card) => {
        if (selectedCards.length >= 3) return; //no mas de 3 cartas
        if (selectedCards.find((c) => c.id === card.id)) return; //Evitar repetir cartas
        try {
            const fullCard = await getOneCardById(card.id); //obtiene la informacion de la carta
            setSelectedCards((prev) => [...prev, fullCard]);
        } catch (error) {
            console.error("Error al obtener carta:", error);
        }
    };

    //revelado de cartas de la lectura
    const handleReveal = () => {
        if (selectedCards.length === 3) {
            setRevealed(true);
        }
    };

    

    return (
        <div className="tarot-spread">
            <h1>ECHA TUS CARTAS</h1>

            {/*Posiciones Fijas */}
            <div className="spread-positions">
                {["Past", "Present", "Future"].map((pos, index) => (
                    <div
                        key={pos}
                        className="spread-slot"
                        style={{
                            backgroundImage: `url(${'/public/images/incognito.png'})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}
                    >
                        {selectedCards[index] ? (
                            <Card cardData={selectedCards[index]} isRevealed={revealed} />
                        ) : (
                            <div className="card-placeholder">{pos}</div>
                        )}
                    </div>
                ))}
            </div>

            {/*boton de revelar */}
            <div className="reveal-button">
                <Button onClick={handleReveal} className='home-button'>Revelar Lectura</Button>
                {/*boton para reiniciar la tirada arreglar */}
                <Button onClick={resetReading} className='home-button'>Reiniciar </Button>
            </div>

                <div className="deck-title">
                    <h3>ELIGE 3 CARTAS PARA CONOCER TU ENERGIA EN LA CIENCIA</h3>
                </div>
            {/*Mazo de seleccion */}
            <div className="deck">
                {deck.map((card) => (
                    <Card
                        key={card.id}
                        cardData={card}
                        isRevealed={false}
                        isSelected={selectedCards.some((c) => c.id === card.id)}
                        onClick={() => handleSelectCard(card)} />
                ))}
            </div>


        </div>
    )
}

export default TarotSpread