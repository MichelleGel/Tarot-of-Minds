
import React, { useState, useEffect, use } from 'react';
import { useParams } from 'react-router-dom';
import { getOneCardById } from '../services/TarotServices';
import './CardDetail.css';

const CardDetail = () => {

    const { id } = useParams(); //para obtener id desde la URL
    const [cardData, setCardData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCard = async () => {
            try {
                const data = await getOneCardById(id);
                setCardData(data);
            } catch (error) {
                console.error("Error al cargar la carta", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCard();
    }, [id])

    if (loading) {
        return <div className='loading'>Cargando Carta...</div>;
    }

    if (!cardData) {
        return <div className='error'>No se encontró la carta.</div>;
    }

    return (
        <div className="detail-container">

            <div className="notebook">

                {/* Página izquierda - Información del Tarot */}
                <div className="notebook-page left-page">
                    <div className="page-content">
                        {/* Header de la página izquierda */}
                        <div className="page-header">
                            <div className="tarot-logo">
                                <div className="logo-frame">
                                    <div className="logo-figure">
                                        <span className="logo-icon">🔮</span>
                                    </div>
                                </div>
                                <h1 className="page-title">ARCANO<br /><span className="subtitle">DEL TAROT</span></h1>
                            </div>
                        </div>

                        {/* Contenido de la carta */}
                        <div className="card-section">
                            <h2 className="card-name">{cardData.arcaneName}</h2>
                            <p className="card-number">Arcano {cardData.arcaneNumber}</p>

                            <div className="card-image-container">
                                <img
                                    src={cardData.arcaneImage?.imageSrc}
                                    alt={cardData.arcaneName}
                                    className="card-detail-image"
                                />
                            </div>

                            <div className="card-description-section">
                                <h3>Significado</h3>
                                <p className="card-description">
                                    {cardData.arcaneDescription}
                                </p>

                                <div className="card-credits">
                                    <p><strong>Imagen:</strong> {cardData.arcaneImage?.author}</p>
                                    <p><strong>Licencia:</strong> {cardData.arcaneImage?.license}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Líneas de cuaderno */}
                    <div className="notebook-lines">
                        {Array.from({ length: 25 }).map((_, i) => (
                            <div key={i} className="line"></div>
                        ))}
                    </div>
                </div>

                {/* Anillas de la libreta */}
                <div className="rings">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className="ring"></div>
                    ))}
                </div>

                {/* Página derecha - Información de la Diosa */}
                <div className="notebook-page right-page">
                    <div className="page-content">
                        {/* Header de la página derecha */}
                        <div className="page-header">
                            <div className="tarot-logo">
                                <div className="logo-frame">
                                    <div className="logo-figure">
                                        <span className="logo-icon">👩‍🔬</span>
                                    </div>
                                </div>
                                <h1 className="page-title">DIOSA<br /><span className="subtitle">DE LA CIENCIA</span></h1>
                            </div>
                        </div>

                        {/* Contenido de la diosa */}
                        {cardData.goddessName ? (
                            <div className="goddess-section">
                                <h2 className="goddess-name">{cardData.goddessName}</h2>
                                <p className="goddess-subtitle">Diosa Contemporánea</p>

                                <div className="goddess-image-container">
                                    <img
                                        src={cardData.goddessImage?.imageSrc}
                                        alt={cardData.goddessName}
                                        className="goddess-detail-image"
                                    />
                                </div>

                                <div className="goddess-description-section">
                                    <h3>Historia</h3>
                                    <p className="goddess-description">
                                        {cardData.goddessDescription}
                                    </p>

                                    <div className="goddess-credits">
                                        <p><strong>Imagen:</strong> {cardData.goddessImage?.author}</p>
                                        <p><strong>Licencia:</strong>
                                            <a
                                                href={cardData.goddessImage?.licenseUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="license-link"
                                            >
                                                Ver aquí
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="no-goddess">
                                <p>No hay información de diosa disponible para esta carta.</p>
                            </div>
                        )}
                    </div>

                    {/* Líneas de cuaderno */}
                    <div className="notebook-lines">
                        {Array.from({ length: 25 }).map((_, i) => (
                            <div key={i} className="line"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetail;
