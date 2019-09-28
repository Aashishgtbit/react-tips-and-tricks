import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.png";
import "./styles.scss";

const Header = ({ previous, hide, history }) => (
    <div className="header-parent">
        <div className="header-left">
            {previous ? (
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  className="back-btn"
                  onClick={() => window.history.back()}
                />
            ) : null}
            <img src={logo} alt="logo" />
            CLOUDEAGLE.AI
        </div>
        {hide ? null : (
            <div className="header-right">
                <div className="header-right-text">
                    {" "}
                    Don &apos; t have an account?
                </div>
                <Button color="info" onClick={() => history.push("/signup")}>
                    Get Started
                </Button>
            </div>
        )}
    </div>
);

Header.propTypes = {
    previous: PropTypes.bool.isRequired,
    hide: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired
};
export default withRouter(Header);
