import * as React from 'react';

interface IAppState {
    inputVal: string
    items: string[]
}

class App extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            inputVal: '',
            items: []
        }
    }

    public render() {
        const listItems = this.state.items.map((item, idx) => {
            return (<li key={idx} className="list-group-item">{item}</li>);
        });

        return (
            <div style={{width: '550px', margin: '0 auto'}}>
                <h1>My ToDo List</h1>

                <ul className='list-group'>{listItems}</ul>

                <div className="controlls" style={{marginTop: '15px'}}>
                <input onChange={this.handleInputChange} value={this.state.inputVal} className='form-control' type='text' style={{height: '35px', marginRight: '15px'}}/>
                    <button onClick={this.handleButtonClick} type='button' className="btn btn-primary" style={{display: 'block', width: '100%', margin: '0 auto'}}>Add item</button>
                </div>
            </div>
        );
    }

    private handleInputChange = (e: any) => {
        this.setState({
           inputVal: e.target.value
        });
    };

    private handleButtonClick = () => {
        const items = this.state.items.concat([]);
        items.push(this.state.inputVal);

        this.setState({inputVal: '',
            items});
    };
}

export default App;