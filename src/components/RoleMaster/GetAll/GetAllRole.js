import React, { useEffect, useState, useContext} from "react";
import axios from "axios";
import "./GetAllRole.css"
import { Table } from "react-bootstrap";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";
import { MyContext } from "../../../App"
import { Link } from "react-router-dom";

const GetAllRole = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRole = async () => {
      try {
        const response = await axios.get(
          "http://103.170.58.161:8080/whatsapp/role/getall",
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            },
          }
        );
        setData(response.data);
        localStorage.setItem("GetAllRole", JSON.stringify(response.data));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    };

    fetchRole();
  }, []);

  const context = useContext(MyContext);

  const handleClickGetId = (id) => {
    context.setSelectedId(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Get All", path: "/menu/getall" },
  ];


  return (
    <>
    <div className="container">
     <div className="card shadow border-0 p-3 mt-5 head ">
        <h3 className="headingRigister">All Role List</h3>
      </div>
    
    <Table
      striped
      bordered
      hover
      className="table table-bordered table-responsive v-align"
      style={{marginTop:"100px", backgroundColor:"white",padding:"60px"}}
    >
      <thead className="table-dark">
        <tr>
          <th>S.No</th>
          <th>Id</th>
          <th>Account ID</th>
          <th>Role Name</th>
          <th>Role Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.id}</td>
            <td>{item.accountId}</td>
            <td>{item.roleName}</td>
            <td>{item.roleDescription}</td>
            <td>
              <div className="actions d-flex align-items-center">
                <Link to={"/role/update"}>
                  <Button
                    className="success"
                    color="success"
                    onClick={() => {
                      handleClickGetId(item.id);
                      context.setInitialData(data);
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
    </div>
    </>
  );
};

export default GetAllRole;
