import React from 'react';
import Cell from './Cell';
import { calculateWinner } from '../helpers';

const Board = (props) => {

    // const array = [1,2,3,4,5,6,7,8,9]
    return (
        <div className="game-board">
        {props.cells.map((item, index)=>(
            <Cell key={index} value={item} onClick={()=>props.onClick(index)}
                className={item === 'X' ? "is-x" : item === 'O' ? "is-o" : ""}
            />
            ))}
        </div>
    );
};

export default Board;