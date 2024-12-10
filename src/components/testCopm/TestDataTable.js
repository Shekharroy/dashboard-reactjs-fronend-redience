import React, { useState, useEffect } from "react";
import axios from "axios";

const TestDataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const itemsPerPage = 10;
  

  // Calculate the indices for slicing the data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page data
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://103.170.58.161:8080/whatsapp/user/getall",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        }
      );
      setData(response.data);
    };

    fetchData();
  }, []);
  const currentData = data.slice(startIndex, endIndex);

  // Total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handle page change
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
        <tr>
              <th>S.No</th>
              <th>Id</th>
              <th>Parent Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email Id</th>
              <th>Phone Number</th>
              <th>Comapny Name</th>
              <th>UserName</th>
              <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
                <td>{item.id}</td>
                <td>{item.parentId}</td>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.emailId}</td>
                <td>{item.phoneNumber}</td>
                <td>{item.companyName}</td>
                <td>{item.username}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: "10px" }}>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TestDataTable;
