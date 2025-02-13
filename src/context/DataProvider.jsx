import { useState, useMemo, useCallback } from "react";
import { DataContext } from "./DataContext";
import Data from "./DataPuzzle";
import PropTypes from "prop-types";

export function DataProvider({ children }) {
    const [numberOfInputs, setNumberOfInputs] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0) 

    const [puzzleInfo, setPuzzleInfo] = useState({ 
        timer: 300,
        game: false,
        vword: Data.vword,
        refs: [...Data.refs],
        answers: [...Data.answers],
        showAnswers: false
    });
     
    const updatePuzzleData = useCallback((newData) => {
        setPuzzleInfo(prev => ({
            ...prev,
            vword: newData.vword,
            refs: [...newData.refs],
            answers: [...newData.answers]
        }));
    }, []);
 
    const startNewGame = useCallback(() => {
        setPuzzleInfo(prev => ({
            ...prev,
            timer: 300,
            game: true,
            showAnswers: false
        }));
    }, []);

    const showAnswers = useCallback(() => {
        setPuzzleInfo(prev => ({
            ...prev, 
            game: false,
            showAnswers: true
        }));
    }, []);
    
    const stopGame = useCallback(() => {
        setPuzzleInfo(prev => ({
            ...prev, 
            game: false
        }));
    }, []);

    const restartGame = useCallback(async () => {
        await setPuzzleInfo(prev => ({
            ...prev, 
            game: false, 
        }));
        await setPuzzleInfo(prev => ({
            ...prev,
            timer: 300,
            game: true, 
        }));
        await setCorrectAnswers(0)
    }, []);
 
    const setNumberInputsTotal = useCallback((data) => {
        let numberOfInputByWord = data.answers.map((word) => word.length - 1);
        let total = numberOfInputByWord.reduce((a, b) => a + b, 0);
        setNumberOfInputs(total);
    }, [])

    const addCorrectAnswer = useCallback(() => {
        let newAnswer = correctAnswers + 1
        setCorrectAnswers(newAnswer)
    }, [correctAnswers])
    
    const contextValue = useMemo(() => ({
        puzzleData: puzzleInfo,
        numberOfInputs: numberOfInputs,
        numberCorrectAnswers: correctAnswers,
        updatePuzzleData,
        addCorrectAnswer,
        setNumberInputsTotal,
        startNewGame,
        showAnswers,
        restartGame,
        stopGame
    }), [puzzleInfo, numberOfInputs, correctAnswers, updatePuzzleData, addCorrectAnswer, setNumberInputsTotal, startNewGame, showAnswers, restartGame, stopGame]);

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
}

DataProvider.propTypes = {
    children: PropTypes.any.isRequired
}