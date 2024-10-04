import React, { useState } from "react";
import "./Sidebar.css";
import { Button } from "@mui/material";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { FaFileAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";

import { Link } from "react-router-dom";

const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(0);

     const [isToggle, setIsToggle] = useState(false);

    const isOpenSubmenu = (index) => {
        console.log("Index === ",index);
        setActiveTab(index);
        setIsToggle(!isToggle);
    };

  return (
    <>
      <div className="sidebar">
        <ul>
            {/** */}

          <li>
            <Link to="/">
                <Button className={`w-100 ${activeTab===0 && isToggle===true ? 'active': ''}`} onClick={()=>isOpenSubmenu(0)}>
                <span className="icon"><RiDashboardHorizontalFill/></span>Dashboard
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>

            {/** */}

          <li>
            <Link to="/">
                <Button className={`w-100 ${activeTab===1 && isToggle===true ? 'active': ''}`} onClick={()=>isOpenSubmenu(1)}>
                <span className="icon"><FaUnlockAlt/></span>Authentications
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>
            
            {/** */}

          <li>
            <Link to="/">
                <Button className={`w-100 ${activeTab===2 && isToggle===true ? 'active': ''}`} onClick={()=>isOpenSubmenu(2)}>
                <span className="icon"><MdMessage/></span>Messages
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>

          {/** */}

          <li>
            <Link to="/">
                <Button className={`w-100 ${activeTab===3 && isToggle===true ? 'active': ''}`} onClick={()=>isOpenSubmenu(3)}>
                <span className="icon"><IoNotifications/></span>Notifications
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>

          {/** */}

          <li>
            <Link to="/">
                <Button className={`w-100 ${activeTab===4 && isToggle===true ? 'active': ''}`} onClick={()=>isOpenSubmenu(4)}>
                <span className="icon"><FaFileAlt/></span>Invoice
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>

          {/** */}

          <li>
            <Button className={`w-100 ${activeTab===5  && isToggle===true ? 'active': ''}`} onClick={()=>isOpenSubmenu(5)}>
                <span className="icon"><FaUser/></span>Users
                <span className="arrowIcon"><FaAngleRight/></span>
            </Button>
            <div className={`submenuWrapper ${activeTab===5 && isToggle===true ? 'colapse':'colapsed'}`}>
                <ul className="subMenu">
                    <li><Link to="#">Administrators </Link></li>
                    <li><Link to="#">Operators </Link></li>
                    <li><Link to="#">Ordinary Users </Link></li>
                </ul> 
            </div>   
          </li>

          {/** */}

          <li>
            <Link to="/">
                <Button className={`w-100 ${activeTab===6  && isToggle===true ? 'active': ''}`} onClick={()=>isOpenSubmenu(6)}>
                <span className="icon"><LuLogIn /></span>Login
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>

          {/** */}

          <li>
            <Link to="/">
                <Button className={`w-100 ${activeTab===7  && isToggle===true ? 'active': ''}`} onClick={()=>isOpenSubmenu(7)}>
                <span className="icon"><SiGnuprivacyguard/></span>Sign Up
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>

          {/** */}

          <li>
            <Link to="/">
                <Button className={`w-100 ${activeTab===8  && isToggle===true ? 'active': ''}`} onClick={()=>isOpenSubmenu(8)}>
                <span className="icon"><IoMdSettings/></span>Settings
                <span className="arrowIcon"><FaAngleRight/></span>
                </Button>
            </Link>
          </li>
        </ul>

        {/** Logout button */}

        <div className="logoutWrapper mt-5 mb-1">
            <div className="logoutBox">
                <Button variant="contained"><LuLogOut/> Logout</Button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
