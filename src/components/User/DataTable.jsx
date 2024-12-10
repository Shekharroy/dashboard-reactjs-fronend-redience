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
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";
import MenuItem from "@mui/material/MenuItem";

function DataTable() {
  const [data, setData] = useState([]);
  const [filterByCategory, setfilterByCategory] = useState("");
  const [filterByName, setfilterByName] = useState("");
  const [filterByType, setfilterByType] = useState("");
  const [filterById, setfilterById] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the indices for slicing the data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

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

  const handleViewClick = (id) => {
    context.setSelectedId(id);
  };

  const handleChange = (event) => {
    setfilterById(event.target.value);
  };
  return (
    <>
      <div className="card shadow border-0 p-3 mt-4 bussinessRepot">
        <h3 className="hd">Business Report Table</h3>

        <div className="row cardFilters mt-3 p-4">
          <div className="col-md-3">
            <h6>BY PARENT ID</h6>
            <FormControl sx={{ minWidth: "100%" }} size="small">
              <Select
                value={filterById}
                onChange={(e) => {
                  setfilterById(e.target.value);
                }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {currentData.map((item, index) => (
                  <MenuItem value={index}>{item.parentId}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="col-md-3">
            <h6>BY FIRST NAME</h6>
            <FormControl sx={{ minWidth: "100%" }} size="small">
              <Select
                value={filterByName}
                onChange={(e) => setfilterByName(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {currentData.map((item, index) => (
                  <MenuItem value={index}>{item.firstName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="col-md-3">
            <h6>BY COMPANY</h6>
            <FormControl sx={{ minWidth: "100%" }} size="small">
              <Select
                value={filterByCategory}
                onChange={(e) => setfilterByCategory(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {currentData.map((item, index) => (
                  <MenuItem value={index}>{item.companyName}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="col-md-3">
            <h6>EMAIL</h6>
            <FormControl sx={{ minWidth: "100%"}} size="small">
              <Select
                value={filterByType}
                onChange={(e) => setfilterByType(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {currentData.map((item, index) => (
                  <MenuItem value={index}>{item.emailId}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="table-responsive mt-3 w-100 overflow-x-auto bg-white py-4">
        <Table
          striped
          bordered
          hover
          className="table table-bordered table-responsive v-align"
        >
          <thead className="table-dark">
            <tr>
              {/* <th>S.No</th> */}
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
                {/* <td>{index + 1}</td> */}
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
    </>
  );
}

export default DataTable;
