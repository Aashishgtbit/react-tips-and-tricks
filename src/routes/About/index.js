import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    counterIncrementAction,
    counterDecrementAction
} from "../../store/actions";

const About = ({ count }) => (
    <div>
        <h1>About</h1>
        <h2>the current value of counter is :</h2>
        <span>{count}</span>
    </div>
);
const mapStateToProps = state => ({
    count: state.counterReducer
});

const mapDispatchToProps = dispatch => ({
    increment: count => {
        dispatch(counterIncrementAction(count));
    },
    decrement: count => {
        dispatch(counterDecrementAction(count));
    }
});

About.propTypes = {
    count: PropTypes.number.isRequired
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About);
