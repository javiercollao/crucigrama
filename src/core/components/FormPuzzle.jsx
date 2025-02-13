import { useContext } from "react";
import Buttom from "./Buttom";
import { DataContext } from "../../context/DataContext";
import FormSettings from "./FormSettings";

export default function FormPuzzle({ openModalFn, onClose }) {
  const store = useContext(DataContext)
  const startGame = store.startNewGame
  const showAnswers = store.showAnswers
  const restartGame = store.restartGame
  // const setTimerGame = store.setTimerGame

  const handleRestart = () => {
    restartGame()
  }

  const handleShowAnswers = () => {
    showAnswers()
  }

  const handlePrint = () => {
    console.log("Imprimir")
  }

  const handleStartGame = () => {
    startGame()
  }

  const handleShowConf = () => {
    console.log("Configuracion")
  }
  
  return (
    <form>
      <div className="d-flex justify-content-center mt-2 gap-5">
        <Buttom color="primary" onClick={ handleRestart}>♻️ Reiniciar</Buttom>
        <Buttom color="primary" onClick={ handleShowAnswers}>🔎 Ver Respuestas</Buttom>
        <Buttom color="primary" onClick={ handlePrint}>🖨️ Imprimir</Buttom>
      </div>
      <div className="d-flex justify-content-center mt-2 gap-5">
        <Buttom color="primary" onClick={ handleStartGame}>⌚️ Start Timer</Buttom>
        <Buttom color="primary" onClick={() => openModalFn(<FormSettings />, "Settings")}>🔩 Configuración</Buttom>
      </div>
    </form>
  )
}
