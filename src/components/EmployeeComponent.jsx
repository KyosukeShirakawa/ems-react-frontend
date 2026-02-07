import React, { useState } from 'react'

const EmployeeComponent = () => {

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSaveEmployee = (e) => {
    e.preventDefault();

    const employee = {firstName, lastName, email};
    console.log(employee);
  }

  return (
    <div className='container'>
      <br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3'>
            <h2 className='text-center'>Add Employee</h2>
            <div className='card-body'>
              <form>
                <div className='form-group mb-2'>
                  <label className='form-label'>First Name:</label>
                  <input 
                    className='form-control'
                    type="text"
                    name='firstName'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='Enter Employee first name'
                  />
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Last Name:</label>
                  <input 
                    className='form-control'
                    type="text"
                    name='lastName'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder='Enter Employee last name'
                  />
                </div>

                <div className='form-group mb-2'>
                  <label className='form-label'>Email:</label>
                  <input 
                    className='form-control'
                    type="text"
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter Employee email'
                  />
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