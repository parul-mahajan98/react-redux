/*jshint esversion:6*/
import React, { Component } from 'react';

import VehicleService from '../services/VehicleService';

class ViewVehicleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            vehicle: {}
        }
    }

    componentDidMount() {
        VehicleService.getVehicleById(this.state.id).then(res => {

            this.setState({ vehicle: res.data });
        });

        // this.props.onView(this.state.id);


    }

    cancel() {
        this.props.history.push('/vehicles');
    }

    render() {
        return ( <
            div > < br / > < br / > <
            div className = "card col-md-6 offset-md-3" > < br / >
            <
            h3 className = "text-center" > View Vehicle Details < /h3> <
            div className = "card-body" >
            <
            div className = "row" >
            <
            label > Vehicle_Name: { this.state.vehicle.vehicle_Name } < /label>  </div > < div className = "row" > <
            label > Vehicle_Model: { this.state.vehicle.vehicle_Model } < /label>  </div > < div className = "row" > <
            label > Vehicle_Year: { this.state.vehicle.vehicle_Year } < /label>  </div > < div className = "row" > <
            label > Chassis_Number: { this.state.vehicle.chassis_Number } < /label>  </div > < div className = "row" > <
            label > Registration_Number: { this.state.vehicle.registration_Number } < /label>  </div > < div className = "row" > <
            label > Fuel_Type: { this.state.vehicle.fuel_Type } < /label>  < /
            div > <
            /div>  < /
            div >
            <
            br / >
            <
            div className = "text-center" > <
            button className = "btn btn-danger"
            onClick = { this.cancel.bind(this) }
            style = {
                { marginLeft: "10px" }
            } > Back < /button> < /
            div >
            <
            /div>
        );
    };
};

// const mapStateToProps = (state) => {
//     return {
//         vehicles: state.vehicle.vehicles,
//         loading: state.vehicle.loading,
//         error: state.vehicle.error
//     };
// };
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onView: (id) => {
//             dispatch(viewVehicle(id));
//         }
//     }
// }

export default ViewVehicleComponent;