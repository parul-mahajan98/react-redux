/*jshint esversion:6*/
import React, { Component } from 'react';

import { connect } from 'react-redux';

import { fetchVehicles } from '../vehicle/vehicleActions';
import { deleteVehicle } from '../vehicle/vehicleActions';

class ListVehicleComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // vehicles: []
        }
        this.addVehicle = this.addVehicle.bind(this);
        this.editVehicle = this.editVehicle.bind(this);
        this.deleteVehicle = this.deleteVehicle.bind(this);
        this.viewVehicle = this.viewVehicle.bind(this);
    }

    viewVehicle(id) {
        this.props.history.push(`/view-vehicle/${id}`);
    }

    deleteVehicle(id) {

        // VehicleService.deleteVehicle(id).then(res => {
        //     this.setState({ vehicles: this.state.vehicles.filter(vehicle => vehicle.id !== id) });
        // });
        this.props.onDelete(id);
    }

    editVehicle(id) {


        this.props.history.push(`/update-vehicle/${id}`);
    }

    componentDidMount() {
        // VehicleService.getVehicles().then((res) => {

        //     this.setState({ vehicles: res.data });
        // });
        this.props.fetchVehicles();


    }
    addVehicle() {
        this.props.history.push('/add-vehicle');
    }


    render() {
        if (this.props.loading) {
            return ( < > < br / > < br / > <
                p className = "text-center" > Loading... < /p> </ >
            )

        } else if (this.props.error) {
            return ( < > < br / > < br / > <
                div className = "alert alert-danger"
                role = 'alert' > Error: { this.props.error }

                <
                /div> < / >
            )

        } else {
            return ( <
                div > < br / >
                <
                h1 className = "text-center" > Vehicle List < /h1>    <
                div >
                <
                button className = "btn btn-primary"
                onClick = { this.addVehicle } > Add Vehicle < /button>  < /
                div > < br / > <
                div className = "row" >
                <
                table className = "table table-stripped table-bordered" >
                <
                thead >
                <
                tr >
                <
                th > Vehicle_Name < /th> <
                th > Vehicle_Model < /th> <
                th > Vehicle_Year < /th> <
                th > Chassis_Number < /th> <
                th > Registration_Number < /th> <
                th > Fuel_Type < /th> <
                th > Actions < /th> < /
                tr > <
                /thead> <
                tbody > {
                    //this.state.vehicles.map(
                    this.props.vehicles.map(
                        vehicle =>
                        <
                        tr key = { vehicle.id } >
                        <
                        td > { vehicle.vehicle_Name } < /td> <
                        td > { vehicle.vehicle_Model } < /td> <
                        td > { vehicle.vehicle_Year } < /td> <
                        td > { vehicle.chassis_Number } < /td> <
                        td > { vehicle.registration_Number } < /td> <
                        td > { vehicle.fuel_Type } < /td> <
                        td >
                        <
                        button onClick = {
                            () => this.editVehicle(vehicle.id)

                        }
                        className = "btn btn-info" > Update < /button>  <
                        button onClick = {
                            () => this.deleteVehicle(vehicle.id)
                        }
                        className = "btn btn-danger"
                        style = {
                            { marginLeft: "10px" }
                        } > Delete < /button> <
                        button onClick = {
                            () => this.viewVehicle(vehicle.id)
                        }
                        className = "btn btn-info"
                        style = {
                            { marginLeft: "10px" }
                        } > View < /button> < /
                        td >

                        <
                        /tr>
                    )
                } <
                /tbody> < /
                table > <
                /div> < /
                div >
            );
        }

    }
}

const mapStateToProps = (state) => {
    return {
        vehicles: state.vehicle.vehicles,
        loading: state.vehicle.loading,
        error: state.vehicle.error
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchVehicles: () => {
            dispatch(fetchVehicles())
        },
        onDelete: (id) => {
            dispatch(deleteVehicle(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListVehicleComponent);