import * as React from "react";
import {Component} from "react";

export class App extends Component {
    run = () => {
        console.log(this);
    }

    blabla(){
        console.log("xxx");
    }

    render(){
        return <>
            <h1>Hello React with Typescript</h1>
            <button onClick={this.run.bind(this)}>Click me</button>
        </>;
    }
}

