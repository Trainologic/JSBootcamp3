import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import {IUser} from 'models/Entities';
import LoginModal from "./components/LoginModal";

export
enum ERROR_MSG{
    allGood,
    credentials,
    locked
}

interface IAppState {
    loggedInUser: IUser | null,
    errorMsg: ERROR_MSG
}

class App extends React.Component<{}, IAppState> {

    constructor(props) {
        super(props);

        this.state = {
            loggedInUser: null,
            errorMsg: ERROR_MSG.allGood
        }
    }

    auth = (user: IUser): boolean => {
        console.log(user);
        return user.username == 'batman' && user.password == 'robin';
    };

    onLoginSubmitHandler =(user:IUser)=>{
        if(this.auth(user)){
            this.setState({
                loggedInUser: user,
                errorMsg: ERROR_MSG.allGood
            })
        }
        else{
            this.setState({
                loggedInUser: null,
                errorMsg: ERROR_MSG.credentials
            })
        }
    };


    public render() {
        return (
            <LoginModal loginStatus={this.state.errorMsg} onSubmit={this.onLoginSubmitHandler}/>
        );
    }
}

export default App;
