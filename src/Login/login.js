import React from 'react'
import styles from './login.css';

const login = () => {
return(
    <div>
     <form action="" class="container">
         <h1 >Login</h1>
         Username
         <div><input type="text" size="50"/></div>
         Password
         <div><input type="password" /></div>
         <button>Sign In</button>
     </form>
    </div>
)
} 
export default login