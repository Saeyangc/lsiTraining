import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component{
    render() { 
        return (
            <Navbar inverse fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#brand">Training</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">
                  Link
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Link
                </NavItem>                
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  Account place holder
                </NavItem>                
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default Navigation;