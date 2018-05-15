import * as React from "react";

export default
class ButtonsPanel extends React.Component {
    
    constructor(props){
        super(props);
    }
    
    addFour = ()=>{
        this.props.operation('+4');
    }
    
    render() {
        return (
            <div className="ButtonsPanel">
               <h3>ButtonsPanel</h3>
                <button onClick={this.addFour}>PLUS 4</button>
            </div>
        );
    }
}
