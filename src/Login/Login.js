import React, { Component } from "react";
import styles from "./Login.css";
import ReactDom from "react-dom";
import GoogleLogin from "react-google-login";
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GitHubLogin from "react-github-login";
import { LinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import { Link } from "react-router-dom";

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
      <form action="" className="container">
        <h1 style={{ textAlign: "center" }}>GeekBook</h1>
        Username
        <div>
          <input className="login_input" type="text" size="50" />
        </div>
        Password
        <div>
          <input className="login_input" type="password" />
        </div>
        <div>
          <input type="checkbox" />
          Remember me
        </div>
        <input type="submit" value="Login" className="login_btn" />
        Not having an account? &nbsp;
        <Link to="/signUp">sign up</Link>
        <h6 className="login_h6">
          <span id="h6_span">or</span>
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
