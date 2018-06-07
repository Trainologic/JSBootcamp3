import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Api} from './api';
import {UsersList} from "./components/UsersList";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        Api.getUsers()
            .then((users) => {
                this.setState({
                    users: users
                });
            });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <UsersList users={this.state.users}/>
            </div>
        );
    }
}

export default App;