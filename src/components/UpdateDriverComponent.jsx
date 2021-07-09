/*jshint esversion:6*/
import React, { Component } from 'react';

import DriverService from '../services/DriverService';
import { connect } from 'react-redux';
import { updateDriver } from '../driver/driverActions';

class UpdateDriverComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstname: '',
            lastname: '',
            dob: '',
            address: '',
            license_Number: '',
            license_expiry_date: ''

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeDobHandler = this.changeDobHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);

        this.changeLicenseNumberHandler = this.changeLicenseNumberHandler.bind(this);
        this.changeLicenseExpiryDateHandler = this.changeLicenseExpiryDateHandler.bind(this);

        this.updateDriver = this.updateDriver.bind(this);
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstname: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ lastname: event.target.value });
    }
    changeDobHandler = (event) => {
        this.setState({ dob: event.target.value });
    }
    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    changeLicenseNumberHandler = (event) => {
        this.setState({ license_Number: event.target.value });
    }
    changeLicenseExpiryDateHandler = (event) => {
        this.setState({ license_expiry_date: event.target.value });
    }


    componentDidMount() {
        DriverService.getDriverById(this.state.id).then((res) => {
            let driver = res.data;
            this.setState({
                firstname: driver.firstname,
                lastname: driver.lastname,
                dob: driver.dob,
                address: driver.address,
                license_Number: driver.license_Number,
                license_expiry_date: driver.license_expiry_date
            });

        });
    }

    updateDriver = (e) => {
        e.preventDefault();
        // let driver = {

        //     firstname: this.state.firstname,
        //     lastname: this.state.lastname,
        //     dob: this.state.dob,
        //     address: this.state.address,
        //     license_Number: this.state.license_Number,
        //     license_expiry_date: this.state.license_expiry_date
        // };

        // console.log('driver => ' + JSON.stringify(driver));

        // DriverService.updateDriver(driver, this.state.id).then(res => {

        //     this.props.history.push('/drivers');
        // });

        this.props.onUpdate(this.state.id, {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            dob: this.state.dob,
            address: this.state.address,
            license_Number: this.state.license_Number,
            license_expiry_date: this.state.license_expiry_date
        });

    };

    cancel() {
        this.props.history.push('/drivers');
    }

    render() {
        return ( <
            div > < br / > < br / >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "card col-md-6 offset-md-3 offset-md-3" > < br / >
            <
            h2 className = "text-center" > Update Driver < /h2> <
            div className = "card-body" >
            <
            form >
            <
            div className = "form-group" >
            <
            label > Firstname < /label> <
            input placeholder = "firstname"
            name = "firstame"
            className = "form-control"
            value = { this.state.firstname }
            onChange = { this.changeFirstNameHandler }
            /> < /
            div > <
            div className = "form-group" >
            <
            label > Lastname < /label> <
            input placeholder = "lastname"
            name = "lastname"
            className = "form-control"
            value = { this.state.lastname }
            onChange = { this.changeLastNameHandler }
            /> < /
            div > <
            div className = "form-group" >
            <
            label > Date_Of_Birth < /label> <
            input placeholder = "(yyyy-mm-dd)"
            name = "dob"
            className = "form-control"
            value = { this.state.dob }
            onChange = { this.changeDobHandler }
            /> < /
            div > <
            div className = "form-group" >
            <
            label > Address < /label> <
            input placeholder = "address"
            name = "address"
            className = "form-control"
            value = { this.state.address }
            onChange = { this.changeAddressHandler }
            /> < /
            div > <
            div className = "form-group" >
            <
            label > License_Number < /label> <
            input placeholder = "license number"
            name = "license_Number"
            className = "form-control"
            value = { this.state.license_Number }
            onChange = { this.changeLicenseNumberHandler }
            /> < /
            div > <
            div className = "form-group" >
            <
            label > License_Expiry_Date < /label> <
            input placeholder = "expiry date(yyyy-mm-dd)"
            name = "license_expiry_date"
            className = "form-control"
            value = { this.state.license_expiry_date }
            onChange = { this.changeLicenseExpiryDateHandler }
            /> < /
            div >

            <
            button className = "btn btn-success"
            onClick = { this.updateDriver } > Save < /button> <
            button className = "btn btn-danger"
            onClick = { this.cancel.bind(this) }
            style = {
                { marginLeft: "10px" }
            } > Cancel < /button>


            <
            /form> < /
            div > <
            /div> < /
            div > <
            /div> < /
            div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.driver.loading,
        drivers: state.driver.drivers,
        error: state.driver.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onUpdate: (id, driver) => {
            dispatch(updateDriver(id, driver))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateDriverComponent);