import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="my-5 py-5 text-center">
            <img src="404.png" alt=""/>
            <h5>Kechirasiz bunday sahifa mavjud emas</h5>
            <Link to="/">Bosh sahifaga utish</Link>
        </div>
    );
};

export default NotFound;