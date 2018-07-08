import * as React from 'react';

interface IPureProps {
    style?: any
}

class Pure extends React.PureComponent<IPureProps> {
    render() {
        console.log("Rendering Pure Component", this.props.style);

        return (<div/>);
    }
}

/*
import * as React from 'react';

import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys';
//import pure from 'recompose/pure';

interface IPureProps {
    style?: any
}

const Pure: React.SFC<IPureProps> = (props: IPureProps) => {
    console.log("Pure Component Rendering!");

    return (<div>Hello Pure Component</div>)
};

export default onlyUpdateForKeys(['foo'])(Pure);
//export default pure(Pure);
 */

export default Pure;