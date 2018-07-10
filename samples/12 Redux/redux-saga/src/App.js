import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import {actions, selectors} from "./duck";
import {bindActionCreators} from "redux";


export default connect(
    state=>({
        posts: selectors.getPosts(state),
        postsByUserId: selectors.getPostsByUserId(state, state.currentUserId),
        currentUserId: selectors.getCurrentUserId(state),
        userIds: selectors.getUserIds(state)
    }),
    dispatch=>({
        actions: bindActionCreators(actions, dispatch)
    })
)(
    class extends Component {
        componentDidMount(){
            this.props.actions.getPosts();
        }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                    <button onClick={()=>this.props.actions.getPosts()}>Get Posts</button>
                </header>

                <p className="App-intro">
                    <select onChange={e=>this.props.actions.filterByUserId(e.target.value)}
                            name="sdf"
                            id="sdf"
                            value={this.props.currentUserId}>
                        {this.props.userIds.map(u=>(<option key={u}>{u}</option>))}
                    </select>
                   <ul>
                       {this.props.postsByUserId.map(p=>(<li key={p.id}>{p.title}</li>))}
                   </ul>
                </p>
            </div>
        );
    }
});
