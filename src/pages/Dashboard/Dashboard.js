import React, { useState } from "react";
import "./Dashboard.css";
import DashboardBox from "./components/dashboardbox/DashboardBox";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HistoryIcon from "@mui/icons-material/History";
import { HiDotsVertical } from "react-icons/hi";
import Button from "@mui/material/Button";
import { FaUserCircle } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { PiToolboxFill } from "react-icons/pi";
import { FaKey } from "react-icons/fa6";

import { Chart } from "react-google-charts";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { MdRemoveRedEye } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const options = ["None", "Last Day", "Last Week", "Last Month", "Last Year"];

const ITEM_HEIGHT = 35;

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const chartOptions = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
  backgroundColor: "transparent",
  hAxis: {
    textStyle: { color: "#FFF" },
  },
  vAxis: {
    textStyle: { color: "#FFF" },
  },
  legendTextStyle: { color: "#FFF" },
  titleTextStyle: { color: "#FFF" },
};

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterById, setfilterById] = useState("");
  const [filterByCategory, setfilterByCategory] = useState("");
  const [filterByName, setfilterByName] = useState("");
  const [filterByType, setfilterByType] = useState("");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setfilterById(event.target.value);
  };

  return (
    <>
      <div className="right-content w-100">
        <div className="row dashboardRowWrapper">
          <div className="col-md-8">
            <div className="dashboardBoxWrapper d-flex">
              <DashboardBox
                color={["#1da256", "#48d483"]}
                icon={<FaUserCircle />}
                grow={true}
              />
              <DashboardBox
                color={["#c012e2", "#eb64fe"]}
                icon={<SiGooglemarketingplatform />}
              />
              <DashboardBox
                color={["#2c78e5", "#60aff5"]}
                icon={<PiToolboxFill />}
              />
              <DashboardBox color={["#e1650e", "#f3cd29"]} icon={<FaKey />} />
            </div>
          </div>
          <div className="col-md-4 ps-0">
            <div className="box graphbox">
              <div className="d-flex align-items-center w-100 bottomEle">
                <h6 className="text-white mx-0">Total Utiliy Cost</h6>
                <div className="ms-auto">
                  <Button className="ms-auto toggleIcon" onClick={handleClick}>
                    <HiDotsVertical />
                  </Button>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      },
                    }}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={handleClose}
                      >
                        <span>
                          <HistoryIcon className="mx-1" />
                          {option}
                        </span>
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </div>
              <h3 className="text-white font-weight-bold">$36784599.78</h3>
              <p>$36784599.78 in the last month</p>

              <Chart
                chartType="LineChart"
                width="100%"
                height="170px"
                data={data}
                options={chartOptions}
                legendToggle
              />
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4">
          <h3 className="hd">Business Report Table</h3>

          <div className="row cardFilters mt-3 p-2">
            <div className="col-md-3">
              <h6>BY ID</h6>
              <FormControl sx={{ minWidth: "100%" }} size="small">
                <Select
                  value={filterById}
                  onChange={(e)=>setfilterById(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h6>BY NAME</h6>
              <FormControl sx={{ minWidth: "100%" }} size="small">
                <Select
                  value={filterByName}
                  onChange={(e)=>setfilterByName(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h6>BY CATEGORY</h6>
              <FormControl sx={{ minWidth: "100%" }} size="small">
                <Select
                  value={filterByCategory}
                  onChange={(e)=>setfilterByCategory(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h6>STATUS TYPE</h6>
              <FormControl sx={{ minWidth: "100%" }} size="small">
                <Select
                  value={filterByType}
                  onChange={(e)=>setfilterByType(e.target.value)}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="table-responsive mt-3">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>UID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Language</th>
                  <th>Create Date</th>
                  <th>Update Date</th>
                  <th>Status Type</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>Testing Template</td>
                  <td>Marketing</td>
                  <td>en-US</td>
                  <td>07-10-2024 09:31</td>
                  <td>07-10-2024 09:32.</td>
                  <td>APPROVED</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"><MdRemoveRedEye/></Button>
                      <Button className="success" color="success"><MdOutlineModeEdit/></Button>
                      <Button className="error" color="error"><MdDelete/></Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Testing Template</td>
                  <td>Marketing</td>
                  <td>en-US</td>
                  <td>07-10-2024 09:31</td>
                  <td>07-10-2024 09:32.</td>
                  <td>APPROVED</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"><MdRemoveRedEye/></Button>
                      <Button className="success" color="success"><MdOutlineModeEdit/></Button>
                      <Button className="error" color="error"><MdDelete/></Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Testing Template</td>
                  <td>Marketing</td>
                  <td>en-US</td>
                  <td>07-10-2024 09:31</td>
                  <td>07-10-2024 09:32.</td>
                  <td>APPROVED</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"><MdRemoveRedEye/></Button>
                      <Button className="success" color="success"><MdOutlineModeEdit/></Button>
                      <Button className="error" color="error"><MdDelete/></Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Testing Template</td>
                  <td>Marketing</td>
                  <td>en-US</td>
                  <td>07-10-2024 09:31</td>
                  <td>07-10-2024 09:32.</td>
                  <td>APPROVED</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"><MdRemoveRedEye/></Button>
                      <Button className="success" color="success"><MdOutlineModeEdit/></Button>
                      <Button className="error" color="error"><MdDelete/></Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Testing Template</td>
                  <td>Marketing</td>
                  <td>en-US</td>
                  <td>07-10-2024 09:31</td>
                  <td>07-10-2024 09:32.</td>
                  <td>APPROVED</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"><MdRemoveRedEye/></Button>
                      <Button className="success" color="success"><MdOutlineModeEdit/></Button>
                      <Button className="error" color="error"><MdDelete/></Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Testing Template</td>
                  <td>Marketing</td>
                  <td>en-US</td>
                  <td>07-10-2024 09:31</td>
                  <td>07-10-2024 09:32.</td>
                  <td>APPROVED</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"><MdRemoveRedEye/></Button>
                      <Button className="success" color="success"><MdOutlineModeEdit/></Button>
                      <Button className="error" color="error"><MdDelete/></Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Testing Template</td>
                  <td>Marketing</td>
                  <td>en-US</td>
                  <td>07-10-2024 09:31</td>
                  <td>07-10-2024 09:32.</td>
                  <td>APPROVED</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"><MdRemoveRedEye/></Button>
                      <Button className="success" color="success"><MdOutlineModeEdit/></Button>
                      <Button className="error" color="error"><MdDelete/></Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Testing Template</td>
                  <td>Marketing</td>
                  <td>en-US</td>
                  <td>07-10-2024 09:31</td>
                  <td>07-10-2024 09:32.</td>
                  <td>APPROVED</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"><MdRemoveRedEye/></Button>
                      <Button className="success" color="success"><MdOutlineModeEdit/></Button>
                      <Button className="error" color="error"><MdDelete/></Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Testing Template</td>
                  <td>Marketing</td>
                  <td>en-US</td>
                  <td>07-10-2024 09:31</td>
                  <td>07-10-2024 09:32.</td>
                  <td>APPROVED</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"><MdRemoveRedEye/></Button>
                      <Button className="success" color="success"><MdOutlineModeEdit/></Button>
                      <Button className="error" color="error"><MdDelete/></Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Testing Template</td>
                  <td>Marketing</td>
                  <td>en-US</td>
                  <td>07-10-2024 09:31</td>
                  <td>07-10-2024 09:32.</td>
                  <td>APPROVED</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"><MdRemoveRedEye/></Button>
                      <Button className="success" color="success"><MdOutlineModeEdit/></Button>
                      <Button className="error" color="error"><MdDelete/></Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Testing Template</td>
                  <td>Marketing</td>
                  <td>en-US</td>
                  <td>07-10-2024 09:31</td>
                  <td>07-10-2024 09:32.</td>
                  <td>APPROVED</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"><MdRemoveRedEye/></Button>
                      <Button className="success" color="success"><MdOutlineModeEdit/></Button>
                      <Button className="error" color="error"><MdDelete/></Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Testing Template</td>
                  <td>Marketing</td>
                  <td>en-US</td>
                  <td>07-10-2024 09:31</td>
                  <td>07-10-2024 09:32.</td>
                  <td>APPROVED</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"><MdRemoveRedEye/></Button>
                      <Button className="success" color="success"><MdOutlineModeEdit/></Button>
                      <Button className="error" color="error"><MdDelete/></Button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#1</td>
                  <td>Testing Template</td>
                  <td>Marketing</td>
                  <td>en-US</td>
                  <td>07-10-2024 09:31</td>
                  <td>07-10-2024 09:32.</td>
                  <td>APPROVED</td>
                  <td>
                    <div className="actions d-flex align-items-center">
                      <Button className="secondary" color="secondary"><MdRemoveRedEye/></Button>
                      <Button className="success" color="success"><MdOutlineModeEdit/></Button>
                      <Button className="error" color="error"><MdDelete/></Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
