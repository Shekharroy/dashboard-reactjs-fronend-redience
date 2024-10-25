import React, { useState } from "react";
import axios from "axios";

const Test = () => {
  const [response, setResponse] = useState(null);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const postData = {
    userName,
    password
  };

  const axiosConfig = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const callApi = async () => {
    try {
      const res = await axios.post(
        "http://103.170.58.161:8080/whatsapp/auth/login",
        postData,
        axiosConfig
      );
      console.log("RESPONSE RECEIVED:", res);
      setResponse(res.data); // Save the response to state or handle it as needed
      localStorage.setItem("jwtToken", res.data.jwtToken); // Assuming jwtToken is in res.data
    } catch (error) {
      console.error("AXIOS ERROR:", error);
    }
  };

  return (
    <div>

        <input type="text" value={userName} onChange={(e)=>{setUserName(e.target.value)}}/>
        <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      <button onClick={callApi}>Call API</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default Test;