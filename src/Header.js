import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { withAuth0 } from "@auth0/auth0-react";



class Header extends React.Component {
  render() {
    let isAuthenticated = this.props.auth0.isAuthenticated;

    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {/* <LoginButton/> */}
        {isAuthenticated ? <LogoutButton/>:<LoginButton/> }

        {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
      </Navbar>
    );
  }
}

export default withAuth0(Header);
