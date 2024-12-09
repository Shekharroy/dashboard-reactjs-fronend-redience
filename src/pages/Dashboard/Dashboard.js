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
import { MyContext } from "../../App";
import DataTable from "../../components/User/DataTable"
import TestDataTable from "../../components/testCopm/TestDataTable";

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

  // const fetchDataPidList = async () => {
  //   const response = await axios.get(
  //     "http://103.170.58.161:8080/whatsapp/user/getall",
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //         Authorization: `Bearer ${localStorage.getItem('jwtToken')} `},
  //     }
  //   );
  //   setParentIdList(response.data);
  //   console.log("responseresponse ==> ",response)
  //   return parentIdList;
  // };

  
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
          <DataTable/>
          {/* <TestDataTable/> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
