import * as React from "react";
import {Component} from "react";
import "./app.css";
import {appService, appStore} from "./appStore";
import {Counter} from "./counter";

export class App extends Component {
    constructor(props){
        super(props);

        appService.subscribe(()=>{
            this.forceUpdate();
        })
    }

    dec = () => {
        console.log("dec");

        appService.dec();
    }

    inc = () => {
        console.log("inc");

        appService.inc();
    }

    render(){
        return <>
            <h1 className="app-header">Hello React with Typescript</h1>
            <Counter/>
            <Counter/>
        </>;
    }
}
