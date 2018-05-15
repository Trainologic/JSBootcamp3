import logo from './logo.svg';
import './App.css';
import Output from './components/Output';
import ButtonsPanel from './components/ButtonsPanel';
import * as React from "react";

class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            result: 4
        };
    }

    doOperation = (type) =>{
        this.setState((prevState, prop)=>{
            return {result: prevState.result +4};
        });

        // this.setState({result: this.state.result+4});
    }

    render() {
        return (
            <div className="App">
                <Output data={this.state.result}></Output>
                <ButtonsPanel operation={this.doOperation}></ButtonsPanel>
            </div>
        );
    }
}

export default App;
