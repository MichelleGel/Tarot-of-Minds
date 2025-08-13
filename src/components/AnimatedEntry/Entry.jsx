import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AnimatedDoor from "./AnimatedDoor";

import Button from "../Button";
import "./Entry.css";

//🎬 Componente principal

const Entry = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleEnter = () => {
    setOpen(true);
    };

  return (
    
    <div className="entry-screen">
      <div className="door-and-button">
      {/*<ParticlesBackground />*/}
      <AnimatedDoor 
      isOpen={open} 
      onOpenComplete={()=>navigate("/home")}
      />
      {!open && <Button onClick={handleEnter}>Entrar</Button>}
    </div>
    </div>
  )
}

export default Entry