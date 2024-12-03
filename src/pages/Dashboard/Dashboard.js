import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.css";
import "./DashboardResponsive.css"
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

import Pagination from "@mui/material/Pagination";
import DataTable from "../../components/User/DataTable";
import axios from "axios";
import { MyContext } from "../../App";
import Footer from "../../components/Footer/Footer";

const options = ["None", "Last Day", "Last Week", "Last Month", "Last Year"];

const ITEM_HEIGHT = 35;

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 10],
  ["Eat", 2],
  ["Commute", 2],
  ["Sleep", 8],
];

export const chartOptions = {
  title: "My Daily Activities",
  backgroundColor: "transparent",
  legendTextStyle: { color: "#FFF" },
  titleTextStyle: { color: "#FFF" },
};

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterById, setfilterById] = useState("");
  const [filterByCategory, setfilterByCategory] = useState("");
  const [filterByName, setfilterByName] = useState("");
  const [filterByType, setfilterByType] = useState("");
  const [parentIdList, setParentIdList] = useState(null);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  const context = useContext(MyContext);

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

  const fetchDataPidList = async () => {
    const response = await axios.get(
      "http://103.170.58.161:8080/whatsapp/user/getall",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem('jwtToken')} `},
      }
    );
    setParentIdList(response.data);
    console.log("responseresponse ==> ",response)
    return parentIdList;
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
                chartType="PieChart"
                data={data}
                options={chartOptions}
                width={"100%"}
                height="calc(100% -90%)"
              />
            </div>
          </div>
        </div>

        <div className="card shadow border-0 p-3 mt-4 bussinessRepot">
          <h3 className="hd">Business Report Table</h3>

          <div className="row cardFilters mt-3 p-2">
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
                  onChange={(e) => setfilterByName(e.target.value)}
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
                  onChange={(e) => setfilterByCategory(e.target.value)}
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
                  onChange={(e) => setfilterByType(e.target.value)}
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

          <div className="table-responsive mt-3 w-100 overflow-x-auto">
            {/* <DataTable/> */}
            {/* {
              context.viewUserDetails === true ? <UserDetails/> :<DataTable/>
            } */}
            <div className="d-flex tableFooter">
              <p>
                showing <b>12</b> of <b>60</b> results
              </p>
              <Pagination
                count={100}
                color="primary"
                className="pagination"
                showFirstButton
                showLastButton
              />
            </div>
          </div>
          {/* <div className="card shadow border-0 p-3 mt-4 bussinessRepot b2class">
            <Footer />
          </div> */}
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
