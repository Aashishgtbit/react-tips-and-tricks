import { DECREMENT } from "../constants";

const counterDecrementAction = count => ({
    type: DECREMENT,
    payload: count
});

export default counterDecrementAction;
