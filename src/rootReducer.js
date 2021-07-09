/*jshint esversion:6*/
import { combineReducers } from 'redux';
import { driverReducer } from './driver/driverReducer';

import vehicleReducer from './vehicle/vehicleReducer';

const rootReducer = combineReducers({
    vehicle: vehicleReducer,
    driver: driverReducer
});

export default rootReducer;