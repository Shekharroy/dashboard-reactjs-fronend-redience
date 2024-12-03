import React, { useContext, useState, useEffect } from "react";
import "./Header.css";
import "./HeaderResponsive.css";
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
import userLogo from "../../assets/images/user.jpg";

import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import Divider from "@mui/material/Divider";
import { MyContext } from "../../App";
import { IoMenu } from "react-icons/io5";


const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpenNotificationDrop, setIsOpenNotificationDrop] = useState(false);
  const [isOpenMessageDrop, setIsOpenMessageDrop] = useState(false);
  const [username, setUsername] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  useEffect(()=>{

    const currentUser = localStorage.getItem("currentuser");
    if(currentUser){
      const currentUserParsed = JSON.parse(currentUser);
      setUsername(currentUserParsed.username);
      setFirstName(currentUserParsed.firstName);
      setLastName(currentUserParsed.lastName);

    }

  },[])


  const openMyAccount = Boolean(anchorEl);
  const openNotifications = Boolean(isOpenNotificationDrop);
  const openMessages = Boolean(isOpenMessageDrop);

  const context = useContext(MyContext)

  const handleLogout = () =>{
    alert('Header logout')
    context.setIsLogIn(false);
    localStorage.setItem('isLogIn', 'false'); // Clear login state
  }


  const handleOpenMyAccountDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccountDrop = () => {
    setAnchorEl(null);
  };

  const handleOpenNotificationDrop = () => {
    setIsOpenNotificationDrop(true);
  };
  const handleCloseNotificationDrop = () => {
    setIsOpenNotificationDrop(false);
  };

  const handleOpenMessageDrop = () => {
    setIsOpenMessageDrop(true);
  };
  const handleCloseMessageDrop = () => {
    setIsOpenMessageDrop(false);
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
            {context.windowWidth > 992 && (
              <div className="col-sm-3 part-2 d-flex align-items-center ps-4">
                <Button
                  className="rounded-circle me-4"
                  onClick={() =>
                    context.setIsToggleSidebar(!context.isToggleSidebar)
                  }
                >
                  {context.isToggleSidebar === false ? (
                    <MdOutlineMenuOpen />
                  ) : (
                    <MdOutlineMenu />
                  )}
                </Button>
                <SearchBox />
              </div>
            )}

            <div className="col-sm-7 part-3 d-flex align-items-center justify-content-end">
              <Button
                className="rounded-circle me-4"
                onClick={() => {
                  context.setThemeMode(!context.themeMode);
                }}
              >
                <MdOutlineLightMode />
              </Button>
              <Button
                className="rounded-circle me-4"
                onClick={handleOpenMessageDrop}
              >
                <BiMessageRounded />
              </Button>
              <Menu
                anchorEl={isOpenMessageDrop}
                className="messages dropdown-list"
                id="messages"
                open={openMessages}
                onClose={handleCloseMessageDrop}
                onClick={handleCloseMessageDrop}
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
                <div className="head ps-3 pb-2">
                  <h4>Messages 12</h4>
                </div>
                <div className="scrollInfo">
                  <MenuItem onClick={handleCloseMessageDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMessageDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMessageDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMessageDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMessageDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMessageDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMessageDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMessageDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMessageDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMessageDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseMessageDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                </div>
                <div className="px-3 pt-2 w-100">
                  <Button className="btn-blue w-100">
                    View All Notifications
                  </Button>
                </div>
              </Menu>

              <Button
                className="rounded-circle me-4 res-hide"
                onClick={handleOpenNotificationDrop}
              >
                <IoNotificationsOutline />
              </Button>
              <Menu
                anchorEl={isOpenNotificationDrop}
                className="notifications dropdown-list"
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
                <div className="head ps-3 pb-2">
                  <h4>Order 12</h4>
                </div>
                <div className="scrollInfo">
                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>

                  <MenuItem onClick={handleCloseNotificationDrop}>
                    <div className="d-flex">
                      <div>
                        <div className="userImg">
                          <span className="rounded-circle">
                            <img src={userLogo} alt="user logo" />
                          </span>
                        </div>
                      </div>
                      <div class="dropdownInfo">
                        <h4>
                          <span>
                            <b>Chandrashekhar </b>added to his favorite quot
                            <b> Never quote</b>
                          </span>
                        </h4>
                        <p class="text-sky mb-0">few seconds ago</p>
                      </div>
                    </div>
                  </MenuItem>
                </div>
                <div className="px-3 pt-2 w-100">
                  <Button className="btn-blue w-100">
                    View All Notifications
                  </Button>
                </div>
              </Menu>

              <Button className="rounded-circle me-4" onClick={()=>context.openNav()}>
                <IoMenu />
              </Button>

              {/* <Button className="btn-blue"> Sign In </Button> */}

              <div className="myAccWrapper">
                <Button
                  className="myAccount d-flex align-items-center"
                  onClick={handleOpenMyAccountDrop}
                >
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src={userLogo} alt="user logo" />
                    </span>
                  </div>
                  <div className="userInfo hide-name-id">
                    <h4>
                      {firstName} {lastName}
                    </h4>
                    <p className="mb-0">{username}</p>
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
                      <GppMaybeIcon fontSize="small" />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  {/* <Link to={"/login"}> */}
                  <MenuItem
                    onClick={() => {
                      handleCloseMyAccountDrop();
                      handleLogout();
                    }}
                  >
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                  {/* </Link> */}
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
