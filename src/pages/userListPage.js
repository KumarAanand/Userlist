import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "../component/usertable";
import "../styles/common-style.css";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from "react-router-dom";

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    
    navigate('/RegistrationForm')
  };

  
  useEffect(() => {
    axios
      .get("https://gorest.co.in/public/v2/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="header-position">
        <h1>User List</h1>
        <Button className="button-styles" onClick={handleButtonClick}>            
            Create User         
           </Button>           
      </div>
      <UserTable users={users} />
    </div>
  );
};

export default UserListPage;
