import React, {Component} from 'react';
import axios from "axios";
import PostItem from "./PostItem";

class Bun extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                this.setState({posts: res.data});
            })
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    {this.state.posts.map((item, index) => (
                        <div className='col-4 mt-3'>
                            <PostItem title={item.title} id={item.id}/>
                        </div>
                        ))}
                </div>
            </div>
        );
    }
}

export default Bun;