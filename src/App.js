import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

function App() {
  const  [isToggleSidebar, setIsToggleSidebar] = useState(false);

  // useEffect(()=>{
  //   alert(isToggleSidebar)
  // },[isToggleSidebar])
  
  const values = {
    isToggleSidebar, setIsToggleSidebar
  }
  return (
    <MyContext.Provider value = {values}>
    <div className="App">
      <Header />
      <div className="main d-flex">
        <div className={`sidebarWrapper ${isToggleSidebar === true ? 'toggle': ''}`}>
          <Sidebar />
        </div>
        <div className={`content ${isToggleSidebar === true ? 'toggle': ''}`}>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="/dashboard" exact={true} element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
    </MyContext.Provider>
  );
}

export default App;
