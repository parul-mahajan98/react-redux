/*jshint esversion:6*/
import React, { Component } from 'react';

import DriverService from '../services/DriverService';

class ViewDriverComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            driver: {}
        }
    }

    componentDidMount() {
        DriverService.getDriverById(this.state.id).then(res => {

            this.setState({ driver: res.data });
        });
    }

    cancel() {
        this.props.history.push('/drivers');
    }

    render() {
        return ( <
            div > < br / > < br / > <
            div className = "card col-md-6 offset-md-3" > < br / >
            <
            h3 className = "text-center" > View Driver Details < /h3> <
            div className = "card-body" >
            <
            div className = "row" >
            <
            label > Firstname: { this.state.driver.firstname } < /label>  </div > < div className = "row" > <
            label > Lastname: { this.state.driver.lastname } < /label>  </div > < div className = "row" > <
            label > Date_Of_Birth: { this.state.driver.dob } < /label>  </div > < div className = "row" > <
            label > Address: { this.state.driver.address } < /label>  </div > < div className = "row" > <
            label > License_Number: { this.state.driver.license_Number } < /label>  </div > < div className = "row" > <
            label > License_Expiry_Date: { this.state.driver.license_expiry_date } < /label>  < /
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
    }
}

export default ViewDriverComponent;