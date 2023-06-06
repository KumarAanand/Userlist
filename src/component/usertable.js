import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const UserTable = ({ users ,onEdit,onDelete}) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            {/* <td>{user.name}</td> */}
            <td key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></td>
            <td>{user.email}</td>
            <td>{user.gender}</td>
            <td>{user.status}</td>
            <td>
              <button onClick={() => onEdit(user.id)}>
                <FaEdit />
              </button>
              <button onClick={() => onDelete(user.id)}>
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
