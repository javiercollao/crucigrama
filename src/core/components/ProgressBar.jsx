import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../context/DataContext"

export default function ProgressBar() {
  const store = useContext(DataContext)
  const game = store.puzzleData.game
  const [widthProgress, setWidthProgress] = useState("20%")
  const correctAnswers = store.numberCorrectAnswers
  const numberOfInputs = store.numberOfInputs

  useEffect(() => {
    if(game){
      setWidthProgress("0%")
    }
  }, [game])

  useEffect(() => {
    if (numberOfInputs > 0) {
        let progress = (correctAnswers / numberOfInputs) * 100 + "%";
        setWidthProgress(progress);
    }
}, [correctAnswers, numberOfInputs]);
  
  return (
    <div className="progress w-50">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          aria-label="Animated striped example"
          aria-valuenow="21"
          aria-valuemin="0"
          aria-valuemax="35"
          style={{width: widthProgress}}
        ></div>
    </div>
  )
}
