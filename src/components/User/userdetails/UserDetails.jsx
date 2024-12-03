import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./UserDetails.css";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { MyContext } from "../../../App";

const UserDetails = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);

const context = useContext(MyContext)

  const axiosHeader = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // notice the Bearer before your token
    },
  };

  useEffect(() => {
    console.log("User Details Page get userID ", context.selectedId);
    // alert(axiosHeader)
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://103.170.58.161:8080/whatsapp/user/getbyid?id=${context.selectedId}`,
          axiosHeader
        );
        setUserData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [context.selectedId]); // Dependency array to trigger refetch if userId changes

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const renderForm = () => {
    return (
      <>
        <div className="container-fluid register mt-0">
      <div className="card shadow border-0 p-3 mt-5 head ">
        <h3 className="headingRigister">User Details Form</h3>
      </div>
          <div className="container registerForm">
            <form className="g-3">
              <div className="row g-2 m-auto px-5">
                {/* parentid */}
                <div className="col-md-1">
                  <label htmlFor="parentid" className="form-label">
                    Parent ID
                  </label>
                  <input
                    type="text"
                    defaultValue={userData.parentId}
                    className="form-control"
                    id="parentid"
                    readOnly
                  />
                </div>
                {/* parentid */}
                {/* {ID } */}
                <div className="col-md-1">
                  <label htmlFor="Ids" className="form-label">
                    ID
                  </label>
                  <input
                    type="text"
                    defaultValue={userData.id}
                    className="form-control"
                    id="Ids"
                    readOnly
                  />
                </div>
                {/* {ID } */}
                {/* {Created Date} */}
                <div className="col-md-2">
                  <label htmlFor="createDate" className="form-label">
                    Create Date
                  </label>
                  <input
                    type="text"
                    defaultValue={userData.createDate}
                    className="form-control"
                    id="createDate"
                    readOnly
                  />
                </div>
                {/* {Updated Date} */}
                <div className="col-md-2">
                  <label htmlFor="updateDate" className="form-label">
                    Update Date
                  </label>
                  <input
                    type="text"
                    defaultValue={userData.updateDate}
                    className="form-control"
                    id="updateDate"
                    readOnly
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="updateBy" className="form-label">
                    Update By
                  </label>
                  <input
                    type="text"
                    defaultValue={userData.updateBy}
                    className="form-control"
                    id="updateBy"
                    readOnly
                  />
                </div>
                <div className="col-md-3">
                  <label htmlFor="createBy" className="form-label">
                    Create By
                  </label>
                  <input
                    type="text"
                    defaultValue={userData.createBy}
                    className="form-control"
                    id="createBy"
                    readOnly
                  />
                </div>
                {/* {Updated Date} */}
                {/* {First name} */}
                <div className="col-md-4">
                  <label htmlFor="firstname" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    defaultValue={userData.firstName}
                    className="form-control"
                    id="firstname"
                    readOnly
                  />
                </div>
                {/* {First Name} */}
                {/* {Last Name} */}
                <div className="col-md-4">
                  <label htmlFor="lastname" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    defaultValue={userData.lastName}
                    className="form-control"
                    id="lastname"
                    readOnly
                  />
                </div>
                {/* {Last Name} */}
                {/* {userName} */}
                <div className="col-md-4">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="text"
                      defaultValue={userData.username}
                      className="form-control"
                      id="username"
                      aria-describedby="inputGroupPrepend"
                      readOnly
                    />
                  </div>
                </div>
                {/* {userName} */}
                {/* {Email} */}
                <div className="col-md-4">
                  <label htmlFor="emailID" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={userData.emailId}
                    className="form-control"
                    id="emailID"
                    readOnly
                  />
                </div>
                {/* {Email} */}
                {/* {PhoneNumber} */}
                <div className="col-md-4">
                  <label htmlFor="phoneno" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    defaultValue={userData.phoneNumber}
                    className="form-control"
                    id="phoneno"
                    readOnly
                  />
                </div>
                {/* {PhoneNumber} */}
                {/* {Com[panyName]} */}
                <div className="col-md-4">
                  <label htmlFor="companyname" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    defaultValue={userData.companyName}
                    className="form-control"
                    id="companyname"
                    readOnly
                  />
                </div>
                {/* {companyName} */}
                {/* {LogoPath} */}
                <div className="col-md-12">
                  <label htmlFor="logoPath" className="form-label">
                    Logo Path
                  </label>
                  <input
                    type="text"
                    className="form-select"
                    defaultValue={userData.logoPath}
                    id="logoPath"
                    readOnly
                  ></input>
                </div>
                {/* {Logopath} */}
                {/* {Footer} */}
                <div className="col-md-12">
                  <label htmlFor="footer" className="form-label">
                    Footer
                  </label>
                  <input
                    type="text"
                    className="form-select"
                    defaultValue={userData.footer}
                    id="footer"
                    readOnly
                  ></input>
                </div>
                {/* {Footer} */}
                {/* {Password} */}
                <div className="col-md-12">
                  <label htmlFor="paswd" className="form-label">
                    Password
                  </label>
                  <div className="input-group">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      defaultValue={userData.password}
                      class="form-control"
                      id="paswd"
                      readOnly
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
              </div>
            </form>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="user-form">
      {isLoading ? (
        <p>Loading user data...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        renderForm()
      )}
    </div>
  );
};

export default UserDetails;
