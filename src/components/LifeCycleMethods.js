import React, {Component} from 'react';

import axios from "axios";

class LifeCycleMethods extends Component {
    constructor(props) {
        super(props);

        console.log("This text from constructor function")

        this.state = {
            users: []
        };
    }
    componentDidMount() {
        console.log("This text from componentDidMount");
        // ko'pincha Api ga so'rov yuborish u-n ishlatiladi.
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response);
                this.setState({users: response.data});
            })
//         post, delete, put
}

    componentWillUnmount() {
    console.log("This text from componentUnMount function")
}

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("This text from componentDidUpdate")
    }

    componentDidCatch(error, errorInfo) {
        console.log("This text from componentDidCatch")
    }


    render() {
        console.log("This text from render function");
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.users.map((item, index) => (
                            <div className='col-4 mt-3'>
                                <div className="card">
                                    <div className="card-header"><h5>{item.name}</h5>
                                        {/* this.state.users[index] <=========> item  */}
                                    </div>
                                    <div className="card-body">
                                        <p>City: <b>{item.address.city}</b></p>
                                        <a href={"http://" + item.website}>{item.website}</a>
                                    </div>
                                </div>
                            </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default LifeCycleMethods;