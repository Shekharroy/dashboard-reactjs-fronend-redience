import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./UpdateMenu.css";
import { MyContext } from "../../../App";

const UpdateMenu = () => {
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
        `http://103.170.58.161:8080/whatsapp/menu/update`,
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
        <h3 className="headingRigister">Menu Update Form</h3>
      </div>
      <div className="container registerForm">
              <form className="g-3"  onSubmit={updateData}>
                <div className="row g-2 m-auto px-5">
                  {/* {name} */}
                  <div className="col-md-12">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      className="form-control"
                      id="name"
                      onChange={handleChange}
                    />
                  </div>
                  {/* {First Name} */}
                  {/* {Menu Icon} */}
                  <div className="col-md-12">
                    <label htmlFor="menuIcon" className="form-label">
                      Menu Icon
                    </label>
                    <input
                      type="text"
                      name="menuIcon"
                      value={formData.menuIcon}
                      className="form-control"
                      id="menuIcon"
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

export default UpdateMenu;
