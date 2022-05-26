import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';
import './GameStyles.css';

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);
    const handleClick = (index) =>{
        const boardCopy = [...board];
        if (winner || boardCopy[index]) return; // Da thang hoac la nhan vao o da nhan roi thi return
        boardCopy[index] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXIsNext((xIsNext)=>!xIsNext);//Cai truoc la O thi cai sau la X va nguoc lai
    };
    const handleResetGame = () => {
        setBoard(Array(9).fill(null));
    };
    //Neu co winner thi hien thi
    return (
        <div>
            <Board cells={board} onClick={handleClick}/>
               
            {winner && <div className="game-winner">
                Winner is {winner}
            </div>} 
            
            <button className="game-reset" onClick={handleResetGame}>Reset</button>
        </div>
    );
};

export default Game;