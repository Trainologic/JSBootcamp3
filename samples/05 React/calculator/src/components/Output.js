import * as React from "react";

export default 
class Output extends React.Component {
    constructor(props){
        super(props);
        
    }
    
    render() {
        return (
            <div className="Output">
               <h3>Output</h3>
                <textarea name="" id="" value={this.props.data}
                          cols="30" rows="1"></textarea>
            </div>
        );
    }
}


