import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyContext } from "../../App";

const UserProfile = ({data}) => {
  // Initialize state to hold the original data and edited field value.
  const context = useContext(MyContext)
  const [userData, setUserData] = useState(data);
  const [tempField, setTempField] = useState(); // Temporary storage for the field being edited
  useEffect(()=>{
    alert("userData == ", data);
    // setTempField(userData.firstName);
    // alert("", tempField);
  },[])

  // Function to handle edit click; it stores the value in tempField state.
  // const handleEditClick = () => {
  //   setTempField(userData.firstName); // Replace 'fieldName' with the actual key in userData
  // };
  

  // Update the tempField state as user modifies the value in an input box.
  const handleInputChange = (e) => {
    setTempField({
      ...userData,
      [e.target.name]: e.target.value
    });

    
  };

  const axiosHeader = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwtToken")}`, // notice the Bearer before your token
      "Content-Type": "application/json",
    },
  };

  // Function to send the updated data to the server.
  const handleUpdateClick = async () => {
    try {
      // const updatedData = { ...userData, tempField }; // Merge updated field into userData

      // Send a PUT request to the API
      const response = await axios.post(
        "http://103.170.58.161:8080/whatsapp/user/update",
        axiosHeader,
        userData
      );

      // Update the userData state with the server response if needed
      setUserData(response.data);
      alert("Data updated successfully!");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div style={{marginTop:"120px", marginLeft: "200px"}}>
      <h3>User Profile</h3>
      <p>Field Name: {userData}</p> {/* Display current field data */}
      {/* Button to initiate the edit process */}
      {/* <button onClick={handleEditClick}>Edit</button> */}
      {/* Conditional rendering for input to modify field */}
      {/* {!tempField && ( */}
        <div>
          <input
            type="text"
            value={userData}
            onChange={handleInputChange} // Capture edits in input
          />
          <button onClick={handleUpdateClick}>Update</button>{" "}
          {/* Update button */}
        </div>
      {/* )} */}
    </div>
  );
};

export default UserProfile;
