/*jshint esversion:9*/
import {
    FETCH_VEHICLE_FAILURE,
    FETCH_VEHICLE_REQUEST,
    FETCH_VEHICLE_SUCCESS,
    ADD_VEHICLE_SUCCESS,
    ADD_VEHICLE_FAILURE,
    UPDATE_VEHICLE_SUCCESS,
    UPDATE_VEHICLE_FAILURE,
    DELETE_VEHICLE_SUCCESS,
    DELETE_VEHICLE_FAILURE,
    // VIEW_VEHICLE_SUCCESS,
    // VIEW_VEHICLE_FAILURE

} from "./vehicleTypes";

const initialState = {
    loading: false,
    vehicles: [],
    error: ''
};

const vehicleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VEHICLE_REQUEST:
            return {
                ...state,
                loading: action.payload

            };
        case FETCH_VEHICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                vehicles: action.payload,
                error: ''
            };
        case FETCH_VEHICLE_FAILURE:
            return {
                loading: false,
                vehicles: [],
                error: action.payload
            };
        case ADD_VEHICLE_SUCCESS:

            return {
                ...state,
                loading: false,
                vehicles: [...state.vehicles, action.payload],
                error: ''
            };
        case ADD_VEHICLE_FAILURE:

            return {
                ...state,
                loading: false,
                vehicles: [],
                error: action.payload
            };
        case UPDATE_VEHICLE_SUCCESS:
            const updatedVehicles = state.vehicles.filter(vehicle => vehicle.id !== action.payload.id);
            return {
                ...state,
                loading: false,
                vehicles: [...updatedVehicles, action.payload],
                error: ''
            };
        case UPDATE_VEHICLE_FAILURE:
            return {
                ...state,
                loading: false,
                vehicles: [],
                error: action.payload
            };

        case DELETE_VEHICLE_FAILURE:

            return {
                ...state,
                loading: false,
                vehicles: [],
                error: action.payload
            };
        case DELETE_VEHICLE_SUCCESS:
            const filteredVehicles = state.vehicles.filter(vehicle => vehicle.id !== action.payload.id);

            return {
                ...state,
                loading: false,
                vehicles: filteredVehicles,
                error: ''
            };
            // case VIEW_VEHICLE_SUCCESS:
            //     const filteredVehicle = state.vehicles.filter(vehicle => vehicle.id === action.payload.id);

            //     return {
            //         ...state,
            //         loading: false,
            //         vehicles: filteredVehicle,
            //         error: ''
            //     };
            // case VIEW_VEHICLE_FAILURE:
            //     return {
            //         loading: false,
            //         vehicles: [],
            //         error: action.payload
            //     };


        default:
            return state;
    }
};
export default vehicleReducer;