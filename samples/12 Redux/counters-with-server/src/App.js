import React, {Component} from 'react';
import './App.css';
import Counter from "./Counter";
import {dec, inc} from "./actions";
import {connect} from "react-redux";

class App extends Component {
    onDec(counter) {
        this.props.onDec(counter);
    }

    onInc(counter) {
        this.props.onInc(counter);
    }

    render() {
        const counters = this.props.counters || [];

        return (
            <div className="App">
                <ul>
                    {counters.map(c => <Counter
                        key={c.id}
                        counter={c}
                        onDec={() => this.onDec(c)}
                        onInc={() => this.onInc(c)}/>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        counters: state.counters,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDec: counter => {
            dispatch(dec(counter))
        },

        onInc: counter => {
            dispatch(inc(counter))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
;
