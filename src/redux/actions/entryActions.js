import { ActionTypes } from "../constants/action-types"
export const setEntrys = (entrys) => {
    return {
        type: ActionTypes.SET_ENTRYS,
        payload: entrys,
    }
};
export const selectedEntrys = (entry) => {
    return {
        type: ActionTypes.SELECTED_ENTRY,
        payload: entry,
    }
};