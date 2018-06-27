import * as React from 'react';
import PortalWindow from "./components/PortalWindow";

interface IAppState {
    counter: number;
    isPortalWindowOpen: boolean;
}

const style: any = {
    textAlign: 'center'
};

class App extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            counter: 0,
            isPortalWindowOpen: false
        }
    };

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    openPortalWindow = () => {
        this.setState({isPortalWindowOpen: true});
    }

    public render() {
        const portalWindow = this.state.isPortalWindowOpen && (
            <PortalWindow>
                <h1>Counter: {this.state.counter}</h1>
            </PortalWindow>
        );

        return (
            <div style={style}>
                {portalWindow}

                <button onClick={this.incrementCounter}>Click to increment</button>
                <br />
                <br />
                <div>
                    <button onClick={this.openPortalWindow}>Open Portal Window</button>
                </div>
            </div>
        );
    }
}

export default App;
