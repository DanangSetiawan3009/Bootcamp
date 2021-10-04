import React, { Component } from 'react'

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disable: false
        };
    }

    toggleDisable = () => this.setState(prevState => ({disable: !prevState.disable}))
  
    buttonClick = (e) => {
        e.preventDefault();
        console.log('button clicked');
    }

    render() {
        return (
            <div style={{
                padding: 20,
                backgroundColor: "lightgrey"
            }}>
                <button className='toggle' onClick={this.toggleDisable}>Toggle Disable</button>
                <form>
                <fieldset disabled={this.state.disable}>
                    <input />
                    <button onClick={this.buttonClick}>Button</button>
                </fieldset>
                </form>
            </div>
        );
    }
}

export default index;