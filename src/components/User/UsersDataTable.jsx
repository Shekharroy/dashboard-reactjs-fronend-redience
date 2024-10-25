import React, { useState, useEffect } from "react";

const userApis = 'https://fakestoreapi.com/usersjwtToken'

const UsersDataTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersData(userApis);
  },[]);

  const getUsersData = async (url) => {
    try {
      let response = await fetch(url);
      response = await response.json();

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
      }

      if (response.length > 0) {
        setUsers(response); // we are replacing the old array(empty) with new Array(users)
      }
    } catch (e) {
      console.error("Something Wrong ", e);
    }
  };

  return <>
  {
    users.map((data)=>{
        const {id, username, email, name:{firstname, lastname}, phone} = data;
        return(
            <tr>
                <td>{id}</td>
                <td>{id}</td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{username}</td>
              
            </tr>
        )
            
    })
  }
  </>;
};

export default UsersDataTable;
