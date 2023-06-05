import React, { useEffect, useReducer} from 'react';
import './Usage.css';
import usageReducer from '../reducers/usageReducer';

const initialState = {
    value: 0,
    color: 'orange'
};

function Usage() {
    //const [value, setValue] = useState(0);
    //const [color, setColor] = useState('white');
    const [state, dispatch]= useReducer (usageReducer, initialState);

    useEffect(() => {
        console.log("EFFECT");

        return () => {
           console.log("CLEAN UP");
        }
        
    },[]);


    return (
        <div className="usage">
            <div className="usage-item" style={{background: state.color}}>
            <button onClick ={() => {
               dispatch({
                type: 'change-value',
                payload: 1
               });
            }}>Increment</button>
            <label>{state.value}</label>
            <button onClick ={() => {
               dispatch ({
                type: 'change-value',
                payload:-1
               });
            }}
            >Decrement</button>
            </div>
            <div className="colorChange">
            <button className="greenbtn" onClick = {() => {
                dispatch({
                    type: 'change-color',
                    payload: 'green'
                   });
            }}>Green</button>
            <button className="bluebtn" onClick = {() => {
                dispatch({
                    type: 'change-color',
                    payload: 'blue'
                   });
            }}>Blue</button>
            </div>
        </div>
    );
}

export default Usage;