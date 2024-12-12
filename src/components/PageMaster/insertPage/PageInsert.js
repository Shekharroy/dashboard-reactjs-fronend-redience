import React, { useState } from "react";
import "./PageInsert.css";
import axios from "axios";

const PageInsert = () => {
  const [name, setName] = useState("");
  const [menuId, setMenuId] = useState("");
  const [pageIcon, setPageIcon] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("");

  const items = {
    name,
    menuId,
    pageIcon,
    pageUrl,
    description
  };

  const createUser = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // notice the Bearer before your token
    },
  };

  const fnPageRegister = async () => {
    console.log("Items Objects ", items);
    try {
      const result = await axios.post(
        "http://103.170.58.161:8080/whatsapp/page/",
        items,
        createUser
      );
      console.warn("result ", result);
      const newUser = { ...result.data };
      setState(newUser);
      localStorage.setItem("Insert-Role", JSON.stringify(newUser));
      alert("Role Inserted successfully !")
      return state;
    } catch (error) {
      console.log("Failed to insert users to:", error);
      // Display an error message to the user, or retry the request
    }
  };

  return (
    <>
      <div className="container-fluid register mt-0" style={{ maxHeight: "20%", paddingBottom: "2%" }}>
        <div className="card shadow border-0 p-3 mt-5 head rounded ">
          <h3 className="headingRigister">Page Insert Form</h3>
        </div>
        <div className="container registerForm rounded">
          <form className="g-3">
            <div className="row g-2 m-auto px-5">
              <div className="col-md-12">
                <label htmlFor="name" className="form-label">
                Name
                </label>
                <input
                  type="text"
                  defaultValue={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="form-control"
                  id="name"
                  autoFocus
                  required
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="menuId" className="form-label">
                Menu Id
                </label>
                <input
                  type="menuId"
                  defaultValue={menuId}
                  onChange={(e) => {
                    setMenuId(e.target.value);
                  }}
                  className="form-control"
                  id="menuId"
                  autoFocus
                  required
                />
              </div>

              <div className="col-md-12">
                <label htmlFor="pageIcon" className="form-label">
                  Page Icon
                </label>
                <input
                  type="text"
                  defaultValue={pageIcon}
                  onChange={(e) => {
                    setPageIcon(e.target.value);
                  }}
                  className="form-control"
                  id="pageIcon"
                  autoFocus
                  required
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="pageUrl" className="form-label">
                Page Url
                </label>
                <input
                  type="text"
                  defaultValue={pageUrl}
                  onChange={(e) => {
                    setPageUrl(e.target.value);
                  }}
                  className="form-control"
                  id="pageUrl"
                  required
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="description" className="form-label">
                Description
                </label>
                <input
                  type="text"
                  defaultValue={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  className="form-control"
                  id="description"
                  required
                />
              </div>

              <div className="col-12">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={fnPageRegister}
                >
                  INSERT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PageInsert;
