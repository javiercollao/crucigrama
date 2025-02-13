import PropTypes from 'prop-types'
import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../context/DataContext'

export default function CrosswordCell({ isIntersection, value, rowIndex, cellIndex, char }) {
    const store = useContext(DataContext)
    const game = store.puzzleData.game
    const [inputValue, setInputValue] = useState('')
    const [inputCheck, setInputCheck] = useState('')
    const [inputReadOnly, setReadOnly] = useState(true) 
   
    const validateChar = (e) => {
      const newValue = e.target.value.toUpperCase();
      if (/^[A-Za-z]$/.test(newValue)) {
        setInputValue(newValue)
        const form = e.target.form
        const index = [...form].indexOf(e.target)
    
        if (store.numberCorrectAnswers === store.numberOfInputs) {
          store.stopGame()
        } else {
          const nextInput = form[index + 1]
          if (nextInput) {
            nextInput.focus()
          }
        }
      } else {
        setInputValue('')
      }
    }

    useEffect(() => {
      if(game){
        setReadOnly(false)
        setInputValue('')
        setInputCheck('')
      }
    }, [game])

    useEffect(() => {
      if((char.toUpperCase() === inputValue && game)){
        store.addCorrectAnswer()
        setReadOnly(true)
        setInputCheck("bg-secondary")
      }
    }, [inputValue, char])
     
  
    return (
      <td className={isIntersection ? 'table-primary' : 'table-secondary'}>
        {isIntersection ? (
          <div  
            className="form-control border-1 p-2"
          >{char.toUpperCase()}</div>
        ) : (
          <input
            type="text" 
            id={`txt-${rowIndex}-${cellIndex}`}
            onKeyUp={validateChar}
            className={`form-control no-border p-2 ${inputCheck}`}
            size="1"
            maxLength="1"
            value={value.toUpperCase() || inputValue}
            onChange={validateChar}
            readOnly={inputReadOnly}
          />
        )}
      </td>
    );
}

CrosswordCell.propTypes = {
  isIntersection: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  rowIndex: PropTypes.number.isRequired,
  cellIndex: PropTypes.number.isRequired,
  char: PropTypes.string.isRequired
}
