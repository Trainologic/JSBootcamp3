import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import List from "./components/List";
import New from "./components/New";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{title: 'sdf', id: 789}, {title: 'gggg', id: 456}]
        };
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                        <nav>
                            <ul className='list'>
                                <li><Link to='/list'>Lists</Link></li>
                                <li><Link to='/new'>New</Link></li>
                            </ul>
                        </nav>
                    </header>
                    <section>
                        <Route path='/list' name='list' render={({match}) => (
                            <List match={match} data={this.state.data}/>
                        )}/>
                        <Route path='/new' name='new' component={New}/>
                    </section>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
