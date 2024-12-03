import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./UpdateRole.css"
import { MyContext } from "../../../App";

const UpdateRole = () => {
  const context = useContext(MyContext);
  const [userData, setUserData] = useState(context.initialData);
  const [formData, setFormData] = useState({
    name:'',
    menuIcon:''
  });

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
        `http://103.170.58.161:8080/whatsapp/role/update`,
        formData,
        axiosHeader
      );
      console.log("Response Update == ", response.data);
      alert("Data updated successfully !")
    } catch (err) {
      alert("Error", err);
    }
  };

  return (
    <div className="container-fluid register mt-0">
      <div className="card shadow border-0 p-3 mt-5 head ">
        <h3 className="headingRigister">Role Update Form</h3>
      </div>
      <div className="container registerForm">
              <form className="g-3"  onSubmit={updateData}>
                <div className="row g-2 m-auto px-5">
                    {/* {name} */}
                  <div className="col-md-12">
                    <label htmlFor="id" className="form-label">
                    Id
                    </label>
                    <input
                      type="text"
                      name="id"
                      value={formData.id}
                      className="form-control"
                      id="id"
                      onChange={handleChange}
                    />
                  </div>
                  {/* {name} */}
                  <div className="col-md-12">
                    <label htmlFor="accountId" className="form-label">
                    Account Id
                    </label>
                    <input
                      type="text"
                      name="accountId"
                      value={formData.accountId}
                      className="form-control"
                      id="accountId"
                      onChange={handleChange}
                    />
                  </div>
                  {/* {name} */}
                  <div className="col-md-12">
                    <label htmlFor="roleName" className="form-label">
                    Role Name
                    </label>
                    <input
                      type="text"
                      name="roleName"
                      value={formData.roleName}
                      className="form-control"
                      id="roleName"
                      onChange={handleChange}
                    />
                  </div>

                  {/* {Menu Icon} */}
                  <div className="col-md-12">
                    <label htmlFor="roleDescription" className="form-label">
                    Role Description
                    </label>
                    <input
                      type="text"
                      name="roleDescription"
                      value={formData.roleDescription}
                      className="form-control"
                      id="roleDescription"
                      onChange={handleChange}
                    />
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

export default UpdateRole;
