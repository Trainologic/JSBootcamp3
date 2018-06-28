import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Posts} from "./Posts";
import NNN from './newComp';

const withLoading= (WrappedComponent, color) => {
    return class extends React.Component{
        constructor(props){
            super(props);
        }

        componentDidMount(){
            console.log('wrapper');
        }

        render(){
            return (
                this.props.data.length?
                    <WrappedComponent {...this.props}/>:
                    <h2 style={{color}}>Loading...</h2>
            );
        }
    }
}

class App extends Component {
    PostsWithLoading = withLoading(Posts, 'red');

    constructor(props){
        super(props);

        this.state= {
            posts: []
        }
    }

componentDidMount(){
    setTimeout(()=>{
        this.setState({
            posts: [{
                id:345, title:'sdf'
            },{
                id:3645, title:'sdfgdf'
            }]
        })
    }, 2000);

}
  render() {
    return (
      <div className="App">
          <this.PostsWithLoading data={this.state.posts}/>
      </div>
    );
  }
}

export default App;
