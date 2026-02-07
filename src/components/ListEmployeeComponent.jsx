import {React, useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(()=>{
      listEmployees().then((response) => {
        setEmployees(response.data);
      }).catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>
      <button className='btn btn-primary mb-2' onClick={()=>navigator('/add-employee')}>Add Employee</button>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email ID</th>
          </tr>
        </thead>
        <tbody>
            {employees.map((e)=> 
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
              </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default ListEmployeeComponent