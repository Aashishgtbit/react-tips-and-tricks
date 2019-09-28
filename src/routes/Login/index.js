import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { loginAction } from "../../store/actions";
import InputField from "../../components/InputField";
import Header from "../../components/Header";
import google from "../../assets/images/google.png";
import "./styles.scss";
import "../../assets/styles/bootstrap/bootstrap.scss";

const Login = ({ login }) => {
  const [email, handleEmail] = useState("");
  const [password, handlePassword] = useState("");

  const handleSubmit = () => {
    login(email, password);
  };
  return (
    <div>
      <Header hide={false} previous={false} />
      <div className="login-parent">
        <div className="login-container">
          <div className="login-title">
            <div className="medium-text">MANAGE YOUR SAAS VENDORS</div>
            <div className="large-text">Sign in to Cloudeagle.AI</div>
          </div>
          <InputField
            type="text"
            placeholder="email"
            id="email"
            handleChange={handleEmail}
            heading="EMAIL ADDRESS"
          />

          <InputField
            type="password"
            placeholder="password"
            id="password"
            handleChange={handlePassword}
            heading="PASSWORD"
          />
          <Button color="info" onClick={handleSubmit}>
            SIGN IN
          </Button>
          <div>or</div>

          <div className="login-bottom-btn">
            <Button id="google">
              <img src={google} alt="google" />
              Sign in with google
            </Button>
            <Button>
              <img src={google} alt="google" />
              Sign in with Okta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  email: state.loginReducer.email,
  password: state.loginReducer.password
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => {
    dispatch(loginAction({ email, password }));
  }
});

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
