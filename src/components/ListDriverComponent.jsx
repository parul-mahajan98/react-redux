/*jshint esversion:6*/
import React, { Component } from 'react';
import { fetchDrivers, deleteDriver } from '../driver/driverActions';

//import DriverService from '../services/DriverService';
import { connect } from 'react-redux';


class ListDriverComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // drivers: []
        }
        this.addDriver = this.addDriver.bind(this);
        this.editDriver = this.editDriver.bind(this);
        this.deleteDriver = this.deleteDriver.bind(this);
        this.viewDriver = this.viewDriver.bind(this);
    }

    viewDriver(id) {
        this.props.history.push(`/view-driver/${id}`);
    }

    deleteDriver(id) {

        // DriverService.deleteDriver(id).then(res => {
        //     this.setState({ drivers: this.state.drivers.filter(driver => driver.id !== id) });
        // });
        this.props.onDelete(id);
    }

    editDriver(id) {

        this.props.history.push(`/update-driver/${id}`);
    }

    componentDidMount() {
        // DriverService.getDrivers().then((res) => {

        //     this.setState({ drivers: res.data });
        // });

        this.props.onFetch();
    }
    addDriver() {
        this.props.history.push('/add-driver');
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
                h1 className = "text-center" > Driver List < /h1>    <
                div >
                <
                button className = "btn btn-primary"
                onClick = { this.addDriver } > Add Driver < /button>  < /
                div > < br / > <
                div className = "row" >
                <
                table className = "table table-stripped table-bordered" >
                <
                thead >
                <
                tr >
                <
                th > Firstname < /th> <
                th > Lastname < /th> <
                th > Date_Of_Birth < /th> <
                th > Address < /th>  <
                th > License_Number < /th> <
                th > License_Expiry_Date < /th> <
                th > Actions < /th> < /
                tr > <
                /thead> <
                tbody > {
                    // this.state.drivers.map(
                    this.props.drivers.map(
                        driver =>
                        <
                        tr key = { driver.id } >
                        <
                        td > { driver.firstname } < /td> <
                        td > { driver.lastname } < /td> <
                        td > { driver.dob } < /td> <
                        td > { driver.address } < /td>  <
                        td > { driver.license_Number } < /td> <
                        td > { driver.license_expiry_date } < /td> <
                        td >
                        <
                        button onClick = {
                            () => this.editDriver(driver.id)
                        }
                        className = "btn btn-info" > Update < /button>  <
                        button onClick = {
                            () => this.deleteDriver(driver.id)
                        }
                        className = "btn btn-danger"
                        style = {
                            { marginLeft: "10px" }
                        } > Delete < /button> <
                        button onClick = {
                            () => this.viewDriver(driver.id)
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
        loading: state.driver.loading,
        drivers: state.driver.drivers,
        error: state.driver.error
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchDrivers());
        },
        onDelete: (id) => {
            dispatch(deleteDriver(id));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDriverComponent);