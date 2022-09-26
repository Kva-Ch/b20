import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, { useState, useEffect } from "react";

function Profile(props) {
    var length = 10;

    let content = [];
    const [disableButton, setDisableButton] = useState(true)

    content.push(
        <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-10">
                        <div className="heading">Profile</div>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-2 btndiv">
                        <button className="btn btn-lg editbtn" onClick={() => setDisableButton(!disableButton)}>Edit Profile</button>
                    </div>
        </div>

    )
    for (let index = 0; index < 5; index++) {
        content.push(
            <div className="profilediv">
                <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 leftcontent">
                        Hello
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3">
                        <input type="text" className="inputfield2" placeholder="username" disabled={disableButton}/><br/>
                    </div>
                </div>
            </div>);
    }
    content.push(
        <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-10">

            </div>
            <div className="col-lg-2 col-md-2 col-sm-2 submitbtndiv">
                <button className="btn btn-lg submitbtn" style={{visibility: disableButton ? 'hidden' : 'visible'}}>Submit</button>
            </div>
        </div>
    );

    return (<div>{content}</div>);
}

export default Profile;
