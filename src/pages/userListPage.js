import React, { useState, useEffect } from "react";
import UserTable from "../component/usertable";
import "../styles/common-style.css";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {  useNavigate } from "react-router-dom";
import { deleteUser,getUserList } from '../service/api-service';

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    
    navigate('/RegistrationForm')
  };

  const onHandleDelete = async (e)=>{
    console.log('click to delete user entry',e)
    try {
      // Pass the user ID and token as arguments to the deleteUser function
      await deleteUser(e);
      getUserList().then((response) => {
        setUsers(response);
      })
      .catch((error) => {
        console.error(error);
      });
      // Refresh the user list or perform any additional actions
    } catch (error) {
      // Handle the error
      console.error('Error deleting user:', error.message);
    }
  }

  const onHandleEdit =()=>{
    
  }

  
  useEffect(() => {
     getUserList().then((response) => {
        setUsers(response);
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
      <UserTable users={users} onEdit={onHandleEdit} onDelete={onHandleDelete}/>
    </div>
  );
};

export default UserListPage;
