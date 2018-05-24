import * as React from 'react';
import './App.css';

import logo from './logo.svg';
import {IUser} from 'models/Entities';
import LoginModal from "./components/LoginModal";

export
enum ERROR_MSG{
    none,
    allGood,
    credentials,
    locked
}

interface IAppState {
    loggedInUser: IUser | null,
    errorMsg: ERROR_MSG,
    counter: number
}

class App extends React.Component<{}, IAppState> {

    constructor(props) {
        super(props);

        this.state = {
            loggedInUser: null,
            errorMsg: ERROR_MSG.none,
            counter: 0
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
            if(this.state.counter===2){
                this.setState({
                    loggedInUser: null,
                    errorMsg: ERROR_MSG.locked
                });
            }
            else {
                this.setState((prev) => ({
                    loggedInUser: null,
                    errorMsg: ERROR_MSG.credentials,
                    counter: this.state.counter + 1
                }));
            }
        }
    };


    public render() {
        return (
            <LoginModal loginStatus={this.state.errorMsg} onSubmit={this.onLoginSubmitHandler}/>
        );
    }
}

export default App;
