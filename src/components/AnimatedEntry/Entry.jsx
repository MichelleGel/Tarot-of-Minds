import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedDoor from "./AnimatedDoor";
import Button from "../Button";
import MysteriousParticles from "./Particles";
import "./Entry.css";

//🎬 Componente principal  
const Entry = () => {
  const [open, setOpen] = useState(false);
  const [particleIntensity, setParticleIntensity] = useState("normal");
  const [screenEffect, setScreenEffect] = useState("");
  const navigate = useNavigate();

  const handleEnter = () => {
    setOpen(true);
    setParticleIntensity("intense");
    setScreenEffect("opening");

    // Secuencia de efectos
    setTimeout(() => {
      setScreenEffect("bright");
    }, 2500);
  };

  return (
    <div className={`entry-screen ${screenEffect}`}>
      {/* Partículas de fondo sutiles */}
      <MysteriousParticles
        id="bg-particles"
        className="particles-container particles-bg"
        intensity="subtle"
        isOpening={false}
      />

      {/* Partículas principales que reaccionan */}
      <MysteriousParticles
        id="main-particles"
        className="particles-container particles-main"
        intensity={particleIntensity}
        isOpening={open}
      />

      <div className="door-and-button">
        <AnimatedDoor
          isOpen={open}
          onOpenComplete={() => navigate("/home")}
        />

        {!open && (
          <Button onClick={handleEnter}>
            Entrar
          </Button>
        )}
      </div>
    </div>
  );
};

export default Entry;