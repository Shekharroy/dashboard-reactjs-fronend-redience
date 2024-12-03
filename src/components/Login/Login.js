import React, { useContext, useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Radiance-Solutions-logo.png";
import { MyContext } from "../../App";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import axios from "axios";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const context = useContext(MyContext);
  const postData = {
    userName,
    password
  };

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const callApi = async () => {
    try {
      const res = await axios.post(
        "http://103.170.58.161:8080/whatsapp/auth/login",
        postData,
        axiosConfig
      );
      console.log("RESPONSE RECEIVED:", res);
      setResponse(res.data); // Save the response to state or handle it as needed
      localStorage.setItem("jwtToken", res.data.jwtToken); // Assuming jwtToken is in res.data
      handleLogIn();
      return response;
    } catch (error) {
      console.error("AXIOS ERROR:", error);
    }
  };

  const handleLogIn = ()=>{
    context.setIsLogIn(true);
    localStorage.setItem('isLogIn', 'true'); // Store login state
  }
 

  // Function to toggle the password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <div className="container-fluid login">
        <div className="container loginForm">
          <div className="d-flex align-items-center justify-content-center p-5">
            <Link to={"/"} className="logo d-flex align-items-center">
              <img alt="Radiance-Solutions-logo.png" src={logo} />
              <span className="ms-1">Rediance</span>
            </Link>
          </div>
          {/* <form className="g-3"> */}
            <div className="row pb-5 form-group">
              <div className="mb-3 col-12">
                <label htmlFor="usercheck" className="form-label">
                  User ID
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={userName}
                  onChange={(e)=>{setUserName(e.target.value)}}
                  id="usercheck"
                  placeholder="usreid"
                  autoFocus
                />
              </div>

              <div className="mb-3 col-12">
                <label htmlFor="pswchek" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="form-control "
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    id="pswchek"
                    placeholder="paswword"
                  />
                  <span
                    onClick={togglePasswordVisibility}
                    className="input-group-text"
                    style={{
                      marginLeft: "0px",
                      cursor: "pointer",
                    }}
                  >
                    {passwordVisible ? <IoEyeOffOutline /> : <IoEyeOutline />}
                  </span>
                </div>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={callApi}>
                  Log In
                </button>
              </div>
            </div>
          {/* </form> */}

          <div className="row d-flex align-items-center justify-content-between w-50">
            <div className="col-md-6 offset-md-4">
              <p>
                <Link to={"/forgot-password"} className="link">
                  FORGOT PASSWORD
                </Link>
              </p>
            </div>
            {/* <div className="col-md-6">
              <p>
                Not a member?
                <Link onClick={switchToRegister} to={"/"}>
                  Register
                </Link>
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
