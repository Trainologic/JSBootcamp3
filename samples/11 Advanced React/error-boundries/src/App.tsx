import * as React from 'react';

interface IAppState {
    counter: number
}

class App extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            counter: 0
        }
    };

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    public render() {
        if (this.state.counter > 5) {
            throw new Error("Well, I cant count to more than 5");
        }

        return (
            <div>
                Counter: {this.state.counter}
                <br />
                <button onClick={this.incrementCounter}>Click to increment</button>
            </div>
        );
    }
}

export default App;
