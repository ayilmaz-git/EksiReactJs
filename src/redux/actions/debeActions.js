import { ActionTypes } from "../constants/action-types"
export const setDebes = (debes) => {
    return {
        type: ActionTypes.SET_DEBES,
        payload: debes,
    }
};
export const selectedDebe = (debe) => {
    return {
        type: ActionTypes.SELECTED_DEBE,
        payload: debe,
    }
};