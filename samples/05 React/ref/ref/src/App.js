import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import * as $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);

        this.ref = null;
    }

    componentDidMount() {
        //  jQuery
        $(this.ref).append($('<h3>Im jQuery</h3>'));
        $(this.ref).bind('click', () => {
            console.log('sdf')
        });

    }

    componentWillUnmount() {
        $(this.ref).off();
    }

    setRef = (elementFromSpace)=> {
        this.ref = elementFromSpace;
    }

    render() {
        return (
            <div className="App" ref={this.setRef}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p ref={elem => this.pRef = elem} className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
