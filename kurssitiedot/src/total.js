import React from 'react';

const Total = (props) => {
    
    let sum = 0;
    for (const part of props.parts) {
        sum = sum + part.exercises;
    }

    return (
        <p>Number of exercises {sum}</p>
    );
}

export default Total;