import * as React from 'react';

import * as Loadable from 'react-loadable'

const PureComponent = Loadable({
    loader: () => import('./Pure'),
    loading: () => <div>Loading...</div>
});

interface IAppState {
    counter: number
}

class App extends React.PureComponent<{}, IAppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
               counter: this.state.counter + 1
            });
        }, 1000)
    }

    public render() {
        const style = {color: 'pink'};

        return (
            <div className="App">
                <div className="App-intro">
                    {this.state.counter}

                    <PureComponent style={style}/>
                </div>
            </div>
        );
    }
}

export default App;
