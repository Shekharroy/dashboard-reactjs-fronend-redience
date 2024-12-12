import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./UpdatePage.css"
import { MyContext } from "../../../App";

const UpdatePage = () => {
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
        `http://103.170.58.161:8080/whatsapp/page/update`,
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
    <div className="container-fluid register mt-0" style={{ maxHeight: "20%", paddingBottom: "2%" }}>
      <div className="card shadow border-0 p-3 mt-5 head rounded ">
        <h3 className="headingRigister">Page Update Form</h3>
      </div>
      <div className="container registerForm rounded">
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
                  {/* {name} */}
                  <div className="col-md-12">
                    <label htmlFor="description" className="form-label">
                    Description
                    </label>
                    <input
                      type="text"
                      name="description"
                      value={formData.description}
                      className="form-control"
                      id="description"
                      onChange={handleChange}
                    />
                  </div>

                  {/* {Menu Icon} */}
                  <div className="col-md-12">
                    <label htmlFor="pageIcon" className="form-label">
                    Page Icon
                    </label>
                    <input
                      type="text"
                      name="pageIcon"
                      value={formData.pageIcon}
                      className="form-control"
                      id="pageIcon"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="pageUrl" className="form-label">
                    Page Url
                    </label>
                    <input
                      type="text"
                      name="pageUrl"
                      value={formData.pageUrl}
                      className="form-control"
                      id="pageUrl"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="menuId" className="form-label">
                    Menu Id
                    </label>
                    <input
                      type="text"
                      name="menuId"
                      value={formData.menuId}
                      className="form-control"
                      id="menuId"
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

export default UpdatePage;
