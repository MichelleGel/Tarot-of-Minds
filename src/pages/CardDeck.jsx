import { useEffect, useState } from 'react';
import { getAllCards } from '../services/TarotServices';
import Card from '../components/Card';
import './CardDeck.css'; // Archivo CSS que crearemos

const CardDeck = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                console.log('Obteniendo cartas...');
                const data = await getAllCards();
                console.log('Datos recibidos:', data);
                setCards(data);
                setLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setError('Error al cargar las cartas');
                setLoading(false);
            }
        };

        fetchCards();
    }, []);

    if (loading) {
        return (
            <div className="deck-container">
                <div className="loading-message">
                    <h2>Cargando cartas del tarot...</h2>
                    <div className="loading-spinner"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="deck-container">
                <div className="error-message">
                    <h2>❌ {error}</h2>
                    <p>Por favor, intenta recargar la página</p>
                </div>
            </div>
        );
    }

    if (cards.length === 0) {
        return (
            <div className="deck-container">
                <div className="empty-message">
                    <h2>No hay cartas para mostrar</h2>
                    <p>El mazo está vacío</p>
                </div>
            </div>
        );
    }

    return (
        <div className="deck-container">
            <header className="deck-header">
                <h1>TAROT OF MINDS</h1>
                <p>Descubre las diosas de la ciencia detras de cada Arcano. {cards.length} cartas disponibles.</p>
            </header>
            
            <div className="cards-grid">
                {cards.map(card => (
                    <Card 
                        key={card.id} 
                        cardData={card}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardDeck;