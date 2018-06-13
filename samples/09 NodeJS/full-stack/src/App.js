import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Api} from './api';
import {UsersList} from "./components/UsersList";
import {Loader} from "./components/Loader";
import {CreateUser} from "./components/CreateUser";
import io from 'socket.io-client';

const socket =io();

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            isLoading: 0
        }
    }

    componentDidMount() {
        this.startLoading();
        Api.getUsers()
            .then((users) => {
                this.setState((prevState) => ({
                    users: users
                }));

                this.stopLoading();
            });

        // socket.emit('global', 'i am groot');
        socket.on('global', (msg)=>console.log(msg));
        // socket.on('connections', (username)=>console.log(`hello ${username}!`));
    }

    stopLoading() {
        this.setState((prevState) => ({
            isLoading: --prevState.isLoading
        }));
    }

    startLoading() {
        this.setState((prevState) => ({
            isLoading: ++prevState.isLoading
        }));
    }

    onUserCreateHandler =(user)=>{
        this.startLoading();

        Api.createUser(user)
            .then((newUser) => {
                this.setState((prevState) => ({
                    users: [...prevState.users, newUser]
                }));
                this.stopLoading();
            });
    };

    login = (username)=>{
        socket.emit('login', username);

        if (username!=='user3') {
            socket.emit('join-group', username, 'group1');
        } else {
            socket.emit('join-group', username, 'group2');
        }
    };

    leaveGroup = ()=>{
        socket.emit('leave-group', 'group1');
    }

    render = () => {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <button onClick={this.login.bind(this,'user1')}>LoginUser1</button>
                <button onClick={this.login.bind(this,'user2')}>LoginUser2</button>
                <button onClick={this.login.bind(this,'user3')}>LoginUser3</button>
                <button onClick={this.leaveGroup.bind(this,'user1')}>LeaveGroupUser1</button>
                {this.state.isLoading ? (<Loader/>) :
                    (<section className='app'>
                        <CreateUser onUserCreate={this.onUserCreateHandler}/>
                        <UsersList users={this.state.users}/>
                    </section>)}
            </div>
        );
    }
}

export default App;