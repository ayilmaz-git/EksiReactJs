import { combineReducers } from "redux";
import { entryReducer, selectedEntryReducer } from "./entryReducer";
import { debeReducer, selectedDebeReducer } from "./debeReducer";
import { selectedUserReducer, userReducer } from './userReducer';

const reducers = combineReducers({
    allEntrys: entryReducer,
    entry: selectedEntryReducer,
    allDebes: selectedDebeReducer,
    debes: debeReducer,
    users: userReducer,
    allUsers: selectedUserReducer
});


export default reducers;