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
    <div ClassName="signup">
      <form ClassName="signup_container">
         
         <label for="username">Username</label>
         <input type="text" placeholder="Enter Username" name="username" required></input>        

         <label for="name">Name</label>
         <input type="text" placeholder="Enter Name" name="name" required></input> 

         <label for="email">Email</label>
         <input type="text" placeholder="Enter Email" name="email" required></input>
    
         <label for="passsword">Password</label>
         <input type="password" placeholder="Enter Password" name="password" required></input>

         <label for="country">Country</label>
         <input type="text" placeholder="Enter Country" name="country" required></input>

         <label for="state">State</label>
         <input type="text" placeholder="Enter State" name="state" required></input>

         <label for="city">City</label>
         <input type="text" placeholder="Enter City" name="city" required></input>

         <label for="Profession">Profession</label>
         <input type="text" placeholder="Enter Profession" name="profession" required></input>

         <label for="institution">Institution</label>
         <input type="text" placeholder="Enter Institution" name="institution" required></input>
    
         <button type="button" ClassName="submit_btn">SUBMIT</button>   
      </form>
    </div>
  );
}
export default Signup;
