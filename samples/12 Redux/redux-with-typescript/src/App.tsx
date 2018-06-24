import * as React from 'react';
import './App.css';
import {AppState, Contact} from "./appState";
import {connect} from "react-redux";

interface AppProps {
    contacts: Contact[];
}

class App extends React.Component<AppProps, {}> {
    public render() {
        const contacts = this.props.contacts || [];

        return (
            <div className="App">
                <ul>
                    {contacts.map(c => <li key={c.id}>
                        <span>{c.name}</span>
                    </li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        contacts: state.contacts,
    }
}

export default connect(mapStateToProps, {})(App);
