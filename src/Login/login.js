import React from 'react'
import styles from './login.css';

const login = () => {
return(
    <div>
     <form action="" class="container">
         <h1 >GeekBook</h1>
         Username
         <div><input type="text" size="50"/></div>
         Password
         <div><input type="password" /></div>
         <div><input type="checkbox" />Remember me</div>
         <button>Sign In</button>
     </form>
    </div>
)
} 
export default login