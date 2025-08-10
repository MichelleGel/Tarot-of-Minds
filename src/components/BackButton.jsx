import { useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
    className="back-button"
    onClick={() => navigate(-1)}
    onMouseEnter = {(e) => (e.currentTarget.style.transform = "scale(1.1")}
    onMouseLeave = {(e) => (e.currentTarget.style.transform = "scale(1)")}
    aria-label="Volver"
    >
      <FaArrowLeft/>
    </button>
  )
}

export default BackButton;