import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://103.170.58.161:8080/whatsapp/user/getall', {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMDAxIiwiaWF0IjoxNzI5ODcxOTQ1LCJleHAiOjE3Mjk5NTgzNDV9.oLF8Q2AoDmXPXftLcEeE3bdYdlnNIqZ-7nlHkmGNtESeyQ54M1WNkxZ-24IoCLeGeZKwVmdZ82cHhegm2FXFsA` 
        }
      });
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td>{item.parentId}</td>
            <td>{item.emailId}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.companyName}</td>
            <td>{item.username}</td>
            <td>{item.createBy}</td>
            <td>{item.createDate}</td>
            <td>{item.updateBy}</td>
            {/* Add more table cells as needed */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DataTable;
