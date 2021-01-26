
import React, {Component} from "react";

import "./Bun";

import "./main.scss";

class Gang extends Component {


    render() {

    return (
        <div className="container">
            <div className="row">
                <div className="navbar">
                    <nav className="navbar-brand">
                        <img src="../../public/rasm1.jpg" alt=""/>
                    </nav>
                    <ul className="d-flex justify-content-between pagination">
                        <li><a href="#" className="ml-2">Loyiha haqida</a></li>
                        <li><a href="#" className="ml-4">Dasturlash tillari</a></li>
                        <li><a href="#" className="ml-4">Narxlar</a></li>
                    </ul>
                    <div className="ab"></div>
                    <img src="../../public/photo_2020-11-25_01-35-19%20(5).jpg" alt="" className="gg"/>
                    <div className="ab"></div>
                </div>
            </div>
        </div>
    )
    };


};

export default Gang;

