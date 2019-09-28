import React from "react";
import "./styles.scss";

const CheckBox = () => (
    <label htmlFor="check-box-123" className="checkbox-container">
        <input type="checkbox" id="check-box-123" />
        <span className="checkmark" />
    </label>
);

export default CheckBox;
