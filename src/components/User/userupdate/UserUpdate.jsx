import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./UserUpdate.css";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { MyContext } from "../../../App";

const UserUpdate = () => {
  const context = useContext(MyContext);
  const [userData, setUserData] = useState(context.initialData);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    emailId:'',
    phoneNumber:'',
    companyName:'',
    logoPath:'',
    footer:'',
    password:''
  });
  // const [state, setState] = useState({});

  useEffect(() => {
    console.log("context.initialData ==> ", context.initialData);
    const newArray = userData.map((item) => {
      if (item.id === context.selectedId) {
        console.warn("item == item ", item);
        setFormData(item);
        return item;
      }
    });
    console.warn("formData == 000 ", newArray);
    
  }, []);

  const axiosHeader = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // notice the Bearer before your token
      "Content-Type": "application/json",
    },
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(`Name == ${name} and Value == ${value} `)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const updateData = async (e) => {
    e.preventDefault();
    console.log("formDataformData == ", formData);
    try {
      const response = await axios.post(
        `http://103.170.58.161:8080/whatsapp/user/update`,
        formData,
        axiosHeader
      );
      console.log("Response Update == ", response.data);
      alert("Data updated successfully !")
    } catch (err) {
      alert("Error", err);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container-fluid register mt-0">
      <div className="card shadow border-0 p-3 mt-5 head ">
        <h3 className="headingRigister">User Update Form</h3>
      </div>
      <div className="container registerForm">
      <h1>{formData.firstName}</h1>
        {/* {userData.map((item) =>
            item.id === context.selectedId && ( */}
              <form className="g-3"  onSubmit={updateData}>
                <div className="row g-2 m-auto px-5">
                  {/* parentid */}
                  <div className="col-md-1">
                    <label htmlFor="parentid" className="form-label">
                      Parent ID
                    </label>
                    <input
                      type="text"
                      name="parentId"
                      value={formData.parentId}
                      className="form-control"
                      id="parentid"
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
                      name="id"
                      value={formData.id}
                      className="form-control"
                      id="Ids"
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
                      name="createDate"
                      value={formData.createDate}
                      className="form-control"
                      id="createDate"
                    />
                  </div>
                  {/* {Updated Date} */}
                  <div className="col-md-2">
                    <label htmlFor="updateDate" className="form-label">
                      Update Date
                    </label>
                    <input
                      type="text"
                      name="updateDate"
                      value={formData.updateDate}
                      className="form-control"
                      id="updateDate"
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="updateBy" className="form-label">
                      Update By
                    </label>
                    <input
                      type="text"
                      name="updateBy"
                      value={formData.updateBy}
                      className="form-control"
                      id="updateBy"
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="createBy" className="form-label">
                      Create By
                    </label>
                    <input
                      type="text"
                      name="createBy"
                      value={formData.createBy}
                      className="form-control"
                      id="createBy"
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
                      name="firstName"
                      value={formData.firstName}
                      className="form-control"
                      id="firstname"
                      onChange={handleChange}
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
                      name="lastName"
                      value={formData.lastName}
                      className="form-control"
                      id="lastname"
                      onChange={handleChange}
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
                        name="username"
                        value={formData.username}
                        className="form-control"
                        id="username"
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
                      name="emailId"
                      value={formData.emailId}
                      className="form-control"
                      id="emailID"
                      onChange={handleChange}
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
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      className="form-control"
                      id="phoneno"
                      onChange={handleChange}
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
                      name="companyName"
                      value={formData.companyName}
                      className="form-control"
                      id="companyname"
                      onChange={handleChange}
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
                      name="logoPath"
                      className="form-select"
                      value={formData.logoPath}
                      id="logoPath"
                      onChange={handleChange}
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
                      name="footer"
                      className="form-select"
                      value={formData.footer}
                      id="footer"
                      onChange={handleChange}
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
                        name="password"
                        value={formData.password}
                        class="form-control"
                        id="paswd"
                        onChange={handleChange}
                      />
                      <span
                        onClick={togglePasswordVisibility}
                        className="input-group-text"
                        style={{
                          marginLeft: "0px",
                          cursor: "pointer",
                        }}
                      >
                        {passwordVisible ? (
                          <IoEyeOffOutline />
                        ) : (
                          <IoEyeOutline />
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary"
                      type="submit"
                    >
                      UPDATE
                    </button>
                  </div>
                </div>
              </form>
            {/* )
        )} */}
      </div>
    </div>
  );
};

export default UserUpdate;
