import React, { useState } from "react";
import "./Dashboardbox.css";
import { HiDotsVertical } from "react-icons/hi";
import Button from "@mui/material/Button";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import HistoryIcon from '@mui/icons-material/History';


const options = [
  'None',
  'Last Day',
  'Last Week',
  'Last Month',
  'Last Year',
];

const ITEM_HEIGHT = 35;

const DashboardBox = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        className="dashboardBox text-capitalize"
        style={{
          backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`,
        }}
      >
        {props.grow === true ? (
          <span className="chart">
            <TrendingUpIcon />
          </span>
        ) : (
          <span className="chart">
            <TrendingDownIcon />
          </span>
        )}
        <div className="d-flex w-100">
          <div className="col1">
            <h6 className="text-white mb-0">Users</h6>
            <span className="text-white">277</span>
          </div>
          <div className="col2 ms-auto">
            {props.icon ? (
              <span className="icon">{props.icon ? props.icon : ""}</span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="d-flex align-items-center w-100 bottomEle">
          <h6 className="text-white mx-0">Last Month</h6>
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
                  <span><HistoryIcon className="mx-1"/>{option}</span>
                  
                </MenuItem>
              ))}
            </Menu>
          </div>
        </div>
      </Button>
    </>
  );
};

export default DashboardBox;
