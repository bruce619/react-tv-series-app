import React, { Component } from 'react';
import './Application.css';
import 'whatwg-fetch';
import Main from '../Main';


class Application extends Component {
    
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">TV Series List</h1>
                </header>
                <Main />
            </div>         
        );
    };

}

export default Application