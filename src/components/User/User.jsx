import React from "react";
import "./User.css";
import UsersDataTable from "./UsersDataTable";

const User = () => {
  return (
    <>
      <div className="container-fluid dataTable">
        <div className="container dataTableBox p-5">
          <table
            id="example"
            className="table table-hover text-center"
            style={{ width: "100%" }}
          >
            <thead style={{backgroundColor:'#ebe9e9'}}>
              <tr>
                <th>PARENT ID</th>
                <th>USER ID</th>
                <th>FIRST NAME</th>
                <th>LAST NAME</th>
                <th>EMAIL ID</th>
                <th>PHONE NO</th>
                <th>USER NAME</th>
              </tr>
            </thead>
            <tbody>
              <UsersDataTable />
            </tbody>
            {/* <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
            </tr>
        </tfoot> */}
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
