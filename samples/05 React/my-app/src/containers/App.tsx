import * as React from 'react';

interface IAppState {
    name: string
}

const appGridStyle = {
    width: '600px',
    margin: '0 auto',
    gridTemplateColumns: '30% 70%',
    girdTemplateRows: 'auto'
};

class App extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div style={appGridStyle}>

            </div>
        );
    }
}

export default App;