import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import "../../assets/styles/bootstrap/bootstrap.scss";
import { signupAction } from "../../store/actions";
import InputField from "../../components/InputField";
import Header from "../../components/Header";
import Checkbox from "../../components/Checkbox";
import "./styles.scss";

const Signup = ({ signup }) => {
  const [name, handleName] = useState("");
  const [email, handleEmail] = useState("");
  const [organisation, handleOrganisation] = useState("");
  const [password, handlePassword] = useState("");

  const handleSubmit = () => {
    signup(name, email, organisation, password);
  };
  return (
    <div>
      <Header hide previous />
      <div className="signup-parent">
        <div className="signup-container">
          <div className="signup-title">
            <div className="medium-text">GET STARTED</div>
            <div className="large-text">Create new account</div>
          </div>
          <InputField
            type="text"
            placeholder="username"
            id="username"
            handleChange={handleName}
            heading="USER NAME"
          />
          <InputField
            type="text"
            placeholder="email"
            id="email"
            handleChange={handleEmail}
            heading="EMAIL ADDRESS"
          />
          <InputField
            type="text"
            placeholder="organisation"
            id="organisation"
            handleChange={handleOrganisation}
            heading="ORGANISATION"
          />
          <InputField
            type="password"
            placeholder="password"
            id="password"
            handleChange={handlePassword}
            heading="PASSWORD"
          />

          <div className="check-box-parent">
            <Checkbox />
          </div>
          <Button color="info" onClick={handleSubmit}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

Signup.propTypes = {
  signup: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  name: state.signupReducer.name,
  email: state.signupReducer.email,
  password: state.signupReducer.password
});

const mapDispatchToProps = dispatch => ({
  signup: (name, email, organisation, password) => {
    dispatch(
      signupAction({
        name,
        email,
        organisation,
        password
      })
    );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
