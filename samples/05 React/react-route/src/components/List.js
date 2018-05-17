import React, {Component} from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Category1 from "./Category1";

class List extends Component {
    constructor(props){
        super(props);
        /*this.state= {
            data: [{title:'sdf', id:789},{title:'gggg', id:456}]
        };*/

    }

    getList(){
        return this.props.data.map(item=>
            (<p key={item.id}>
                {item.title}
            </p>));
    }

    render() {
        return (<div>
                <div>
                    <Link to={this.props.match.url+"/category1"}>Category1</Link>
                </div>
                <Route path={`${this.props.match.url}/category1`}
                       name='category1'
                       component={Category1}/>
                {this.getList()}
                </div>
        );
    }
}

export default List;
