import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkContainer } from 'react-router-bootstrap'
import { NavDropdown } from 'react-bootstrap'

function ProfileIcon(props) {
    return (
        <div>
            <NavDropdown id='username' title={ <FontAwesomeIcon icon="user" className = "profileicon" />}>
                <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/dashboard'>
                    <NavDropdown.Item>Dashboard</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/logout'>
                    <NavDropdown.Item>Logout</NavDropdown.Item>
                </LinkContainer>
            </ NavDropdown>
        </div>
    )
}

export default ProfileIcon;