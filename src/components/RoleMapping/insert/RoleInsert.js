import React, { useState } from "react";
import "./RoleInsert.css";
import axios from "axios";

const RoleInsert = () => {
  const [roleName, setRoleName] = useState("");
  const [accountId, setAccountId] = useState("");
  const [roleDescription, setRoleDescription] = useState("");
  const [state, setState] = useState("");

  const items = {
    roleName,
    accountId,
    roleDescription,
  };

  const createUser = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // notice the Bearer before your token
    },
  };

  const fnRoleRegister = async () => {
    console.log("Items Objects ", items);
    try {
      const result = await axios.post(
        "http://103.170.58.161:8080/whatsapp/role/",
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
      <div className="container-fluid register mt-0">
        <div className="card shadow border-0 p-3 mt-5 head ">
          <h3 className="headingRigister">Role Insert Form</h3>
        </div>
        <div className="container registerForm">
          <form className="g-3">
            <div className="row g-2 m-auto px-5">
              <div className="col-md-12">
                <label htmlFor="accountId" className="form-label">
                Account Id
                </label>
                <input
                  type="text"
                  defaultValue={accountId}
                  onChange={(e) => {
                    setAccountId(e.target.value);
                  }}
                  className="form-control"
                  id="accountId"
                  autoFocus
                  required
                />
              </div>

              <div className="col-md-12">
                <label htmlFor="roleName" className="form-label">
                  Role Name
                </label>
                <input
                  type="text"
                  defaultValue={roleName}
                  onChange={(e) => {
                    setRoleName(e.target.value);
                  }}
                  className="form-control"
                  id="roleName"
                  autoFocus
                  required
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="roleDescription" className="form-label">
                Role Description
                </label>
                <input
                  type="text"
                  defaultValue={roleDescription}
                  onChange={(e) => {
                    setRoleDescription(e.target.value);
                  }}
                  className="form-control"
                  id="roleDescription"
                  required
                />
              </div>

              <div className="col-12">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={fnRoleRegister}
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

export default RoleInsert;
