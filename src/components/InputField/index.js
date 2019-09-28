import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const InputField = ({ heading, type, placeholder, id, handleChange }) => {
    return (
        <div className="input-field">
            <div>{heading}</div>
            <div>
                <input
                  type={type}
                  placeholder={placeholder}
                  id={id}
                  onChange={e => handleChange(e.target.value)}
                />
            </div>
        </div>
    );
};

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    heading: PropTypes.string.isRequired
};
export default InputField;
