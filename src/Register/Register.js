import React from 'react';
import './Register.css'
import { useState } from "react";

export default function Register() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [firstMame, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    let handleSubmit=async(e)=>{
        e.preventDefault();
        try{
          let res=await fetch("https://localhost:7085/api/UserManager/AddUser",{
            method:"POST",
            body:JSON.stringify({
              UserName:userName,
              Password:password,
              FirstName:firstMame,
              LastName:lastName,
            }),
        });
        let resJson= res.status;
        if(resJson===200)
        {
            setFirstName("");
            setLastName("");
            setUserName("");
            setPassword("");
            setMessage("Added user successfully");
        }
        else
        {
          setMessage("Error in Adding user");
        }
      }
        catch(err)
        {      
          console.log(err);
        }
      }
    return(
        <form onSubmit={handleSubmit}>
        <div>
          <h1>Add User</h1>
            <table>
            <tr>
               <td>
                    First Name:
                </td>
                <td>
                 <input name="firstname" type="text"     placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                </td>
            </tr>
            <tr> 
                <td>   Last Name: </td>
                <td> <input name="lastname" type="text" placeholder="LastName" onChange={(e) => setLastName(e.target.value)}/> </td>
            </tr>
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
                  <p align="center">  <button type="submit">Submit</button></p>
              </label>
            </div>
            <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      )
}
