import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import List from "./components/List";
import Edit from "./components/Edit";
import New from "./components/New";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [{title: 'sdf', id: 789}, {title: 'gggg', id: 456}]
        };
    }

    getEditLinks() {
        return this.state.data.map(item =>
            (<Link to={`/edit/${item.id}`}>Edit item {item.id}</Link>));
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
                                <li>{this.getEditLinks()}</li>
                            </ul>
                        </nav>
                    </header>
                    <section>
                        <Switch>
                            <Route path='/list' name='list' render={({match}) => (
                                <List match={match} data={this.state.data}/>
                            )}/>
                            <Route path='/edit/:id' name='edit-id' component={Edit}/>
                            <Route path='/edit' name='edit' component={New}/>
                        </Switch>
                    </section>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
