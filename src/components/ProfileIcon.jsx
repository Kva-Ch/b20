import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'

function ProfileIcon(props) {
  return (<div className="dropdown profileicondiv">
    <a className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      <FontAwesomeIcon icon="user" className="profileicon"/>
    </a>
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" type="button" href="/profile">Profile</a>
      </li>
      <li>
        <a className="dropdown-item" type="button" href="/dashboard">Dashboard</a>
      </li>
      <li>
        <a className="dropdown-item" type="button" href="/logout">Logout</a>
      </li>
    </ul>
  </div>)
}

export default ProfileIcon;
