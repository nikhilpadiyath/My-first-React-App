import React, {useState, useMemo, useEffect} from 'react';
import Tools from '../Tools/Tools.js';
import SimpleList from '../list/SimpleList.js';
import { MyContext, MyContext2 } from './MyContexts.js';
import JustInfo from './JustInfo.js';


function HomePage() {
  
    const [showLabel, setShowLabel]
    =useState(true);

    const [activeState, setActiveState]
    =useState('all');

    const [data, setData]
    =useState([]);

    useEffect(() => {
        fetch('/data.json')
        .then((data) => {
        return data.json();
    })
        .then((data) => {
            setData(data);
    })
    }, []);


    const handleRefresh = () => {
        console.log("Refresh");
        fetch('/data2.json')
        .then((data) => {
        return data.json();
    })
    .then((data) => {
       setData(data);
    }
    )}

    const onListChange=(evt) => {
        const value= evt.target.value;
      setActiveState(value);
    }

    const handleDelete = (item) => {
        console.log('DELETE', item);
        const newList = data.filter((element) => element.id !== item.id);

        setData(newList);
    }

    const handleLabelClick = (arg) => {
           setActiveState(arg);
    }

   
   const handleAdd = (item) => {
         setData([item, ...data]);
   }

   const handleShowLabel = (e) => {
    setShowLabel(e.target.checked);

}

    
 
        
        const newList = data.filter ((item) => {
            if(activeState === 'all'){
                return true;
            } else if (activeState === 'active'){
                return item.isActive === true;
            } else if (activeState === 'non-active'){
                return item.isActive === false;
            }
            else return false;
        });

        const value = useMemo(() => {
            return {
                key : 'value',
                activeState : activeState
            };
        }, [activeState]);

        return(
            (
            <div>
                <div>
            <input checked={showLabel} onChange= {handleShowLabel} type="checkbox"></input> Show Label
            </div>
            <MyContext2.Provider value={100}>
            <MyContext.Provider value= {showLabel}>
            <Tools labelValue= {activeState} onAction={onListChange} onAdd={handleAdd} count={data.length} onRefresh={handleRefresh}>
              <SimpleList 
              onLabelClick = {handleLabelClick} 
              data={newList} 
              onAction= {handleDelete}/>   
            </Tools>
            <JustInfo testValue = {value} showLabel= {showLabel}/>
            </MyContext.Provider>
            </MyContext2.Provider>
            </div>
            )
        );
    }



export default HomePage;

