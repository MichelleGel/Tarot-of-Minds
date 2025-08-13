/*✨ Partículas místicas
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {

  return (
    <div className="particles-container">
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: {
          color: "#00000028", // Fondo negro
        },
        fpsLimit: 60,
        particles: {
          color: { value: "#ffffff" },
          number: { value: 60, density: { enable: true, area: 800 } },
          opacity: { value: 0.5 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: { default: "out" },
          },
          links: {
            enable: false, // Desactiva líneas entre partículas
          },
        },
        detectRetina: true,
        
      }}
    />
    </div>
  )
}

export default ParticlesBackground*/