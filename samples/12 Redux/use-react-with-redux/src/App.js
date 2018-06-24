import React, {Component} from 'react';
import {connect} from 'react-redux';
import './App.css';
import {dec, inc} from "./actions";

class App extends Component {
    render() {
        return (
            <div className="App">
                <button onClick={this.props.onDec}>Dec</button>
                <span>{this.props.counter}</span>
                <button onClick={this.props.onInc}>Inc</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        counter: state.counter,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDec: () => {
            dispatch(dec())
        },

        onInc: () => {
            dispatch(inc())
        },
    }
}

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

console.log("ConnectedApp", ConnectedApp);

export default ConnectedApp;
