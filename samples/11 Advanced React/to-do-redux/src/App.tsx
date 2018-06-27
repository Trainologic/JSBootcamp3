import * as React from 'react';
import {connect} from "react-redux";

import ToDoList from './components/ToDoList';
import {IToDoItem, VISIBILITY_FILTER} from "./types";

interface IAppProps {
    todos: IToDoItem[];
    visibilityFilter: VISIBILITY_FILTER;
}

interface IAppState {
    input: string;
}

class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
            input: ''
        }
    }

    public handleOnChange = (e: any) => {
        this.setState({input: e.target.value});
    };

    public handleAddTask = () => {
        /*
        const task: IToDoItem = {
            complete: false,
            task: this.state.input
        };
        */
    };

    public render() {
        return (
            <div className="App">
                <ToDoList todos={this.props.todos}/>

                <section id="controls">
                    <input type="text" onChange={this.handleOnChange} value={this.state.input}/>
                    <button onClick={this.handleAddTask}>Add Task</button>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        todos: state.AppReducer.todos,
        visibilityFilter: state.AppReducer.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
