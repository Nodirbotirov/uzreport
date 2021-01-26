import React, {Component} from 'react';


import {AvForm, AvField} from 'availity-reactstrap-validation';

import {Modal, ModalBody, ModalFooter} from 'reactstrap';

class LessonOttizikki extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            modalOpen: false,
            selectedIndex: 1
        }
    }


    render() {

        const LookExeample = () => {
            let numbers = [34, 12, -43, 0, 98, 54];

            // for (let i = 0; i < numbers.length; i++){
            //     console.log(numbers[i]);
            // }

            numbers.forEach((item, index, el) => {
                console.log(item + " - " + index);
                console.log(el);
            });

            let numbers2 = numbers.map((item, index) => {

                return index + "-elemnet: " + item;
            });
            //map - berilgan array elementlari asosida yangi array hosil qilish

            console.log(numbers2);

            let numbers3 = numbers.filter((item, index) => {
                return item > 0;
            });
            //filter - return da berilgan shartimizni bajaruvchi elementlardan iborat yangi array hosil qiladi.

            console.log(numbers3);

            let numbers4 = numbers.sort((item1, item2) => {
                return item1 - item2;
            });
            console.log(numbers4);
        };

        LookExeample();

        const addProduct = (event, values) => {
            console.log(values);

            if (this.state.selectedIndex >= 0){
                this.state.products.splice(this.state.selectedIndex, 1, values);
                changeModal();
            }else {
                this.state.products.push(values);
            }



            this.state.products.push(values);
            this.setState({products: this.state.products});

            console.log(this.state.products);

            this.form && this.form.reset();
        };

        const deleteProduct = (index) => {
            this.state.products.splice(index, 1);
            this.setState({products: this.state.products});
        };

        const editProduct = (index) => {
            this.setState({selectedIndex: index});
        };

        const changeModal = () => {
            this.setState({modalOpen: !this.state.modalOpen});
        };

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4 offset-4 mt-3">
                            <div className="card">
                                <div className="card-body">
                                    <AvForm onValidSubmit={addProduct} ref={c => (this.form = c)}>
                                        <AvField name="productName" type="text" label="product name" errorMessage="To'ldirmadez!!!" required/>

                                        <AvField name="productPrice" type="number" label="product price" errorMessage="To'ldirmadez!!!" required/>

                                        <AvField name="productColor" type="color" label="product pcolor" errorMessage="To'ldirmadez!!!" required/>

                                        <button type='submit' className='btn btn-secondary d-block ml-auto mt-3' errorMessage="To'ldirmadez!!!" required>Add</button>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.products.map((item, index) => {
                            return (
                                <div className="col-4 mt-3">
                                    <div className="card">
                                        <div className="card-header"><h5>{this.state.products[index].productName}</h5></div>
                                        <div className="card-body">
                                            <p>Price: <b>{item.productPrice}</b></p>
                                            <p>Price: <b>{item.productColor}</b></p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between">
                                            <button type="button" className="btn btn-primary" 
                                                    onClick={() => {editProduct(index);  changeModal();}}>Edit
                                            </button>
                                            <button type='button' className='btn btn-danger' onClick={() => deleteProduct(index)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Modal isOpen={this.state.modalOpen} toggle={changeModal}>
                    <AvForm onValidSubmit={addProduct} model={this.state.products[this.state.selectedIndex]}>
                    <ModalBody>
                        <AvField name="productName" type="text" label="product name" errorMessage="To'ldirmadez!!!" required/>

                        <AvField name="productPrice" type="number" label="product price" errorMessage="To'ldirmadez!!!" required/>

                        <AvField name="productColor" type="color" label="product pcolor" errorMessage="To'ldirmadez!!!" required/>
                    </ModalBody>
                    <ModalFooter>
                        <button type='submit' className='btn btn-success'>Edit</button>
                        <button type='button' className='btn btn-secondary' onClick={changeModal}>Cancel</button>
                    </ModalFooter>
                    </AvForm>
                </Modal>
            </div>
        );
    }
}

export default LessonOttizikki;