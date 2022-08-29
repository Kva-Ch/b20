import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import SearchBar from './SearchBar';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
// import { library, icon } from '@fortawesome/fontawesome-svg-core'
//   import { faUser } from '@fortawesome/free-solid-svg-icons'
// import fontawesome from "@fortawesome/fontawesome"

// fontawesome.library.add(faUser)

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

library.add(faUser);

function Header () {
    return (
        <div className="header">
            <div className = "row">
            <div className ="col-lg-4 col-sm-4 col-md-4"><h5 className = "bugzilla">Bugzilla</h5></div>
            <div className ="col-lg-4 col-sm-4 col-md-4"><SearchBar/></div>
            <div className ="col-lg-3 col-sm-3 col-md-3"></div>
            <div className ="col-lg-1 col-sm-1 col-md-1 "> <FontAwesomeIcon icon="user" className = "profileicon" /></div>
        </div>
        </div>
    );
}

export default Header;
