import React from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoLogInSharp } from "react-icons/io5";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul>
            {/** */}

          <li>
            <Link to="/">
                <Button className="w-100">
                <span className="icon"><RiDashboardHorizontalFill/></span>Dashboard
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>

            {/** */}

          <li>
            <Link to="/">
                <Button className="w-100">
                <span className="icon"><FaUnlockAlt/></span>Authentications
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>
            
            {/** */}

          <li>
            <Link to="/">
                <Button className="w-100">
                <span className="icon"><MdMessage/></span>Messages
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>

          {/** */}

          <li>
            <Link to="/">
                <Button className="w-100">
                <span className="icon"><IoNotifications/></span>Notifications
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>

          {/** */}

          <li>
            <Link to="/">
                <Button className="w-100">
                <span className="icon"><FaFileAlt/></span>Invoice
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>

          {/** */}

          <li>
            <Link to="/">
                <Button className="w-100">
                <span className="icon"><FaUser/></span>Users
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>

          {/** */}

          <li>
            <Link to="/">
                <Button className="w-100">
                <span className="icon"><IoLogInSharp/></span>Login
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>

          {/** */}

          <li>
            <Link to="/">
                <Button className="w-100">
                <span className="icon"><SiGnuprivacyguard/></span>Sign Up
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>

          {/** */}

          <li>
            <Link to="/">
                <Button className="w-100">
                <span className="icon"><IoMdSettings/></span>Settings
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
