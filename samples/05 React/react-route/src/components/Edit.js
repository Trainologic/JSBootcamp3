import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

class Edit extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (<h3>Edit of id: {this.props.match.params.id}</h3>

        );
    }
}

export default Edit;
