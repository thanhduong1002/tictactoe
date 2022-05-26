import React from 'react';

// //object destructuring
// const student = {
//     name: 'Duong',
//     age: 28
// };
// const name = student.name;//daif
// const age = student.age;// daif

// const {name, age} = student;

const Cell = (props) => {
    //object destructuring
    const {value, onClick,className} = props;
    console.log(value, onClick);
    return (
        <div className={`game-cell ${className}`} onClick={props.onClick}>
            {props.value}
        </div>
    );
};

export default Cell;