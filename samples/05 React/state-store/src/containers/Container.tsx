import * as React from 'react';

import StateStore from '../state/StateStore';

interface IState {
    myStateKey: string
}

class Container extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);

        this.state = {
            myStateKey: StateStore.getInstance().get('myStateKey')
        }
    }

    render() {
        return (
            <div>
                {this.state.myStateKey}

                {this.props.children}
            </div>
        )
    }
}

function Connector(): any {
    return Container;
}

export default Connector;