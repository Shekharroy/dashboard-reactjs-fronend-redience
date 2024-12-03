import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext, useState, useEffect } from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import axios from "axios";
import UserDetails from "./components/User/userdetails/UserDetails";
import UserUpdate from "./components/User/userupdate/UserUpdate";
import GetAllMenu from "./components/MenuMaster/GetAllMenu";
import InsertMenu from "./components/MenuMaster/insert/InsertMenu";
import UpdateMenu from "./components/MenuMaster/update/UpdateMenu";
import GetAllRole from "./components/RoleMaster/GetAll/GetAllRole";
import UpdateRole from "./components/RoleMaster/update/UpdateRole";
import RoleInsert from "./components/RoleMaster/insert/RoleInsert";
import GetRoleMappingByRoleIdandAccountId from "./components/RoleMapping/GetRoleMapping/GetRoleMappingByRoleIdandAccountId";
import GetAllPage from "./components/PageMaster/GetAllPage/GetAllPage";
import PageInsert from "./components/PageMaster/insertPage/PageInsert";
import UpdatePage from "./components/PageMaster/updatePage/UpdatePage";
import Footer from "./components/Footer/Footer";
export const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [userResponse, setUserResponse] = useState(null);
  const [userRegistration, setUserRegistration] = useState(false);
  const [isLogIn, setIsLogIn] = useState(() => {
    return localStorage.getItem("isLogIn") === "true";
  });
  const [viewUserDetails, setViewUserDetails] = useState(false);

  const [themeMode, setThemeMode] = useState(true);
  const [selectedId, setSelectedId] = useState("");
  const [initialData, setInitialData] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isOpenNav, setIsOpenNav] = useState(false);

  useEffect(() => {
    if (themeMode === true) {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("themeMode", "light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("themeMode", "dark");
    }
  }, [themeMode]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openNav = () => {
    setIsOpenNav(true);
  };

  const values = {
    isLogIn,
    setIsLogIn,
    isToggleSidebar,
    setIsToggleSidebar,
    userRegistration,
    setUserRegistration,
    themeMode,
    setThemeMode,
    viewUserDetails,
    setViewUserDetails,
    selectedId,
    setSelectedId,
    initialData,
    setInitialData,
    windowWidth,
    setWindowWidth,
    openNav,
    isOpenNav,
  };

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLogIn") === "true";
    setIsLogIn(loggedInStatus);
  }, []);

  useEffect(() => {
    // This effect will only run when isLogin is true
    if (isLogIn) {
      // Perform side effects here, such as fetching data, setting up subscriptions, etc.
      getCurrentUser();
      // ... other side effects
    }

    if (userRegistration) {
      console.log("userRegistration == ", userRegistration);
    }
    window.scrollTo(0, 0);
  }, [isLogIn, userRegistration]);

  const currentUserHeaders = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // notice the Bearer before your token
    },
  };

  const getCurrentUser = async () => {
    try {
      const res = await axios.get(
        "http://103.170.58.161:8080/whatsapp/user/currentuser",
        currentUserHeaders
      );
      console.log("RESPONSE CURRENT USER DATA ==>  ", res.data);
      const userData = { ...res.data };
      delete userData.password; // Remove password from user data object

      setUserResponse(userData);
      localStorage.setItem("currentuser", JSON.stringify(userData));
      return userResponse;
    } catch (error) {
      console.log("Failed to fetch JWT to:", error);
    }
  };

  return (
    <MyContext.Provider value={values}>
      <div className="App">
        {!isLogIn ? (
          <div>
            <Login />
          </div>
        ) : (
          <div>
            <div className="mainContaint">
              <Header />
              <div className="main d-flex">
                <>
                  <div
                    className={`sidebaarOverlay d-none ${
                      isOpenNav === true && "open"
                    }`}
                    onClick={() => setIsOpenNav(false)}
                  ></div>
                  <div
                    className={`sidebarWrapper ${
                      isToggleSidebar === true ? "toggle" : ""
                    } ${isOpenNav === true ? "open" : ""}`}
                  >
                    <Sidebar />
                  </div>
                </>

                <div
                  className={`content ${
                    isToggleSidebar === true ? "toggle" : ""
                  }`}
                >
                  <Routes>
                    <Route path={"/"} exact={true} element={<Dashboard />} />
                    <Route
                      path="/register"
                      exact={true}
                      element={<Register />}
                    />
                    <Route
                      path="/userdetails"
                      exact={true}
                      element={<UserDetails />}
                    />
                    <Route
                      path="/userupdate"
                      exact={true}
                      element={<UserUpdate />}
                    />
                    <Route
                      path="/menu/getall"
                      exact={true}
                      element={<GetAllMenu />}
                    />
                    <Route
                      path="/menu/insert"
                      exact={true}
                      element={<InsertMenu />}
                    />
                    <Route
                      path="/menu/update"
                      exact={true}
                      element={<UpdateMenu />}
                    />
                    <Route
                      path="/role/getall"
                      exact={true}
                      element={<GetAllRole />}
                    />
                    <Route
                      path="/role/update"
                      exact={true}
                      element={<UpdateRole />}
                    />
                    <Route
                      path="/role/insert"
                      exact={true}
                      element={<RoleInsert />}
                    />
                    {/* <Route
                      path="/rolemappinglist"
                      exact={true}
                      element={<GetRoleMappingByRoleIdandAccountId />}
                    /> */}
                    <Route
                      path="/pagemaster/getall"
                      exact={true}
                      element={<GetAllPage/>}
                    />
                    <Route
                      path="/pagemaster/insert"
                      exact={true}
                      element={<PageInsert/>}
                    />
                    <Route
                      path="/pagemaster/update"
                      exact={true}
                      element={<UpdatePage/>}
                    />
                  </Routes>
                </div>
              </div>
              <div className="container mt-5 pt-4">
              <Footer/>
              </div>
            </div>
          </div>
        )}
      </div>
    </MyContext.Provider>
  );
}

export default App;
