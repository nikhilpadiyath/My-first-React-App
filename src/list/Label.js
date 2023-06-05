import React, {useContext} from 'react';
import './Label.css';
import {MyContext, MyContext2} from '../pages/MyContexts.js';
import Tooltip from './Tooltip';
import {useTooltip} from '../hooks/ourHooks.js';

function Label(props) {
        const val = useContext(MyContext);
        const val2 = useContext(MyContext2);

        const [showTooltip, setShowTooltip, labelRef, refObj] = useTooltip();
        
        
        const style= props.isActive ? {background: 'green' } : {background: 'orange'};
        const text = props.isActive? 'Active' : 'Non Active';
        
        if(val === false){
            return null;
        }
        else {
            const handleMouseEnter = () => {

                setShowTooltip(true);
            }

            const handleMouseLeave = () => {
                setShowTooltip(false);
                console.log(refObj.current);
            }

        return (
          <div className = 'label-container'>
         <span 
         ref= {labelRef}
         onClick= { () => {
            props.onAction(props.isActive ? 'active' : 'non-active');
            } }
            className="list-label-item" 
            style = {style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                {props.isActive ? 'Active' : 'Non Active'}
            </span>
            <Tooltip ref= {refObj} showTooltip= {showTooltip} message={`This is ${text}`}/>
                </div>
        );
        }
            
}

export default Label;