// import React from 'react';

// First version of Hello component
function Hello() {
    return (
        <h2>Hello from First Component</h2>
    );
}

// Updated version of Hello component using props
const HelloWithProps = (props) => {
    return (
        <div>
            <h2>Hello, {props.name}!</h2>
            <p>{props.message}</p>
            <p>Mood: {props.mood}</p>
        </div>
    );
};

// Export both versions of Hello component
export { Hello, HelloWithProps };
