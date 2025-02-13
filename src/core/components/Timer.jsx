import { useState, useEffect, useContext } from "react";
import { DataContext } from "../../context/DataContext";

export default function Timer() {
  const store = useContext(DataContext);
  const game = store.puzzleData.game
  const timer = store.puzzleData.timer
  const [timeLeft, setTimeLeft] = useState(timer); // 5 minutes

  useEffect(() => { 
    if(game){
      if (timeLeft <= 0) return;
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    }else{
      setTimeLeft(timer)
    }
  
  }, [timeLeft, game, timer]);
 
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  return (
    <div>
        <p className="display-5 text-center">
            {formatTime(timeLeft)}
        </p>
    </div>
  )
}
