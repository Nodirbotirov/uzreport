import React from 'react';

const Nimadir = (props) => {
    console.log(props)
    return (
        <div className="card">
            <div className="card-header">
                <h5>{props.sarlavha}</h5>
            </div>
            <div className="card-body">
                {props.odam.name}
                <img src={props.rasm} className='w-100' alt=""/>
            </div>
            <div className="card-footer">
                <button type='button' className='btn btn-secondary'>Click me!</button>
            </div>
        </div>
    );
};

export default Nimadir;