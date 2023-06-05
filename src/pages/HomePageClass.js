import React from 'react';
import Tools from '../Tools/Tools.js';
import SimpleList from '../list/SimpleList.js';
import { MyContext, MyContext2 } from './MyContexts.js';
import JustInfo from './JustInfo.js';


class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: [],
            activeState: 'all',
            message: '',
            showLabel: true
        };
    }

    handleShowLabel = (e) => {
        this.setState({
            showLabel: e.target.checked
        });

    }

    componentDidMount() {
        console.log('Component Did Mount');
        fetch('/data.json')
        .then((data) => {
        return data.json();
    })
        .then((data) => {
        this.setState({
            data: data
        }
    )}
    )
    }

    handleRefresh = () => {
        console.log("Refresh");
        fetch('/data2.json')
        .then((data) => {
        return data.json();
    })
        .then((data) => {
        this.setState({
            data: data
        }
    )}
    )

   }


    componentDidUpdate(prevProps, prevState){
        console.log("Component Did Update");
        if(prevState.message !== this.state.message){
        this.setState({
            message: 'Message'
        });
    }
        }

    componentWillUnmount(){
        console.log('Component Will Unmount');
    }
    onListChange=(evt) => {
        let value= evt.target.value;
        this.setState({
            activeState: value
        })
    }

    handleDelete = (item) => {
        console.log('DELETE', item);
        let newList = this.state.data.filter((element) => element.id !== item.id);

        this.setState({
            data: newList
        });
    }

    handleLabelClick = (arg) => {
            this.setState({
                activeState: arg
            });
    }

   
   handleAdd = (item) => {
            this.setState({
            data: [item,
            ...this.state.data]
        });
   }

    
    render() {
        console.log ("RENDER HOME PAGE");

        const {
            data,
            activeState
        } = this.state;
        
        let newList = data.filter ((item) => {
            if(activeState === 'all'){
                return true;
            } else if (activeState === 'active'){
                return item.isActive === true;
            } else if (activeState === 'non-active'){
                return item.isActive === false;
            }
            else return false;
        });
        return(
            <div>
            <input checked={this.state.showLabel} onChange= {this.handleShowLabel} type="checkbox"></input> Show Label
            <MyContext2.Provider value={100}>
            <MyContext.Provider value= {this.state.showLabel}>
            <Tools labelValue= {activeState} onAction={this.onListChange} onAdd={this.handleAdd} count={data.length} onRefresh={this.handleRefresh}>
              <SimpleList 
              onLabelClick = {this.handleLabelClick} 
              data={newList} 
              onAction= {this.handleDelete}/>   
            </Tools>
            <JustInfo activeState= {activeState}/>
            </MyContext.Provider>
            </MyContext2.Provider>
            </div>
        );
    }
}


export default HomePage;

