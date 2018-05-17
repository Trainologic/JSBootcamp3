import logo from './logo.svg';
import './App.css';
import Output from './components/Output';
import ButtonsPanel from './components/ButtonsPanel';
import * as React from "react";


function App2(props) {
    return <p>{props.value}</p>;
}

class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            result: 4
        };
    }

    componentWillMount(){

    }

    doOperation = (type) =>{
        this.setState((prevState, prop)=>{
            return {result: prevState.result + 4};
        });

        // this.setState({result: this.state.result+4});
    }

    onClickHandler(){
        this.props.callbackFn(this.state)
    }

    render() {
        return (
            <div className="App">
                <Output data={'sdf'+'sdfs'}
                        onClick={this.props.callbackFn.bind(this, 5)}></Output>
                <ButtonsPanel operation={this.doOperation}></ButtonsPanel>
            </div>
        );
    }
}

export default App;
export App2;

