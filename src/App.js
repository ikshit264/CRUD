import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Components
import CreateUser from "./Users/CreateUser"
import DeleteUser from "./Users/DeleteUser"
import UpdateUser from "./Users/UpdateUser"
import ShowUsers from "./Users/ShowUsers"
import Home from './Home';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
        {/* if you want to start directing form /Home page not / page */}
          <Route path="/" element={<Navigate to="/User" />} />
          <Route path="/User" element={<Home />} />
          <Route path="/User/CreateUser" element={<CreateUser />} />
          <Route path="/User/DeleteUser" element={<DeleteUser />} />
          <Route path="/User/UpdateUser" element={<UpdateUser />} />
          <Route path="/User/ShowUser" element={<ShowUsers />} />
          <Route path="*" element={<Navigate to="/user" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
