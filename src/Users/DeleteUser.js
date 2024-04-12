import React, { useState } from "react";
import Navbar from "../Navbar";

const DeleteUser = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const link = "http://localhost:3000/deleteuser/" + formData.email;
      console.log("link", link);
      
      const response = await fetch(link, {
        method: 'DELETE'
      });
  
      if (!response.ok) {
        console.log("User Cannot be Deleted");
      } else {
        const responseData = await response.json(); // Parse response body as JSON
        console.log(responseData.message);
        alert(responseData.message);
      }
    } catch (error) {
      console.error('Error deleting user:', error.message);
    }
  };
  
  
  return (
    <div>
    <Navbar/>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DeleteUser;
