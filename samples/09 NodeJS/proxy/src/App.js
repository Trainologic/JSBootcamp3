import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    getData = async () => {
        try {
            const res = await fetch("/api/contact");
            const contacts = await res.json();
            console.log(contacts);
        }
        catch(err){
            console.error(err);
        }
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.getData}>Get Data</button>
            </div>
        );
    }
}

export default App;
