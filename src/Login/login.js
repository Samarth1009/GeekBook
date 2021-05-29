import React,{Component} from 'react'
import styles from './login.css';
import ReactDom from 'react-dom';
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const responseFacebook = (response) => {
  console.log(response);
}

const login = () => {

 const responseGoogle=response=>{
    console.log(response);
    // console.log(response.profileObj);
};

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
         Not having an account? &nbsp;<a href="">sign up</a>
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
    <button class="fb" onClick={renderProps.onClick}><span>FaceBook</span></button>
  )}
/>
         </div>

     </form>
    </div>
)
} 
export default login