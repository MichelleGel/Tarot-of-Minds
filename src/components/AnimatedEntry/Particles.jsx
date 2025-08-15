import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const MysteriousParticles = ({ 
  id = "entry-particles", 
  className = "", 
  intensity = "normal", 
  isOpening = false 
}) => {
  
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Mysterious particles loaded", container);
  }, []);

  // Configuración dinámica según la intensidad y estado
  const particlesOptions = useMemo(() => {
    const baseConfig = {
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          push: {
            quantity: intensity === "intense" ? 8 : 3,
          },
          grab: {
            distance: isOpening ? 200 : 120,
            links: {
              opacity: isOpening ? 0.6 : 0.3,
            },
          },
        },
      },
      particles: {
        color: {
          value: isOpening 
            ? ["#fbbf24", "#f59e0b", "#d97706", "#ffffff", "#fef3c7"] // Más brillante al abrir
            : ["#fbbf24", "#f59e0b", "#d97706", "#92400e"], // Normal
        },
        links: {
          color: "#fbbf24",
          distance: intensity === "intense" ? 150 : 100,
          enable: true,
          opacity: isOpening ? 0.4 : 0.1,
          width: isOpening ? 2 : 1,
          triangles: {
            enable: isOpening,
            opacity: isOpening ? 0.05 : 0.02,
          },
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: isOpening ? 1.2 : 0.4, // Más rápido al abrir
          straight: false,
          trail: {
            enable: isOpening,
            length: isOpening ? 8 : 3,
            fill: {
              color: {
                value: "#000000",
              },
            },
          },
        },
        number: {
          density: {
            enable: true,
            area: intensity === "intense" ? 800 : 1200,
          },
          value: intensity === "intense" ? 100 : 50, // Más partículas si es intenso
        },
        opacity: {
          value: { 
            min: intensity === "intense" ? 0.3 : 0.1, 
            max: intensity === "intense" ? 1 : 0.7 
          },
          animation: {
            enable: true,
            speed: isOpening ? 1 : 0.5,
            startValue: "random",
          },
        },
        shape: {
          type: isOpening 
            ? ["circle", "triangle", "star", "polygon"] // Más formas al abrir
            : ["circle", "star"],
          options: {
            star: {
              sides: 5,
            },
            polygon: {
              sides: 6,
            },
          },
        },
        size: {
          value: { 
            min: 1, 
            max: intensity === "intense" ? 6 : 3 
          },
          animation: {
            enable: true,
            speed: isOpening ? 3 : 1.5,
            startValue: "random",
          },
        },
        // Efectos especiales
        twinkle: {
          particles: {
            enable: true,
            frequency: isOpening ? 0.1 : 0.03,
            opacity: 1,
            color: {
              value: "#ffffff",
            },
          },
        },
        wobble: {
          enable: true,
          distance: isOpening ? 20 : 8,
          speed: isOpening ? 0.3 : 0.1,
        },
        // Efecto de explosión al abrir
        ...(isOpening && {
          destroy: {
            mode: "split",
            split: {
              count: 2,
              factor: {
                value: 2,
              },
              rate: {
                value: 10,
              },
            },
          },
        }),
      },
      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: false, // Continúa la animación
    };

    return baseConfig;
  }, [intensity, isOpening]);

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default MysteriousParticles;