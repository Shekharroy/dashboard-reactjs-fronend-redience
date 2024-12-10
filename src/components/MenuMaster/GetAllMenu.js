import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import "./GetAllMenu.css";
import { Table } from "react-bootstrap";
import { MdRemoveRedEye } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Button from "@mui/material/Button";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";

const GetAllMenu = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the indices for slicing the data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    const getAllMenu = async () => {
      try {
        const response = await axios.get(
          "http://103.170.58.161:8080/whatsapp/menu/getall",
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
            },
          }
        );
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setLoading(false);
      }
    };

    getAllMenu();
  }, []);

  // Get the current page data
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
  const context = useContext(MyContext);

  const handleClickGetId = (id) => {
    context.setSelectedId(id);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container" style={{maxHeight:"20%", paddingBottom:"5%"}}>
        <div className="card shadow border-0 p-3 mt-5 mb-5 head rounded">
          <h3 className="headingRigister">All Menu List</h3>
        </div>
        <div className="table-responsive mt-3 w-100 overflow-x-auto bg-white py-4 px-3">
        <Table
          striped
          bordered
          hover
          className="table table-bordered table-responsive v-align bg-white mb-5 rounded"
        >
          <thead className="table-dark">
            <tr>
              {/* <th>S.No</th> */}
              <th>Id</th>
              <th>Name</th>
              <th>Menu Icon</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr key={index}>
                {/* <td>{index + 1}</td> */}
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.menuIcon}</td>
                <td>
                  <div className="actions d-flex align-items-center">
                    <Link to={"/menu/update"}>
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
        <div className="d-flex align-items-center justify-content-end pagination-responsive">
          <Button
            color="primary"
            className="pagination"
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <Button
            color="primary"
            className="pagination"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
        </div>
      </div>
    </>
  );
};

export default GetAllMenu;
