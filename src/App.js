import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main d-flex">
        <div className="sidebarWrapper">
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" exact={true} element={<Dashboard />} />
            <Route path="/dashboard" exact={true} element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
