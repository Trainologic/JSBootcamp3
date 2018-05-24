import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import {IUser} from 'models/Entities';
import LoginModal from "./components/LoginModal";

class App extends React.Component {

    auth = (user:IUser):boolean=> {
        console.log(user);
        return true;
    };

    public render() {
        return (
            <LoginModal onSubmit={this.auth}/>
        );
    }
}

export default App;
