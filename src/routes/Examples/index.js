import React from "react";
import { Link } from "react-router-dom";

export default function Examples() {
    return (
        <div className="wrapper-example">
            <h2> React sample examples </h2>
            <ul>
                <li>
                    <Link to="lazy-load">Lazy-loading Example .</Link>
                </li>
                <li>
                    <Link to="dynamic-import">Dynamic Import Example .</Link>
                </li>
                <li>
                    <Link to="hooks">Hooks Example .</Link>
                </li>
            </ul>
        </div>
    );
}
