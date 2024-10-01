import React from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { FaUser } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
            {/** */}

          <li>
            <Button className="w-100">
              <span className="icon"><RiDashboardHorizontalFill/></span>Dashboard
              <span className="arrowIcon"><FaAngleRight/></span>
            </Button>
          </li>

            {/** */}

          <li>
            <Button className="w-100">
              <span className="icon"><FaUnlockAlt/></span>Authentications
              <span className="arrowIcon"><FaAngleRight/></span>
            </Button>
          </li>
            
            {/** */}

          <li>
            <Button className="w-100">
              <span className="icon"><MdOutlineMessage/></span>Messages
              <span className="arrowIcon"><FaAngleRight/></span>
            </Button>
          </li>

          {/** */}

          <li>
            <Button className="w-100">
              <span className="icon"><IoNotifications/></span>Notifications
              <span className="arrowIcon"><FaAngleRight/></span>
            </Button>
          </li>

          {/** */}

          <li>
            <Button className="w-100">
              <span className="icon"><LiaFileInvoiceSolid/></span>Invoice
              <span className="arrowIcon"><FaAngleRight/></span>
            </Button>
          </li>

          {/** */}

          <li>
            <Button className="w-100">
              <span className="icon"><FaUser/></span>Users
              <span className="arrowIcon"><FaAngleRight/></span>
            </Button>
          </li>

          {/** */}

          <li>
            <Button className="w-100">
              <span className="icon"><IoLogInOutline/></span>Login
              <span className="arrowIcon"><FaAngleRight/></span>
            </Button>
          </li>

          {/** */}

          <li>
            <Button className="w-100">
              <span className="icon"><SiGnuprivacyguard/></span>Sign Up
              <span className="arrowIcon"><FaAngleRight/></span>
            </Button>
          </li>

          {/** */}

          <li>
            <Button className="w-100">
              <span className="icon"><IoMdSettings/></span>Settings
              <span className="arrowIcon"><FaAngleRight/></span>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
