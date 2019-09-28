import { INCREMENT } from "../constants";

const counterIncrementAction = count => ({
    type: INCREMENT,
    payload: count
});

export default counterIncrementAction;
