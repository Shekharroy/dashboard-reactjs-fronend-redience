import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const UserDataTable = () => {
  const [users, setUsers] = useState([]);

  const byParentIdHeaders = {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`, // notice the Bearer before your token
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "http://103.170.58.161:8080/whatsapp/user/getallbyparent?parentId=1001", byParentIdHeaders
      ); // Replace with your API endpoint
      setUsers(result.data);
      return result.data;
    };

    fetchData();
  });

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Email</th>
          <th>ID</th>
          {/* Add more columns as needed */}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.firstName}</td>
            <td>{user.emailId}</td>
            {/* Add more columns as needed */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserDataTable;
