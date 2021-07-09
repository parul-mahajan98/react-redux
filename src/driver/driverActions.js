/*jshint esversion:9*/
import axios from 'axios';
import { history } from '../index';
import {
    FETCH_DRIVER_REQUEST,
    FETCH_DRIVER_SUCCESS,
    FETCH_DRIVER_FAILURE,
    ADD_DRIVER_SUCCESS,
    ADD_DRIVER_FAILURE,
    UPDATE_DRIVER_SUCCESS,
    UPDATE_DRIVER_FAILURE,
    DELETE_DRIVER_SUCCESS,
    DELETE_DRIVER_FAILURE

} from './driverTypes';

const url = "http://localhost:8080/api/v1/drivers";

const fetchDriverRequest = (data) => {
    return {
        type: FETCH_DRIVER_REQUEST,
        payload: data
    };
};

const fetchDriverSuccess = (data) => {
    return {
        type: FETCH_DRIVER_SUCCESS,
        payload: data
    };
};

const fetchDriverFailure = (error) => {
    return {
        type: FETCH_DRIVER_FAILURE,
        payload: error
    };
};

const addDriverSuccess = (data) => {
    return {
        type: ADD_DRIVER_SUCCESS,
        payload: data
    };
};

const addDriverFailure = (error) => {
    return {
        type: ADD_DRIVER_FAILURE,
        payload: error
    };
};

const updateDriverSuccess = (data) => {
    return {
        type: UPDATE_DRIVER_SUCCESS,
        payload: data
    };
};

const updateDriverFailure = (error) => {
    return {
        type: UPDATE_DRIVER_FAILURE,
        payload: error
    };
};

const deleteDriverSuccess = (id) => {
    return {
        type: DELETE_DRIVER_SUCCESS,
        payload: {
            id: id
        }
    };
};

const deleteDriverFailure = (error) => {
    return {
        type: DELETE_DRIVER_FAILURE,
        payload: error
    };
};


export const fetchDrivers = () => {
    let loading = true;
    return (dispatch) => {
        dispatch(fetchDriverRequest(loading));
        axios.get(url)
            .then(response => {
                const data = response.data;
                dispatch(fetchDriverSuccess(data));
            })
            .catch(error => {
                const erMsg = error.message;
                dispatch(fetchDriverFailure(erMsg));
            });
    };
};

export const addDriver = (driver) => {
    const data = {
        firstname: driver.firstname,
        lastname: driver.lastname,
        dob: driver.dob,
        address: driver.address,
        license_Number: driver.license_Number,
        license_expiry_date: driver.license_expiry_date

    };
    return (dispatch) => {
        axios.post(url, data)
            .then(response => {
                const data = response.data;
                dispatch(addDriverSuccess(data));
                history.push('/drivers');
            })
            .catch(error => {
                const errMsg = error.message;
                dispatch(addDriverFailure(errMsg));
            });
    };
};

export const updateDriver = (id, driver) => {
    const data = {
        firstname: driver.firstname,
        lastname: driver.lastname,
        dob: driver.dob,
        address: driver.address,
        license_Number: driver.license_Number,
        license_expiry_date: driver.license_expiry_date

    };
    return (dispatch) => {
        axios.put(`${url}/${id}`, data)
            .then(response => {
                const data = response.data;
                dispatch(updateDriverSuccess(data));
                history.push('/drivers');
            })
            .catch(error => {
                const errMsg = error.message;
                dispatch(updateDriverFailure(errMsg));
            });
    };
};

export const deleteDriver = (id) => {
    return (dispatch) => {
        return axios.delete(`${url}/${id}`).then(() => {
            dispatch(deleteDriverSuccess(id));

        }).catch((error) => {
            const errMsg = error.message;
            dispatch(deleteDriverFailure(errMsg));

        });
    };
};