import React, {Component} from 'react';

class DummyPage extends Component {

    componentDidMount() {
        console.log("Component Did Mount", this.props.name);
    }

    componentWillUnmount() {
        console.log("Component Will Unmount", this.props.name);
    }

    componentDidUpdate() {
        console.log("Component Did Update", this.props.name);
    }
    
    render() {
        return(
            <div>
                {this.props.name}
            </div>
        );
    }
}

export default DummyPage;