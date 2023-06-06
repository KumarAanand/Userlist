import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserListPage from './pages/userListPage';
import UserDetailsPage from './pages/userDetailPage';
import CreateUser from './pages/createUser';
import RegistrationForm from './pages/createUser';



function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' Component={UserListPage}></Route>
      <Route path='/users/:userId' Component={UserDetailsPage}></Route>    
      <Route path='/createuser' Component={CreateUser}></Route>
      <Route path='/RegistrationForm' Component={RegistrationForm}></Route>

          
    </Routes>
  </Router>
  );
}

export default App;
