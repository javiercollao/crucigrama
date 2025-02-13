import PropTypes from 'prop-types'; 
import CrosswordRow from './CrosswordRow';

export default function CrosswordPuzzle({ ans, vword, showAnswers}) {
  
    return (
      <form className="mt-3">
        <table className="table table-borderless">
          <tbody>
            {ans.map((word, rowIndex) => (
              <CrosswordRow
                key={rowIndex}
                word={word}
                vChar={vword[rowIndex]}
                showAnswers={showAnswers}
                rowIndex={rowIndex}
              />
            ))}
          </tbody>
        </table>
      </form>
    );
}

CrosswordPuzzle.propTypes = {
  ans: PropTypes.array.isRequired,
  vword: PropTypes.string.isRequired, 
  showAnswers: PropTypes.bool.isRequired
}