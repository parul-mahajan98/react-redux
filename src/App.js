/*jshint esversion:6*/
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import CreateDriverComponent from './components/CreateDriverComponent';
import CreateVehicleComponent from "./components/CreateVehicleComponent";
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';
import ListDriverComponent from './components/ListDriverComponent';
import ListVehicleComponent from "./components/ListVehicleComponent";
import LogInComponent from './components/LogInComponent';
import LogOutComponent from './components/LogOutComponent';
import UpdateDriverComponent from './components/UpdateDriverComponent';
import UpdateVehicleComponent from './components/UpdateVehicleComponent';
import ViewDriverComponent from './components/ViewDriverComponent';
import ViewVehicleComponent from './components/ViewVehicleComponent';
import { Provider } from 'react-redux';
import store from './store';

function App() {
    return ( < Provider store = { store } > <
        div >
        <
        Router >
        <
        HeaderComponent / >
        <
        div className = "container" >
        <
        Switch >
        <
        Route path = "/"
        exact component = { LogInComponent }
        />  <
        Route path = "/vehicles"
        component = { ListVehicleComponent }
        />  <
        Route path = "/add-vehicle"
        component = { CreateVehicleComponent }
        />  <
        Route path = "/update-vehicle/:id"
        component = { UpdateVehicleComponent }
        /> <
        Route path = "/view-vehicle/:id"
        component = { ViewVehicleComponent }
        /> <
        Route path = "/drivers"
        component = { ListDriverComponent }
        /><
        Route path = "/add-driver"
        component = { CreateDriverComponent }
        />  <
        Route path = "/update-driver/:id"
        component = { UpdateDriverComponent }
        />  <
        Route path = "/view-driver/:id"
        component = { ViewDriverComponent }
        />  <
        Route path = "/logout"
        component = { LogOutComponent }
        />  <
        Route path = "/home"
        component = { HomeComponent }
        /> < /
        Switch >


        <
        /div> <
        FooterComponent / >
        <
        /Router> < /
        div >
        <
        /Provider>
    );
}

export default App;