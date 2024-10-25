import React, { useEffect, useState } from "react";
import "./Register.css";

import logo from "../../assets/images/Radiance-Solutions-logo.png";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";

const Register = ({ switchToLogin }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [logoPath, setLogoPath] = useState("");
  const [footer, setFooter] = useState("");
  const [password, setPassword] = useState("");
  const [parentId, setParentId] = useState("");
  const [username, setUsername] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  useEffect(() => {
    const pId = localStorage.getItem("PARENT_ID");
    if (pId) {
      setParentId(JSON.parse(pId));
      setUsername(JSON.parse(pId));
    }
  }, []);

  const fnRegister = async () => {
    let items = {
      firstName,
      lastName,
      email,
      phone,
      companyName,
      logoPath,
      footer,
      password,
      parentId,
      username,
    };
    console.log("Items Objects ", items);
    try {
      let result = await fetch("http://103.170.58.161:8080/whatsapp/user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${JSON.parse(
            localStorage.getItem("jwtToken")
          )}`, // notice the Bearer before your token
        },
        body: JSON.stringify(items),
      });
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
      result = await result.json();
      console.warn("result ", result);
      localStorage.setItem("Create-User", JSON.stringify(result));
      return result;
    } catch (error) {
      console.log("Failed to insert users to:", error);
      // Display an error message to the user, or retry the request
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container-fluid register">
      <div className="container registerForm">
        <div className="d-flex align-items-center justify-content-center p-5">
          <Link to={"/"} className="logo d-flex align-items-center">
            <img alt="Radiance-Solutions-logo.png" src={logo} />
            <span className="ms-1">Rediance</span>
          </Link>
        </div>
        <form className="g-3" >
        <div className="row g-2 m-auto px-5">
          
          <div className="col-md-4">
            <label htmlFor="parentid" className="form-label">
              Parent ID
            </label>
            <input
              type="text"
              defaultValue={parentId}
              className="form-control"
              id="parentid"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="firstname" className="form-label">
              First name
            </label>
            <input
              type="text"
              defaultValue={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="form-control"
              id="firstname"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="lastname" className="form-label">
              Last name
            </label>
            <input
              type="text"
              defaultValue={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="form-control"
              id="lastname"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <div className="input-group has-validation">
              <input
                type="text"
                defaultValue={username}
                className="form-control"
                id="username"
                aria-describedby="inputGroupPrepend"
                required
              />
            </div>
          </div>
          <div className="col-md-4">
            <label htmlFor="emailID" className="form-label">
              Email
            </label>
            <input
              type="email"
              defaultValue={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              id="emailID"
              required
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="phoneno" className="form-label">
              Phone Number
            </label>
            <input
              type="number"
              defaultValue={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="phoneno"
              maxLength="6"
              required
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="companyname" className="form-label">
              Company Name
            </label>
            <input
              type="text"
              defaultValue={companyName}
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              className="form-control"
              id="companyname"
              required
            />
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div className="col-md-12">
            <label htmlFor="logoPath" className="form-label">
              Logo Path
            </label>
            <select
              className="form-select"
              defaultValue={logoPath}
              onChange={(e) => {
                setLogoPath(e.target.value);
              }}
              id="logoPath"
              required
            >
              <option selected>Select logo path</option>
              <option defaultValue="1">One</option>
              <option defaultValue="2">Two</option>
              <option defaultValue="3">Three</option>
            </select>
            <div className="invalid-feedback">Please select a valid state.</div>
          </div>
          <div className="col-md-12">
            <label htmlFor="footer" className="form-label">
              Footer
            </label>
            <select
              className="form-select"
              defaultValue={footer}
              onChange={(e) => {
                setFooter(e.target.value);
              }}
              id="footer"
              required
            >
              <option selected>Select logo path</option>
              <option defaultValue="1">One</option>
              <option defaultValue="2">Two</option>
              <option defaultValue="3">Three</option>
            </select>
            <div className="invalid-feedback">Please provide a valid zip.</div>
          </div>

          <div className="col-md-12">
            <label htmlFor="paswd" className="form-label">
              Password
            </label>
            <div className="input-group">
              <input
                type={passwordVisible ? "text" : "password"}
                defaultValue={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                class="form-control"
                id="paswd"
                required
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
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={fnRegister}
            >
              REGISTER
            </button>
          </div>
          
          <div class="text-center">
            <p>
              A member?
              <Link onClick={switchToLogin} to={"/login"}>
                Login
              </Link>
            </p>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
