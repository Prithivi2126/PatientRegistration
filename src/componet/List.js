import React from 'react'
import './style.css'

const List = () => {
  return (
    <div className="container ">
    <div className="mt-2 d-flex justify-content-end">
     
    </div>

    <table className="table   mt-4 border-1">
    <thead style={{backgroundColor:"#fb771a"}}> 
        <tr>
          <th scope="col">SI.NO</th>
          <th scope="col">Patiet's Name</th>
          <th scope="col">Date of Birth</th>
          <th scope="col">Age</th>
          <th scope="col">Gender</th>
          <th scope="col">Address</th>
          <th scope="col">Contact Number</th>
          <th scope="col">Emergency Contact</th>
          <th scope="col">PrimaryCare Physician</th>
        </tr>
      </thead>
      <tbody>
        
          
    
      </tbody>
    </table>
  </div>
  )
}

export default List