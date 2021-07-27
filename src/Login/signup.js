import React, { useState, useEffect } from "react";
import "./signup.css";

function Signup() {
  const [username, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  useEffect(() => {
    console.log(`username = ${username} password = ${password} ${email}`);
  }, [username, email, password]);
  return (
    <div>
      <form action="" class="container">
        <h1>Signup</h1>
        Username
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            size="50"
          />
        </div>
        Email address
        <div>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        Password
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
export default Signup;
