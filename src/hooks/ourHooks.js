import {useRef, useState, useLayoutEffect,useDebugValue} from 'react';

function useTest(){
    const labelRef = useRef();
    return labelRef;
}

function useTooltip() {
    const [showTooltip, setShowTooltip] = useState(false);

        const labelRef = useRef();
        const refObj= useRef();

        useDebugValue("Tool Tip showing " + showTooltip);

        useLayoutEffect(()=> {
            if(showTooltip){
                console.log(labelRef.current);

                const width1 = labelRef.current.getBoundingClientRect().width;
                const width2 = refObj.current.getBoundingClientRect().width;
                const newPosition = (width2-width1)/2;

                refObj.current.style.left = `-${newPosition}px`;
            }

        },[showTooltip]);

        return [showTooltip, setShowTooltip, labelRef, refObj ]

}

export {useTest, useTooltip};