import React, { Component } from "react";
import styles from "./Login.css";
import ReactDom from "react-dom";
import GoogleLogin from "react-google-login";
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GitHubLogin from "react-github-login";
import { LinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";

const responseFacebook = (response) => {
  console.log(response);
};
const responseGoogle = (response) => {
  console.log(response);
  // console.log(response.profileObj);
};

const onSuccess = (response) => console.log(response);
const onFailure = (response) => console.error(response);

const Login = () => {
  return (
    <div className="login">
      <form action="" class="container">
        <h1>GeekBook</h1>
        Username
        <div>
          <input type="text" size="50" />
        </div>
        Password
        <div>
          <input type="password" />
        </div>
        <div>
          <input type="checkbox" />
          Remember me
        </div>
        <button>Sign In</button>
        Not having an account? &nbsp;
        <a href="#">sign up</a>
        <h6>
          <span>or</span>
        </h6>
        <div className="extra">
          <GoogleLogin
            className="google"
            clientId="576795438351-pmcgd8452klkcdtf4k72024hnchkdjdl.apps.googleusercontent.com"
            buttonText="Google"
            //  onSuccess={this.reponseGoogle}
            //  onFailure={this.reponseGoogle}
            cookiePolicy={"single_host_origin"}
          />

          <FacebookLogin
            appId="915284599319290"
            autoLoad
            callback={responseFacebook}
            render={(renderProps) => (
              <button class="fb" onClick={renderProps.onClick}>
                <span>Facebook</span>
              </button>
            )}
          />
          <LinkedIn
            clientId="81lx5we2omq9xh"
            //onFailure={this.handleFailure}
            //onSuccess={this.handleSuccess}
            redirectUri="http://localhost:3000/"
            renderElement={({ onClick, disabled }) => (
              <button
                className="linkedin"
                onClick={onClick}
                disabled={disabled}
              >
                Linkedin
              </button>
            )}
          />
          <GitHubLogin
            className="github"
            clientId="ac56fad434a3a3c1561e"
            onSuccess={onSuccess}
            onFailure={onFailure}
            buttonText="Github"
          />
        </div>
      </form>
    </div>
  );
};
export default Login;
