import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    counterIncrementAction,
    counterDecrementAction
} from "../../store/actions";

const Home = ({ count, increment, decrement, history }) => (
    <div>
        <h1> Sample Component . </h1>
        <div>
            <h2>{count}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
            <button type="button" onClick={decrement}>
                Decrement
            </button>
        </div>
        <div>
            <button type="button" onClick={() => history.push("/about")}>
                About
            </button>
        </div>
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

Home.propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};
const connectHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
// const connectAbout = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(About);
// export { connectHome, connectAbout };
export default connectHome;
