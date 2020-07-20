import React from 'react';
import Part from './part';

const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0].part} exercises={props.parts[0].exercises} />
            <Part part={props.parts[1].part} exercises={props.parts[1].exercises} />
            <Part part={props.parts[2].part} exercises={props.parts[2].exercises} />
        </div>
    );
}

export default Content;