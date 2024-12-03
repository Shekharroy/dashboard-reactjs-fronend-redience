import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { MdRemoveRedEye } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";
import "./DataTable.css";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

function DataTable() {
  const [data, setData] = useState([]);
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

  const context = useContext(MyContext);

  const handleViewClick = (id) => {
    context.setSelectedId(id);
  };

  // const handleEditClick = (id) => {
  //   alert(id)
  //   context.setSelectedEditId(id);
  // }

 

  // const handleView = () => {
  //   if (!context.viewUserDetails) {
  //     context.setViewUserDetails(true);
  //   }
  // };

  return (
    <Table
      striped
      bordered
      hover
      className="table table-bordered table-responsive v-align"
    >
      <thead className="table-dark">
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
        {data.map((item, index) => (
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
            <td>
              <div className="actions d-flex align-items-center">
                <Link to={"/userdetails"}>
                  <Button
                    className="secondary"
                    color="secondary"
                    onClick={() => {
                      handleViewClick(item.id);
                    }}
                  >
                    <MdRemoveRedEye />
                  </Button>
                  {/* {
                    selectedId && <UserDetails id={selectedId} />
                  } */}
                </Link>
                <Link to={"/userupdate"}>
                  <Button
                    className="success"
                    color="success"
                    onClick={() => {
                      handleViewClick(item.id);
                      context.setInitialData(data);
                      // <UserProfile data = {item} />
                    }}
                   
                  >
                    <MdOutlineModeEdit />
                  </Button>
                </Link>
                <Button className="error" color="error">
                  <MdDelete />
                </Button>
              </div>
            </td>
            {/* Add more table cells as needed */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default DataTable;
