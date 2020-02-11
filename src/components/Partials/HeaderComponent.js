import React, {Component} from 'react';

import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem
} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={
                            this.toggleNav
                        }/>
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion'/></NavbarBrand>
                        <Collapse isOpen={
                                this.state.isNavOpen
                            }
                            navbar>
                            <Nav navbar className="ml-auto"  >
                                <NavItem></NavItem>

                                <NavLink className="nav-link" to='/home'>
                                    <span className="fa fa-home fa-lg"></span>
                                    Home</NavLink>
                               
                                <NavItem>
                                    <NavLink className="nav-link" to='/groups'>
                                        <span className="fa fa-object-group"></span>
                                        Groups</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/users'>
                                        <span className="fa fa-users"></span>
                                        Users</NavLink>
                                </NavItem>
                               
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

            </div>

        );
    }

}

export default Header;
