import React, { useContext, useState } from "react";
import "./Sidebar.css";
import "./SidebarResponsive.css"
import { Button } from "@mui/material";
import { BiSolidFoodMenu } from "react-icons/bi";
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
import { MyContext } from "../../App";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [isToggle, setIsToggle] = useState(false);

  const context = useContext(MyContext);

  const isOpenSubmenu = (index) => {
    console.log("Index === ", index);
    setActiveTab(index);
    setIsToggle(!isToggle);
    if (index === 7) {
      context.setUserRegistration(true);
    } else {
      context.setUserRegistration(false);
    }
  };

  const handleLogout = () => {
    context.setIsLogIn(false);
    localStorage.setItem("isLogIn", "false"); // Clear login state
  };

  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Button
              className={`w-100 ${
                activeTab === 0 && isToggle === true ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(0)}
            >
              <span className="icon">
                <BiSolidFoodMenu />
              </span>
              Menu Master
              <span className="arrowIcon">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 0 && isToggle === true ? "colapse" : "colapsed"
              }`}
            >
              <ul className="subMenu">
                <li>
                  <Link to={"/menu/getall"}>Get All User </Link>
                </li>
                <li>
                  <Link to={"/menu/insert"}>Insert Menu </Link>
                </li>
              </ul>
            </div>
          </li>

          {/** */}

          <li>
            <Button
              className={`w-100 ${
                activeTab === 1 && isToggle === true ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(1)}
            >
              <span className="icon">
                <FaUnlockAlt />
              </span>
              Role Master
              <span className="arrowIcon">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 1 && isToggle === true ? "colapse" : "colapsed"
              }`}
            >
              <ul className="subMenu">
                <li>
                  <Link to={"/role/getall"}>Get All Role </Link>
                </li>
                <li>
                  <Link to={"/role/insert"}>Insert Role</Link>
                </li>
                <li>
                  <Link to={"/rolemappinglist"}>Role Mapping List</Link>
                </li>
              </ul>
            </div>
          </li>

          {/** */}

          <li>
            {/* <Link to="/"> */}
              <Button
                className={`w-100 ${
                  activeTab === 2 && isToggle === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(2)}
              >
                <span className="icon">
                  <MdMessage />
                </span>
                Page Master
                <span className="arrowIcon">
                  <FaAngleRight />
                </span>
              </Button>
              <div
              className={`submenuWrapper ${
                activeTab === 2 && isToggle === true ? "colapse" : "colapsed"
              }`}
            >
              <ul className="subMenu">
                <li>
                  <Link to={"/pagemaster/getall"}>Get All Page </Link>
                </li>
                <li>
                  <Link to={"/pagemaster/insert"}>Insert Page</Link>
                </li>
              </ul>
            </div>
            {/* </Link> */}
          </li>

          {/** */}

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 3 && isToggle === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(3)}
              >
                <span className="icon">
                  <IoNotifications />
                </span>
                Notifications
                <span className="arrowIcon">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          {/** */}

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 4 && isToggle === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(4)}
              >
                <span className="icon">
                  <FaFileAlt />
                </span>
                Invoice
                <span className="arrowIcon">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          {/** */}

          <li>
            <Button
              className={`w-100 ${
                activeTab === 5 && isToggle === true ? "active" : ""
              }`}
              onClick={() => isOpenSubmenu(5)}
            >
              <span className="icon">
                <FaUser />
              </span>
              Users Master
              <span className="arrowIcon">
                <FaAngleRight />
              </span>
            </Button>
            <div
              className={`submenuWrapper ${
                activeTab === 5 && isToggle === true ? "colapse" : "colapsed"
              }`}
            >
              <ul className="subMenu">
                <li>
                  <Link to="/">Super Admin </Link>
                </li>
                <li>
                  <Link to="/">Admin </Link>
                </li>
                <li>
                  <Link to="/">Users </Link>
                </li>
              </ul>
            </div>
          </li>

          {/** */}

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 6 && isToggle === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(6)}
              >
                <span className="icon">
                  <LuLogIn />
                </span>
                Login
                <span className="arrowIcon">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          {/** */}

          <li>
            <Link to="/register">
              <Button
                className={`w-100 ${
                  activeTab === 7 && isToggle === true ? "active" : ""
                }`}
                onClick={() => {
                  isOpenSubmenu(7);
                }}
              >
                <span className="icon">
                  <SiGnuprivacyguard />
                </span>
                Sign Up
                <span className="arrowIcon">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>

          {/** */}

          <li>
            <Link to="/">
              <Button
                className={`w-100 ${
                  activeTab === 8 && isToggle === true ? "active" : ""
                }`}
                onClick={() => isOpenSubmenu(8)}
              >
                <span className="icon">
                  <IoMdSettings />
                </span>
                Settings
                <span className="arrowIcon">
                  <FaAngleRight />
                </span>
              </Button>
            </Link>
          </li>
        </ul>

        {/** Logout button */}

        <div className="logoutWrapper mt-5 mb-1">
          <div className="logoutBox">
            {/* <Link to="/login"> */}
            <Button variant="contained" onClick={handleLogout}>
              <LuLogOut /> Logout
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
