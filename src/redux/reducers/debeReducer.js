import { ActionTypes } from '../constants/action-types';

const initialState = {
    debes: []
};
export const debeReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.SET_DEBES:
            return { ...state, debes: payload };
        default:
            return state;
    }
};
export const selectedDebeReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_DEBE:
            return { ...state, ...payload }
        default:
            return state;
    }
};