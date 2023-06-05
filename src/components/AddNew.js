import React from "react";
import './AddNew.css';

class AddNew extends React.Component{
    constructor(props){
        super(props);

        this.state =
            {
                titleInput: '',
                descrInput: '',
                isActive: false
            }
        }

        handleNewTitle= (evt) => {
            const value = evt.target.value;
            this.setState({
                titleInput: value
            })
        }

        handleNewDescr= (evt) => {
            const value = evt.target.value;
            this.setState({
                descrInput: value
            })
        }

        handleIsActiveChange= (evt) => {
            const value = evt.target.checked;
            this.setState({
                isActive: value
            })
        }

        

        handleClick= () => {
            console.log(this.state);

            const {
                titleInput,
                descrInput,
                isActive
            } = this.state

            if(titleInput) {
                this.props.onAdd({
                    id: Math.floor(Math.random()*100) + 10,
                    title: titleInput,
                    descr: descrInput,
                    isActive: isActive
                });
            
                this.setState({
                    titleInput: '',
                    descrInput: '',
                    isActive: false

                });
            }
        
        }
    render(){
        return(
            <div className="add-new">
                <div>
                    <label className = "add-title">Title:</label>
                    <input value= {this.state.titleInput} onChange={this.handleNewTitle}/>
                </div>
                <div>
                    <label className = "add-descr">Description:</label>
                    <input value= {this.state.descrInput} onChange={this.handleNewDescr}/>
                </div>
                <div>
                    <label className = "add-status">Is Active:</label>
                    <input type="checkbox" checked={this.state.isActive} onChange={this.handleIsActiveChange}/>
                </div>
                <button className= "add-btn" onClick= {this.handleClick}>Add to List</button>
            </div>
        );
    }
}

export default AddNew;