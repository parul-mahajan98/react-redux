/*jshint esversion:6*/
import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

class LogInComponent extends Component {
    constructor(props) {
        super(props)
            //  let loggedIn = false;
        this.inputRef = React.createRef();
        this.state = {
            username: '',
            password: '',
            loggedIn: false
        };
        this.onChange = this.onChange.bind(this);

        this.loginHandler = this.loginHandler.bind(this);
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    loginHandler(event) {
        event.preventDefault();
        const { username, password } = this.setState;
        if (username === "a" && password === "b") {

            this.setState({
                loggedIn: true
            });
        }
    }

    componentDidMount() {
        this.inputRef.current.focus();
        console.log(this.inputRef);
    }


    render() {
        if (this.state.loggedIn) {
            return <Redirect to = "/home" / >

        }
        return ( <
            div >
            <
            br / > < br / >
            <
            div className = "container" >
            <
            div className = "row" >
            <
            div className = "card col-md-6 offset-md-3 offset-md-3" > < br / >
            <
            h2 className = "text-center" > Login Here < /h2> <
            div className = "card-body" >
            <
            form >
            <
            div className = "form-group" >
            <
            label > Username < /label> <
            input placeholder = "Enter username"
            type = "text"
            name = "username"
            className = "form-control"
            value = { this.state.username }
            onChange = { this.onChange }
            ref = { this.inputRef }
            /> < /
            div > <
            div className = "form-group" >
            <
            label > Password < /label> <
            input placeholder = "password"
            type = "password"
            name = "password"
            className = "form-control"
            value = { this.state.password }
            onChange = { this.onChange }
            /> < /
            div >
            <
            div className = "text-center" >
            <
            button className = "btn btn-secondary"
            onClick = { this.loginHandler } > Login < /button> < /
            div >

            <
            /form> < /
            div > <
            /div> < /
            div > <
            /div>  < /
            div >
        );
    }
}

export default LogInComponent;