/*jshint esversion:6*/
import axios from 'axios';

const DRIVER_API_BASE_URL = "http://localhost:8080/api/v1/drivers";
class DriverService {


    getDrivers() {
        return axios.get(DRIVER_API_BASE_URL);
    }

    createDriver(driver) {
        return axios.post(DRIVER_API_BASE_URL, driver);
    }

    getDriverById(driverId) {
        return axios.get(DRIVER_API_BASE_URL + '/' + driverId);
    }

    updateDriver(driver, driverId) {
        return axios.put(DRIVER_API_BASE_URL + '/' + driverId, driver);
    }

    deleteDriver(driverId) {
        return axios.delete(DRIVER_API_BASE_URL + '/' + driverId);
    }
}
export default new DriverService()