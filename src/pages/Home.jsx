import React, { useState, useEffect } from 'react';

const Home = ({ onNavigate }) => {
    const [hoveredCard, setHoveredCard] = useState(null);

    //Navegación
    const goToCardDeck = () => {
        onNavigate?.('../pages/CardDeck.jsx');
        console.log('Navegando a: Ver todas las cartas');
    };

    const goToTarotSpread = () => {
        onNavigate?.('../pages/TarotSpread.jsx');
        console.log('Navegando a: Echar las cartas')
    };

    useEffect(() => {
        // Efecto de particulas en el fondo
        const createParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (Math.random() * 3 + 2)
            document.querySelector('.particles-container')?.appendChild(particle);

            setTimeout(() => {
                particle.remove();
            }, 5000);
        }

        const particleInterval = setInterval(createParticle, 300);
        return () => clearInterval(particleInterval);
    }, []);

    return (
        <div className="home-container">
            {/*Contenedor de particulas*/}
            <div className="particles-container" />

            {/*Contenido Principal*/}
            <div className="main-content">
                {/*Titulo Principal */}
                <h1 className="main-title">Elige tu Destino</h1>
                <p className="subtitle">
                    Descubre la sabiduría de las Diosas de la Ciencia a traves de lo Arcano.
                </p>

                {/*Contenedor de cartas */}
                <div className="cards-container">
                    {/*Carta 1- Explorar Mazo de Cartas */}
                    <div className="card-wrapper">
                        <div
                            className={`card ${hoveredCard === "deck" ? "flipped" : ""}`}
                            onClick={goToCardDeck}
                            onMouseEnter={() => setHoveredCard('deck')}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/*Cara Frontal */}
                            <div className="card-front">
                                <div className="card-icon">🔮</div>
                                <h3 className="card-title">Explorar Mazo</h3>
                                <div className="card-decoration" />
                            </div>
                            {/* Cara trasera */}
                            <div className="card-back">
                                <div className="card-icon-back">📚</div>
                                <h3 className="card-title">78 Cartas Únicas</h3>
                                <p className="card-text">
                                    Descubre todas las cartas del tarot
                                </p>
                                <div className="card-note">Click para explorar</div>
                            </div>
                        </div>
                    </div>
                    {/* Botón 1 */}
                    <button
                        className={`card-button ${hoveredCard === 'deck' ? 'hovered' : ''
                            }`}
                        onClick={goToCardDeck}
                        onMouseEnter={() => setHoveredCard('deck')}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        Ver Cartas
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home;