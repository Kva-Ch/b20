import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import SearchBar from './SearchBar';
import ProfileIcon from "./ProfileIcon";



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
            <div className ="col-lg-2 col-sm-2 col-md-2"></div>
                <div className="col-lg-2 col-sm-2 col-md-2 profileicondiv"> 
                    <ProfileIcon/>
            </div>   
        </div>
        </div>
    );
}

export default Header;
