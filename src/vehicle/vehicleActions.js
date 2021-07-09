/*jshint esversion:8*/
import axios from 'axios';

import { history } from '../index';

import {
    FETCH_VEHICLE_REQUEST,
    FETCH_VEHICLE_SUCCESS,
    FETCH_VEHICLE_FAILURE,
    ADD_VEHICLE_SUCCESS,
    ADD_VEHICLE_FAILURE,
    UPDATE_VEHICLE_SUCCESS,
    UPDATE_VEHICLE_FAILURE,
    DELETE_VEHICLE_SUCCESS,
    DELETE_VEHICLE_FAILURE,
    // VIEW_VEHICLE_SUCCESS,
    // VIEW_VEHICLE_FAILURE

} from './vehicleTypes';

const url = 'http://localhost:8080/api/v1/vehicles';


const fetchVehicleRequest = (data) => {

    return {
        type: FETCH_VEHICLE_REQUEST,
        payload: data
    };
};
const fetchVehicleSuccess = (vehicles) => {

    return {
        type: FETCH_VEHICLE_SUCCESS,
        payload: vehicles
    };
};
const fetchVehicleFailure = (error) => {

    return {
        type: FETCH_VEHICLE_FAILURE,
        payload: error
    };
};

const addVehicleSuccess = (data) => {

    return {
        type: ADD_VEHICLE_SUCCESS,
        payload: data
    };
};
const addVehicleFailure = (error) => {

    return {
        type: ADD_VEHICLE_FAILURE,
        payload: error
    };
};

const updateVehicleSuccess = (data) => {
    return {
        type: UPDATE_VEHICLE_SUCCESS,
        payload: data
    };
};
const updateVehicleFailure = (error) => {

    return {
        type: UPDATE_VEHICLE_FAILURE,
        payload: error
    };
};
const deleteVehicleSuccess = (id) => {
    return {
        type: DELETE_VEHICLE_SUCCESS,
        payload: {
            id: id
        }
    };
};
const deleteVehicleFailure = (error) => {

    return {
        type: DELETE_VEHICLE_FAILURE,
        payload: error
    };
};

// const viewVehicleSuccess = (data) => {
//     return {
//         type: VIEW_VEHICLE_SUCCESS,
//         payload: data
//     };
// };
// const viewVehicleFailure = (error) => {

//     return {
//         type: VIEW_VEHICLE_FAILURE,
//         payload: error
//     };
// };



export const fetchVehicles = () => {
    let loading = true;
    return (dispatch) => {
        dispatch(fetchVehicleRequest(loading));
        axios.get(url)
            .then(response => {

                const vehicles = response.data;
                dispatch(fetchVehicleSuccess(vehicles));

            })
            .catch(error => {


                const errMsg = error.message;
                dispatch(fetchVehicleFailure(errMsg));
            });
    };
};

export const createVehicle = (vehicle) => {

    const data = {
        vehicle_Name: vehicle.vehicle_Name,
        vehicle_Model: vehicle.vehicle_Model,
        vehicle_Year: vehicle.vehicle_Year,
        chassis_Number: vehicle.chassis_Number,
        registration_Number: vehicle.registration_Number,
        fuel_Type: vehicle.fuel_Type
    };
    return (dispatch) => {
        return axios.post(url, data)
            .then(response => {
                const data = response.data;
                dispatch(addVehicleSuccess(data));
                history.push('/vehicles');
            }).catch(error => {
                const errMsg = error.message;
                dispatch(addVehicleFailure(errMsg));

            });
    };
};

export const updateVehicle = (id, vehicle) => {
    const data = {
        vehicle_Name: vehicle.vehicle_Name,
        vehicle_Model: vehicle.vehicle_Model,
        vehicle_Year: vehicle.vehicle_Year,
        chassis_Number: vehicle.chassis_Number,
        registration_Number: vehicle.registration_Number,
        fuel_Type: vehicle.fuel_Type
    };
    return (dispatch) => {
        axios.put(`${url}/${id}`, data)
            .then(response => {
                const data = response.data;
                dispatch(updateVehicleSuccess(data));
                history.push('/vehicles');
            })
            .catch(error => {
                const errMsg = error.message;
                dispatch(updateVehicleFailure(errMsg));

            });
    };
};

export const deleteVehicle = (id) => {
    return (dispatch) => {
        return axios.delete(`${url}/${id}`).then(() => {
            dispatch(deleteVehicleSuccess(id));

        }).catch((error) => {
            const errMsg = error.message;
            dispatch(deleteVehicleFailure(errMsg));

        });
    };

};

// export const viewVehicle = (id,vehicle) => {

//     return (dispatch) => {
//         axios.get(`${url}/${id}`)
//             .then(response => {
//                 const vehicle = response.data;
//                 dispatch(viewVehicleSuccess(vehicle));
//             })
//             .catch(error => {
//                 const errMsg = error.message;
//                 dispatch(viewVehicleFailure(errMsg));
//             });
//     };
// };