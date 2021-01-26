import React, {Component} from 'react';
import axios from "axios";
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {Modal, ModalBody, ModalFooter} from 'reactstrap';



class LessonUttizTurt extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            modalOpen: false,
            selectedIndex: 1
        }
    }


    componentDidMount() {
        axios.get("https://app-employ.herokuapp.com/api/employee")
            .then((response) => {
         console.log(response);
         this.setState({employees: response.data.object});
        })
    }

    render() {

        const addEmployee = (event, values) => {
          axios.post("https://app-employ.herokuapp.com/api/employee", values)
              .then((response) => {
                  console.log(response);
                  if (response.data.success){
                     getEmpoyee();
                  }
              })
        };

        const deleteEmployee = (id) => {
         axios.delete("https://app-employ.herokuapp.com/api/employee/" + id)
             .then((res) => {
                 console.log(res);
                 getEmpoyee()
             })
        };

        const getEmpoyee = () => {
            axios.get("https://app-employ.herokuapp.com/api/employee")
                .then((res2) => {
                    this.setState({employees: res2.data.object});
                })
        };





        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4 offset-4 mt-3">
                            <div className="card">
                                <div className="card-body">
                                    <AvForm onValidSubmit={addEmployee}>
                                        <AvField name='firstName' type='text' label='Ishchining ismi'></AvField>

                                        <AvField name='lastName' type='text' label='Ishchining familyasi'></AvField>

                                        <AvField name='age' type='number' label='Ishchining yoshi'></AvField>

                                        <AvField name='position' type='text' label='Ishchining lavozimi'></AvField>

                                        <AvField name='salary' type='number' label='Ishchining oyligi'></AvField>

                                       <button type='submit' className="brn btn-success d-block ml-auto">Qo'shish</button>

                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.employees.map((item, index) => (
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{item.firstName} {item.lastName}</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>Age: <b>{item.age}</b></p>
                                        <p>Position: <b>{item.position}</b></p>
                                        <p>Salary: <b>{item.salary}</b></p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <button type='button' className='btn btn-primary'>Edit</button>
                                        <button type='button' className='btn btn-danger' onClick={() => deleteEmployee(item.id)}>Delete</button>
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

export default LessonUttizTurt;