import * as React from 'react';
import * as ReactDOM from 'react-dom';

class PortalWindow extends React.Component {
    el: Element;
    portalWindow: Window | null;

    constructor(props: {}) {
        super(props);

        this.el = document.createElement('div');
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }

    componentDidMount() {
        this.portalWindow = window.open('', '', 'width=450,height=450,left=200,top=200');
        
        this.portalWindow.document.body.appendChild(this.el);
    }
}

export default PortalWindow;