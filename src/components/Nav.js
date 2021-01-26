import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div className='navbar navbar-expand-sm navbar-light bg-light'>
                <Link to="/" className='navbar-brand'>
                    <img src="logo192.png" width="60" alt=""/>
                </Link>

                <div className="collapse navbar-collapse">
                    <ul className='navbar-nav'>
                        <li className='nav-item'><Link className="nav-link" to="/product">Maxsulotlar</Link> </li>
                        <li className='nav-item'><Link className="nav-link ml-3" to="/lifecycle">LifeCycle</Link> </li>
                        <li className='nav-item'><Link className="nav-link ml-3" to="/employee">Ishchilar ro'yxati</Link> </li>
                        <li className='nav-item'><Link className="nav-link ml-3" to="/hoocks">Hoocks</Link> </li>
                        <li className='nav-item'><Link className="nav-link ml-3" to="/posts">Yangiliklar</Link> </li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default Nav;