import * as React from 'react';
import ErrorPage from "./ErrorPage";

interface IErrorBoundaryState {
    error: Error | null
}

class ErrorBoundary extends React.Component<{}, IErrorBoundaryState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            error: null
        };
    }

    componentDidCatch(error: Error, stack: any) {
        this.setState({error});
    }

    render () {
        const error = this.state.error;

        if (error) {
            return (<ErrorPage error={error}/>);
        }

        return this.props.children;
    }
}

export default ErrorBoundary;