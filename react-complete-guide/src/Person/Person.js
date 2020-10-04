import React from 'react';

const person = function(props) {
    return (
        <div>
            <p onClick={props.click}>I am {props.name} and {props.age} </p>
            <p> {props.children} </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}
//ES6 

export default person;