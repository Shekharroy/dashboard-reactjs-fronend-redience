import React, {useState } from "react";
import "./InsertMenu.css"
import axios from "axios";

const InsertMenu = () => {

  const [name, setName] = useState("");
  const [menuIcon, setMenuIcon] = useState("")
  const [state, setState] = useState("");

  const items = {
    name,
    menuIcon
  };

  const createUser = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // notice the Bearer before your token
    },
  };

  const fnRegister = async () => {
    console.log("Items Objects ", items);
    try {
      const result = await axios.post(
        "http://103.170.58.161:8080/whatsapp/menu/",
        items,
        createUser
      );
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
      console.warn("result ", result);
      const newUser = { ...result.data };
      setState(newUser);
      localStorage.setItem("Inser-Menu", JSON.stringify(newUser));
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
        <h3 className="headingRigister">Menu Insert Form</h3>
      </div>
        <div className="container registerForm">
          <form className="g-3">
            <div className="row g-2 m-auto px-5">
              <div className="col-md-12">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  defaultValue={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="form-control"
                  id="Name"
                  autoFocus
                  required
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="menuIcon" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  defaultValue={menuIcon}
                  onChange={(e) => {
                    setMenuIcon(e.target.value);
                  }}
                  className="form-control"
                  id="menuIcon"
                  required
                />
              </div>

              <div className="col-12">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={fnRegister}
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

export default InsertMenu;
