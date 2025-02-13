import PropTypes from 'prop-types'; 
import CrosswordCell from './CrosswordCell'
import { _HALF, _SIZE } from '../helpers/globals';


export default function CrosswordRow({ word, vChar, showAnswers, rowIndex }) {
    const initPosition = Math.max(0, _HALF - word.toLowerCase().indexOf(vChar.toLowerCase()));
    let c = 0;

    return (
      <tr>
        {Array(_SIZE).fill(null).map((_, colIndex) => {
          if (colIndex >= initPosition && colIndex < initPosition + word.length) {
            const isIntersection = word[c].toLowerCase() === vChar.toLowerCase();
            const cell = (
              <CrosswordCell
                key={colIndex}
                isIntersection={isIntersection}
                value={showAnswers ? word[c] : ''}
                rowIndex={rowIndex}
                cellIndex={c}
                char={word[c]}  
              />
            );
            c++; 
            return cell;
          }
          return <td key={colIndex} className='bg-empty-td' />;
        })}
      </tr>
    );
}

CrosswordRow.propTypes = {
  word: PropTypes.string.isRequired,
  vChar: PropTypes.string.isRequired,
  showAnswers: PropTypes.bool.isRequired,
  rowIndex: PropTypes.number.isRequired
}