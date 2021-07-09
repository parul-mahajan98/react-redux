/*jshint esversion:6*/
import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return ( <
            div >
            <
            header >
            <
            nav className = "navbar navbar-expand-md navbar-dark bg-dark" >
            <
            div > < a href = " "
            className = "navbar-brand" > Vehicle Management App < /a> < /
            div >

            <
            div >
            <
            ul className = "navbar-nav mr-auto" >

            <
            li className = "nav-item" >

            <
            a href = "http://localhost:3000/home"
            className = "nav-link" > < i className = "fa fa-home" > < /i> HOME < /a > <
            /li>

            <
            li className = "nav-item" >

            <
            a href = "http://localhost:3000/"
            className = "nav-link" > < i className = "fa fa-user" > < /i> LOGIN < /a > <
            /li>

            <
            li className = "nav-item" >

            <
            a href = "http://localhost:3000/vehicles"
            className = "nav-link" > < i className = "fa fa-car" > < /i> VEHICLES </a >

            <
            /li>


            <
            li className = "nav-item" >
            <
            a href = "http://localhost:3000/drivers"
            className = "nav-link" > < i className = "fa fa-users" > < /i> DRIVERS </a >
            <
            /li>



            <
            li className = "nav-item" >
            <
            a href = "http://localhost:3000/logout"
            className = "nav-link" > LOGOUT < /a > < /
            li >



            <
            /ul>

            <
            /div>


            <
            /nav> < /
            header > <
            /div>
        );
    }
}

export default HeaderComponent;