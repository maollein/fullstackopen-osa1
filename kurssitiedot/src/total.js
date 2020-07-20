import React from 'react';

const Total = (props) => {
    
    let sum = 0;
    for (const count of props.counts) {
        sum = sum + count;
    }

    return (
        <p>Number of exercises {sum}</p>
    );
}

export default Total;