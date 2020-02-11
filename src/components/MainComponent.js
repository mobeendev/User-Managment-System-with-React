import React, {Component} from "react";
import Header from "./Partials/HeaderComponent";
import Footer from "./Partials/FooterComponent";
import Home from "./HomeComponent";
import User from "./User/UserComponent";
import Group from "./Groups/GroupComponent";

import {Switch, Route, Redirect} from "react-router-dom";
import {Container} from 'reactstrap';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {

        return (
            <Container className="themed-container">
                <Header/>
                <Switch>
                    <Route path="/home"
                        component={Home}/>
                    <Route path="/groups"
                        component={Group}/>
                    <Route path="/users"
                        component={User}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer/>

            </Container>
        );
    }
}

export default Main;
