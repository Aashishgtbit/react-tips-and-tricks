import React from "react";
import "./style.scss";

const Loader = () => {
    return (
        <div className="wrapper-loader">
            <div className="eye-animation-wrapper">
                <div className="eye-animation" />
                <div>Loading ...</div>
            </div>
        </div>
    );
};

export default Loader;
