/*jshint esversion:6*/
import axios from 'axios';

export const VEHICLE_API_BASE_URL = "http://localhost:8080/api/v1/vehicles";
class VehicleService {


    getVehicles() {
        return axios.get(VEHICLE_API_BASE_URL);
    }

    createVehicle(vehicle) {
        return axios.post(VEHICLE_API_BASE_URL, vehicle);
    }

    getVehicleById(vehicleId) {
        return axios.get(VEHICLE_API_BASE_URL + '/' + vehicleId);
    }

    updateVehicle(vehicle, vehicleId) {
        return axios.put(VEHICLE_API_BASE_URL + '/' + vehicleId, vehicle);
    }

    deleteVehicle(vehicleId) {
        return axios.delete(VEHICLE_API_BASE_URL + '/' + vehicleId);
    }
}
export default new VehicleService()