/*jshint esversion:9*/
import {
    FETCH_DRIVER_FAILURE,
    FETCH_DRIVER_REQUEST,
    FETCH_DRIVER_SUCCESS,
    ADD_DRIVER_SUCCESS,
    ADD_DRIVER_FAILURE,
    UPDATE_DRIVER_SUCCESS,
    UPDATE_DRIVER_FAILURE,
    DELETE_DRIVER_SUCCESS,
    DELETE_DRIVER_FAILURE
} from "./driverTypes";


const initialState = {
    loading: false,
    drivers: [],
    error: ''
};

export const driverReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DRIVER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_DRIVER_SUCCESS:
            return {
                loading: false,
                drivers: action.payload,
                error: ''
            };
        case FETCH_DRIVER_FAILURE:
            return {
                loading: false,
                drivers: [],
                error: action.payload
            };
        case ADD_DRIVER_SUCCESS:
            return {
                loading: false,
                drivers: [...state.drivers, action.payload],
                error: ''
            };
        case ADD_DRIVER_FAILURE:
            return {
                loading: false,
                drivers: [],
                error: action.payload
            };
        case UPDATE_DRIVER_SUCCESS:
            const updatedDrivers = state.drivers.filter(driver => driver.id !== action.payload.id);
            return {
                loading: false,
                drivers: [...updatedDrivers, action.payload],
                error: ''
            };
        case UPDATE_DRIVER_FAILURE:
            return {
                loading: false,
                drivers: [],
                error: action.payload
            };
        case DELETE_DRIVER_SUCCESS:
            const filteredDrivers = state.drivers.filter(driver => driver.id !== action.payload.id);
            return {
                loading: false,
                drivers: filteredDrivers,
                error: ''
            };
        case DELETE_DRIVER_FAILURE:
            return {
                loading: false,
                drivers: [],
                error: action.payload
            };
        default:
            return state;
    }
};