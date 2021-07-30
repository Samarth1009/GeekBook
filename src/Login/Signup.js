import React, { useState, useEffect } from "react";
import "./Signup.css";

function Signup() {
  const [username, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  useEffect(() => {
    console.log(`username = ${username} password = ${password} ${email}`);
  }, [username, email, password]);
  return (
    <div className="signup">
      <form className="signup_container">
         <h1 style={{textAlign:"center",marginBottom:"20px"}}>SignUp</h1>
    
         <label className="signup_label" for="username">Username</label>
         <input className="signup_input" type="text" placeholder="Enter Username" name="username" required></input>        

         <label className="signup_label" for="name">Name</label>
         <input className="signup_input" type="text" placeholder="Enter Name" name="name" required></input> 

         <label className="signup_label" for="email">Email</label>
         <input className="signup_input" type="text" placeholder="Enter Email" name="email" required></input>
    
         <label className="signup_label" for="passsword">Password</label>
         <input className="signup_input" type="password" placeholder="Enter Password" name="password" required></input>

         <label className="signup_label" for="country">Country</label>
         <input className="signup_input" type="text" placeholder="Enter Country" name="country" required></input>

         <label className="signup_label" for="state">State</label>
         <input className="signup_input" type="text" placeholder="Enter State" name="state" required></input>

         <label className="signup_label" for="city">City</label>
         <input className="signup_input" type="text" placeholder="Enter City" name="city" required></input>

         <label className="signup_label" for="Profession">Profession</label>
         <input className="signup_input" type="text" placeholder="Enter Profession" name="profession" required></input>

         <label className="signup_label" for="institution">Institution</label>
         <input className="signup_input" type="text" placeholder="Enter Institution" name="institution" required></input>
         
         <input type="submit" value="Submit" className="signup_btn"/>
       
      </form>
    </div>
  );
}
export default Signup;
