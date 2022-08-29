import { ActionTypes } from '../constants/action-types';

const initialState = {
    entrys: []
};
export const entryReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.SET_ENTRYS:
            return { ...state, entrys: payload };
        default:
            return state;
    }
}
export const selectedEntryReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_ENTRY:
            return { ...state, ...payload }
        case ActionTypes.REMOVE_SELECTED_ENTRY:
            return { }
        default:
            return state;
    }
};