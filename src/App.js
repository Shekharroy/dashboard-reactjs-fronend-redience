import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext, useState, useEffect } from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Test from "./components/Login/Test";
import DataTable from "./components/User/DataTable";

export const MyContext = createContext();

function App() {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);

  const values = {
    isLogIn,
    setIsLogIn,
    isToggleSidebar,
    setIsToggleSidebar,
  };

  // Toggle to Register Page
  const switchToRegister = () => {
    setIsLoginPage(false);
  };

  // Toggle to Login Page
  const switchToLogin = () => {
    setIsLoginPage(true);
  };

  // useEffect(()=>{
  //   getJwtToken();
  //   getParentID();
  // },[])

  // async function getJwtToken() {

  //   let items = {
  //     "userName":"1001",
  //     "password": "123"

  //   }
  //   try {
  //     const response = await fetch('http://103.170.58.161:8080/whatsapp/auth/login',{
  //       method:'POST',
  //       headers:{
  //         'Content-Type': 'application/json'
  //       },
  //       body:JSON.stringify(items),
  //     });
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     console.log("jWtToken got it ==>",data.jwtToken);
  //     localStorage.setItem('token',JSON.stringify(data.jwtToken));
  //     return data;
  //   } catch (error) {
  //     console.error('Failed to fetch JWT token:', error);
  //   }
  // }

  // const getParentID = async() => {
  //   try{
  //     let response = await fetch('http://103.170.58.161:8080/whatsapp/user/currentuser',{
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${JSON.parse(localStorage.getItem('jwtToken'))}`, // notice the Bearer before your token
  //       }
  //     });
  //     if (!response.ok) {
  //        throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     response = await response.json();
  //     console.log('response', response);
  //     localStorage.setItem('PARENT_ID',JSON.stringify(response.id))

  //   } catch(error){
  //     console.log('Failed to fetch JWT to:', error)
  //   }
  // }

  return (
    <MyContext.Provider value={values}>
      <div className="App">
      
        {/* <Test/> */}
        {/* {!isLogIn? <Login />: <DataTable/>} */}
        
        {!isLogIn ? (
          <div>
            {isLoginPage && <Login switchToRegister={switchToRegister} />}
            {!isLoginPage && <Register switchToLogin={switchToLogin} />}
          </div>
        ) : (
          <div>
            <div className="mainContaint">
              <Header />
              <div className="main d-flex">
                <div
                  className={`sidebarWrapper ${
                    isToggleSidebar === true ? "toggle" : ""
                  }`}
                >
                  <Sidebar />
                </div>
                <div
                  className={`content ${
                    isToggleSidebar === true ? "toggle" : ""
                  }`}
                >
                  <Routes>
                    <Route path="/" exact={true} element={<Dashboard />} />
                    <Route
                      path="/dashboard"
                      exact={true}
                      element={<Dashboard />}
                    />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </MyContext.Provider>
  );
}

export default App;
