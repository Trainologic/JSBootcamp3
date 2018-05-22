import * as React from 'react';

class Foo extends React.Component {
    render() {
        return (<div>{this.props.label}</div>);
    }
};

module.exports = Foo;