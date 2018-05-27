import * as React from "react";
import {Component} from "react";
import "./app.css";

// declare global {
//     namespace JSX {
//         interface IntrinsicElements {
//             'app-root': any
//         }
//     }
// }

export class App extends Component {
    render(){
        return <>
            <h1 className="app-header">Hello React with Typescript</h1>
        </>;
    }
}
