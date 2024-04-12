import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
    <Navbar/>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col gap-16 justify-center py-4">
          <h1 className="text-center font-medium text-2xl p-2 flex justify-center">
            <div className="border p-2 rounded-md">
              Below are the CURD operations
            </div>
          </h1>
          <div className="flex justify-around gap-5 content-center">
            <div>
              <Link
                to={"/User/CreateUser"}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Create User
              </Link>
            </div>
            <div>
              <Link
                to={"/User/DeleteUser"}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete User
              </Link>
            </div>
            <div>
              <Link
                to={"/User/UpdateUser"}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Update User
              </Link>
            </div>
            <div>
              <Link
                to={"/User/ShowUser"}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Show User
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
