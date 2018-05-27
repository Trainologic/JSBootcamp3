import * as React from "react";
import {Component} from "react";
import "./app.css";
import {appService, appStore} from "./appStore";

export class Counter extends Component {
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
            <div>
                <button onClick={this.dec}>Dec</button>
                <span>{appStore.counter}</span>
                <button onClick={this.inc}>Inc</button>
            </div>
        </>;
    }
}
