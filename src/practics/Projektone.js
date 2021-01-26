import React, {Component} from 'react';

class Projektone extends Component {

    clickHandler = () => {
        alert('Clicking');
    }
    render() {
        return (
            <div>
                <h1>Today.uz</h1>
                <p></p>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        );
    }
}

export default Projektone;