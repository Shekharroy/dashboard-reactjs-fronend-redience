import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./GetRoleMappingByRoleIdandAccountId.css";
import { Table } from "react-bootstrap";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";
import { MyContext } from "../../../App";
import { Link } from "react-router-dom";

const GetRoleMappingByRoleIdandAccountId = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [roleId, setRoleId] = useState([]);
  const [accountId, SetAccountId] = useState([]);

  useEffect(() => {
    const getAllrole = localStorage.getItem("GetAllRole");
    const fn = () => {
      if (getAllrole) {
        try {
          const rolesArray = JSON.parse(getAllrole);
          if (Array.isArray(rolesArray)) {
            rolesArray.forEach((element) => {
              console.log("Element ==> ", element.accountId);
              setRoleId(element.id);
              SetAccountId(element.accountId);
            });
          } else {
            console.error("Parsed data is not an array");
          }
        } catch (error) {
          console.error("Error parsing JSON from localStorage", error);
        }
      } else {
        console.log("No roles found in localStorage");
      }
    };
    fn();
  }, []);

  useEffect(() => {
    console.log("Role Id == > ", roleId[0]);
    console.log("Account Id ==> ", accountId[0]);
    // const fetchRole = async () => {
    //   try {
    //     const response = await axios.get(
    //       `http://103.170.58.161:8080/whatsapp/rolemapping/getbyroleidandaccountid?roleId=${roleId}&accountId=${accountId}`,
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //           Accept: "application/json",
    //           Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
    //         },
    //       }
    //     );
    //     setData(response.data);
    //     setLoading(false);
    //   } catch (err) {
    //     console.error("Error fetching data:", err);
    //     setLoading(false);
    //   }
    // };

    // fetchRole();
  }, []);

  const context = useContext(MyContext);

  const handleClickGetId = (id) => {
    context.setSelectedId(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="card shadow border-0 p-3 mt-5 head ">
          <h3 className="headingRigister">Role Mapping List</h3>
        </div>

        {/* <Table
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
          </tr>
        ))}
      </tbody>
    </Table> */}
      </div>
    </>
  );
};

export default GetRoleMappingByRoleIdandAccountId;
