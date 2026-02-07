import React from 'react'

const ListEmployeeComponent = () => {

  const dummyData = [
    {
      "id": 1,
      "firstName": "aaaa",
      "lastName": "bbbb",
      "email": "aaaa@email.com"
    },
    {
      "id": 2,
      "firstName": "cccc",
      "lastName": "dddd",
      "email": "cccc@email.com"
    },
        {
      "id": 3,
      "firstName": "eeee",
      "lastName": "ffff",
      "email": "eeee@email.com"
    }
  ]
  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>
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
            {dummyData.map((e)=> 
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