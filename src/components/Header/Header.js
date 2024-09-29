import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Radiance-Solutions-logo.png";
import Button from "@mui/material/Button";
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox/SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import userImage from "../../assets/images/user.jpg";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenNotificationDrop, setIsOpenNotificationDrop] = useState(false);
  const openMyAccount = Boolean(anchorEl);
  const openNotifications = Boolean(isOpenNotificationDrop);
  const handleOpenMyAccountDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccountDrop = () => {
    setAnchorEl(null);
  };

  const handleOpenNotificationDrop = () =>{
    setIsOpenNotificationDrop(true)
  }; 
  const handleCloseNotificationDrop = () =>{
    setIsOpenNotificationDrop(false)
  };
  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/**Logo Wraper */}
            <div className="col-sm-2 part-1">
              <Link to={"/"} className="logo d-flex align-items-center">
                <img alt="Radiance-Solutions-logo.png" src={logo} />
                <span className="ms-1">Rediance</span>
              </Link>
            </div>
            <div className="col-sm-3 part-2 d-flex align-items-center ps-4">
              <Button className="rounded-circle me-4">
                <MdOutlineMenuOpen />
              </Button>
              <SearchBox />
            </div>
            <div className="col-sm-7 part-2 d-flex align-items-center justify-content-end">
              <Button className="rounded-circle me-4">
                <MdOutlineLightMode />
              </Button>
              <Button className="rounded-circle me-4">
                <BiMessageRounded />
              </Button>
              <Button className="rounded-circle me-4" onClick={handleOpenNotificationDrop}>
                <IoNotificationsOutline />
              </Button>
              <Menu
                    anchorEl={isOpenNotificationDrop}
                    className="notifications"
                    id="notifications"
                    open={openNotifications}
                    onClose={handleCloseNotificationDrop}
                    onClick={handleCloseNotificationDrop}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleCloseNotificationDrop}>
                      <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationDrop}>
                      <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseNotificationDrop}>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      Add another account
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationDrop}>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationDrop}>
                      <ListItemIcon>
                        <GppMaybeIcon fontSize="small"/>
                      </ListItemIcon>
                      Reset Password
                    </MenuItem>
                    <MenuItem onClick={handleCloseNotificationDrop}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>

              <div className="myAccWrapper">
                <Button
                  className="myAccount d-flex align-items-center"
                  onClick={handleOpenMyAccountDrop}
                >
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src={userImage} alt="user image" />
                    </span>
                  </div>
                  <div className="userInfo">
                    <h4>Chandrashekhar Kumar</h4>
                    <p className="mb-0">@Shekhar</p>
                  </div>
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={openMyAccount}
                    onClose={handleCloseMyAccountDrop}
                    onClick={handleCloseMyAccountDrop}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleCloseMyAccountDrop}>
                      <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccountDrop}>
                      <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseMyAccountDrop}>
                      <ListItemIcon>
                        <PersonAdd fontSize="small" />
                      </ListItemIcon>
                      Add another account
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccountDrop}>
                      <ListItemIcon>
                        <Settings fontSize="small" />
                      </ListItemIcon>
                      Settings
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccountDrop}>
                      <ListItemIcon>
                        <GppMaybeIcon fontSize="small"/>
                      </ListItemIcon>
                      Reset Password
                    </MenuItem>
                    <MenuItem onClick={handleCloseMyAccountDrop}>
                      <ListItemIcon>
                        <Logout fontSize="small" />
                      </ListItemIcon>
                      Logout
                    </MenuItem>
                  </Menu>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
