import React, { useState } from 'react'
import { createEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email, setEmail] = useState('');

  const {id} = useParams();

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const navigator = useNavigate();

  const handleSaveEmployee = (e) => {
    e.preventDefault();

    if(!validateForm()) {
      return;
    }

    const employee = {firstName, lastName, email};
    console.log(employee);

    createEmployee(employee)
      .then((response) => {
        console.log(response.data);
        navigator('/employees')
      })
      .catch(error => {
          console.error(error);
      });
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = {...errors}

    if(firstName.trim()) {
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = 'First name is required';
      valid = false;
    }

    if(lastName.trim()) {
      errorsCopy.lastName = '';
    } else {
      errorsCopy.lastName = 'Last name is required';
      valid = false;
    }

    if(email.trim()) {
      errorsCopy.email = '';
    } else {
      errorsCopy.email = 'Email is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  const pageTitle = () => {
    if(id) {
      return <h2 className='text-center'>Edit Employee</h2>
    } else {
      return <h2 className='text-center'>Add Employee</h2>
    }
  }

  return (
    <div className='container'>
      <br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
            {pageTitle()}
            <div className='card-body'>
              <form>
                <div className='form-group mb-2'>
                  <label className='form-label'>First Name:</label>
                  <input 
                    className={`form-control ${ errors.firstName ? 'is-invalid' : ''}`}
                    type="text"
                    name='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='Enter Employee first name'
                  />
                  {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Last Name:</label>
                  <input 
                    className={`form-control ${ errors.lastName ? 'is-invalid' : ''}`}
                    type="text"
                    name='lastName'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Enter Employee last name'
                  />
                  {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}

                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Email:</label>
                  <input 
                    className={`form-control ${ errors.email ? 'is-invalid' : ''}`}
                    type="text"
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter Employee email'
                  />
                  {errors.email && <div className='invalid-feedback'>{errors.email}</div>}

                </div>

                <button className='btn btn-success' onClick={handleSaveEmployee}>Submit</button>
              </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeComponent