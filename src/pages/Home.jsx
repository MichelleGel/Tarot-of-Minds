import { useNavigate } from 'react-router-dom';
import './Home.css'
import Button from '../components/Button';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1 className="home-title">Elige Tu Camino</h1>

            <div className="home-cards">

                {/* Opción 1: Ver Mazo */}
                <div className="home-card">
                    <img
                        src="/images/logo.png" // reemplaza con tu imagen
                        alt="Ver Mazo"
                        className="home-card-image"
                    />
                    <Button onClick={() => navigate('/cards')} className="home-button">
                        Mazo
                    </Button>
                </div>

                {/* Opción 2: Lectura */}
                <div className="home-card">
                    <img
                        src="/images/logo.png" // reemplaza con tu imagen
                        alt="Lectura"
                        className="home-card-image"
                    />
                    <Button onClick={() => navigate('/lecture')} className="home-button">
                        Lectura
                    </Button>
                </div>
            </div>

        </div>
    );
}
export default Home;