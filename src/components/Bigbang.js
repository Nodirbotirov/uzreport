import React, {Component} from 'react';

import axios from "axios";

class Bigbang extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((response) => {
                console.log(response);
                this.setState({users: response.data});
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("This text from componentDidUpdate")
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.users.map((item, index) => (
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <div className="card-header text-capitalize"><h5>{item.title}</h5></div>
                                    <div className="card-body">
                                        <img src= {item.url} className="w-100" alt=""/>
                                    </div>
                                </div>
                            </div>
                    )
                    )}
                </div>
            </div>
        );
    }
}

export default Bigbang;