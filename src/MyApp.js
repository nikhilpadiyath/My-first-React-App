import React, {Component} from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import DummyPage from './pages/DummyPage.js';
import Usage from './pages/Usage.js';

class MyApp extends Component {

    constructor(props){
        super(props);
        this.state = ({
            currentSelected: 'Home'
        });
    }

    handleMenuSelect = (value) => {
        console.log(value);
        this.setState({
            currentSelected: value
        });
    }

    getPage =() =>{
        const {
            currentSelected
        } = this.state;
        switch (currentSelected) {
            case 'Home' :
                return <HomePage />
            case 'Usage' :
                return <Usage/>
            case 'Settings' :
                return <DummyPage key= "Settings" name="Settings" />
            case 'Log Out' :
                return <DummyPage key= "Log Out" name="Log Out" />
            default:
                break;
        }
    }
    render() {
        return(
            <div className="app">
            <Header onMenuSelect= {this.handleMenuSelect}/>
          <div className="app-body">
            {this.getPage()}
          </div>
          <Footer />
        </div>
        );
    }
}

export default MyApp;