/*jshint esversion:6*/
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class LogOutComponent extends Component {
    render() {
        return ( <
            div >
            <
            div className = "text-center" > < br / > < br / >
            <
            h1 > You have been logged out < /h1> <
            Link to = "/" > Login Again < /Link> < /
            div >
            <
            /div>
        )
    }
}

export default LogOutComponent;