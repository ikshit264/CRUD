import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { set } from 'mongoose'

const ShowUsers = () => {
  const [data, setdata] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/findall")
      .then(response => response.json())
      .then(data => {
        console.log(data); // Add this line to see the value of data
        setdata(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setdata([]);
      });
  }, []);
  

  return (
    <div>
    <Navbar/>
    <ul>
        {data.map(user => (
          <li key={user._id}>{`Name: ${user.name}, Email: ${user.email}`}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShowUsers
