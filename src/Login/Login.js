import React from 'react';
import { useState } from "react";
import './Login.css'
class ButtonLogin extends React.Component {
    handleEvent()
    {
        window.open('/Register');
    }
    render() {
      return (
          <button onClick={this.handleEvent}> Register</button>
      );
    }
  }

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  let handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      let res=await fetch("https://localhost:7085/api/UserManager/Validate",{
        method:"POST",
        body:JSON.stringify({
          UserName:userName,
          Password:password,
        }),
    });
    let resJson= res.status;
    if(resJson===200)
    {
        setUserName("");
        setPassword("");
        setMessage("user login successfully");
    }
    else
    {
      setMessage("Error in Login");
    }
  }
    catch(err)
    {      
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <h1>Login</h1>
        <table>
        <tr>
             <td>User Name: </td>
             <td> <input type="text" placeholder="UserName" onChange={(e) => setUserName(e.target.value)}/></td>
        </tr>
        <tr>
            <td> Password: </td> 
            <td> <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/></td>
        </tr>
           
          </table>
          <label>
              <p align="center">  <button type="submit">Submit</button><ButtonLogin/></p>
              
              
          </label>
        </div>
        <div className="message">{message ? <p>{message}</p> : null}</div>
    </form>
  );
}
