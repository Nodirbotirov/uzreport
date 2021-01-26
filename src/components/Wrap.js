import React, {Component} from 'react';

import Nimadir from "./Nimadir";

class Wrap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            son: 0
        }
    }


    render() {

        var number = 0;

        const numberniOshirish = () => {
            // number = number + 1
            // number++;
            //
            // console.log(number);

            this.setState({son: this.state.son + 1})
        }

        const numberniKamaytirish = () => {
            // number = number - 1
            // number--;
            //
            // console.log(number);

            this.setState({son: this.state.son - 1})
        }



        return (
            <div>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-4">
                            <Nimadir sarlavha="Hello world!" odam={{name: "G'ayrat"}} rasm="111.png"/>
                        </div>
                        <div className="col-4">
                            <Nimadir sarlavha="Salom dunyo!" odam={{name: "Tursin"}} rasm="abd.jpg"/>
                        </div>
                        <div className="col-4">
                            <Nimadir sarlavha="привет мир" odam={{name: "Marip"}} rasm="favicon.ico"/>
                        </div>
                        <div className="col-4 my-5 offset-4">
                            <div className="card">
                                <div className="card-header text-center">
                                    <h1>{this.state.son}</h1>
                                </div>
                                <div className="card-body d-flex justify-content-between">
                                    <button type='button' className='btn btn-secondary' onClick={numberniOshirish}>+</button>
                                    <button type='button' className='btn btn-secondary' onClick={numberniKamaytirish}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Wrap;

// rcc - class component
// rsc - arrow function component
// rsf - function component