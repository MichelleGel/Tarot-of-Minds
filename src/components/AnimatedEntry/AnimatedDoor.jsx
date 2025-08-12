// 🚪Componente de la puerta
import { motion } from "framer-motion";
import "./AnimatedDoor.css";

const AnimatedDoor = ({ isOpen, onOpenComplete }) => {
  return (
    <motion.div 
      className="door"
      animate={{ rotateY: isOpen ? -110 : 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      style={{ transformOrigin: "left center" }}
      onAnimationComplete={() => {
        if (isOpen && typeof onOpenComplete === "function") {
          onOpenComplete();
        }
      }}
    >
      <div className="door-panel">
        <div className="door-handle" />
      </div>
    </motion.div>
  )
}

export default AnimatedDoor