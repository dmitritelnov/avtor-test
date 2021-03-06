import { createStore } from 'redux';

const initialState = {
    format: 'metric',
    cities: []
}

const SET_FORMAT = 'SET_FORMAT';
const SET_CITIES = 'SET_CITIES';

const mainReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_FORMAT:
            return {
                ...state,
                format: payload
            }
        case SET_CITIES:
            return {
                ...state,
                cities: payload
            }
        default:
            return state;
    }
}

// ACTIONS:

export const setFormat = (payload) => {
    return {
        type: SET_FORMAT,
        payload
    }
};

export const setCities = (payload) => {
    return {
        type: SET_CITIES,
        payload
    }
};

export const store = createStore(mainReducer);