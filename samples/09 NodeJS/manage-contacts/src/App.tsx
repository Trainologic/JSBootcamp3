import * as React from 'react';
import './App.css';
import {appStore} from "./appStore";
import {appService} from "./appService";
import * as classNames from "classnames";

class App extends React.Component {
    constructor(props) {
        super(props);

        appService.setRootComponent(this);
    }

    public render() {
        console.log("render");

        const {loading} = appStore;
        let {updatingContactName} = appStore;
        const errorMessage = (appStore.error && appStore.error.message) || "";

        if(!updatingContactName){
            updatingContactName = "";
        }

        return (
            <div className="App">
                <h1>Manage Contacts</h1>

                <h2 className="error">{errorMessage}</h2>

                <div className={classNames("loading", {active: loading})}>
                    Loading ...
                </div>

                <ul>
                    {this.getContactsLIs()}
                </ul>

                <div className="edit-zone">
                    <input value={updatingContactName} onChange={(event)=>appService.updatingContactNameChanged(event.target.value)} />
                    <button onClick={() => appService.save()}>Save</button>
                </div>
            </div>
        );
    }

    getContactsLIs(): any {
        const {contacts} = appStore;
        if (!contacts) {
            return;
        }

        return contacts.map(c => (
            <li key={c.id}>
                <span className='name'>{c.name}</span>
                <button onClick={() => appService.select(c)}>Select</button>
            </li>)
        )
    }
}

export default App;
