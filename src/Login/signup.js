import React from 'react'
import styles from './signup.css';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';

const responseFacebook = (response) => {
  console.log(response);
}
 const responseGoogle=(response)=>{
    console.log(response);
    // console.log(response.profileObj);
}

const signup = () =>{
    return(
        <div>
     <form action="" class="container">
         <h1 >Signup</h1>
         Username
         <div><input type="text" size="50"/></div>
         Email address
         <div><input type="text" /></div>
         Password
         <div><input type="password" /></div>
         <button>Sign Up</button>

         <h6><span>or</span></h6>
         <div>
         <GoogleLogin className="google"
         clientId="576795438351-pmcgd8452klkcdtf4k72024hnchkdjdl.apps.googleusercontent.com"
         buttonText="Google"
         //  onSuccess={this.reponseGoogle}
         //  onFailure={this.reponseGoogle}
         cookiePolicy={'single_host_origin'}
         
         />
          {/* <FacebookLogin className="fb"
    appId="915284599319290"
    autoLoad={true}
    fields="name,email,picture"
    //onClick={componentClicked}
    callback={responseFacebook} 
    /> */}
    <FacebookLogin 
  appId="915284599319290"
  autoLoad
  callback={responseFacebook}
  render={renderProps => (
    <button class="fb" onClick={renderProps.onClick}><span>Facebook</span></button>
  )}
/>
         </div>


     </form>
    </div>
    )
}
export default signup