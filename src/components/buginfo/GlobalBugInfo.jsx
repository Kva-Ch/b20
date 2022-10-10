import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';
import bugInfoApi from "../../controllers/bugInfoApi.jsx";
import searchBugApi from "../../controllers/searchBugApi.jsx";
import GetUserPreferencesApi from "../../controllers/GetUserPreferencesApi.jsx";

function GlobalBugInfo(props) {

  const bugid = parseInt(props.bugid);
  let content = [];
  const [disableButton, setDisableButton] = useState(true);
  const [load, setLoad] = useState(0);

  const bugBar = [];
  const [bugInformation, setBugInformation] = useState([]);
  const [preferences, setPreferences] = useState([]);
  // const preferences = [
  //   "Id",
  //   "Status",
  //   "Priority",
  //   "Severity",
  //   "Summary",
  //   "Last_change_time"
  // ];

  async function callSearchBugApi(bugid) {
    let temp = await searchBugApi(bugid);
    console.log("temp is:", temp);
    setBugInformation(temp);
  }

  async function callGetPreferences() {
    let temp = await GetUserPreferencesApi();
    let temp2 = [];
    for (var key in temp) {
      if (temp[key] === true) {
        console.log(key, temp[key]);
        temp2.push(key);
      }
    }
    // console.log(temp2);
    setPreferences(temp2);
    setLoad(1);
  }

  useEffect(() => {
    (async () => {
      callSearchBugApi(bugid);
      await callGetPreferences();
    })();
  }, []);

  bugBar.push(<div className="row">
    <div className="col-lg-9">
      <div className="heading">Bug Info: {bugid}</div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 btndiv">
      {/* <button className="btn btn-lg editbtn" onClick={() => setDisableButton(!disableButton)}>Edit Preferences</button> */}
    </div>
  </div>)

  function loadData() {
    let bugInfo = Object.entries(bugInformation);
    for (let i = 0; i < bugInfo.length - 1; i += 2) {
      let a = i,
        b = i + 1;

      if ((preferences.indexOf(bugInfo[a][0]) > -1 || preferences.indexOf(bugInfo[b][0]) > -1)) {

        if (bugInfo[a][0] === "Qa_contact" || bugInfo[a][0] === "Creator_detail" || bugInfo[a][0] === "Assigned_to_detail" || bugInfo[a][0] === "Cc_details" || bugInfo[b][0] === "Qa_contact" || bugInfo[b][0] === "Creator_detail" || bugInfo[b][0] === "Assigned_to_detail" || bugInfo[b][0] === "Cc_details") {

          // bugInfo[a][1];  to get the objects

          if ((bugInfo[a][0] === "Qa_contact" || bugInfo[a][0] === "Creator_detail" || bugInfo[a][0] === "Assigned_to_detail" || bugInfo[a][0] === "Cc_details") && (bugInfo[b][0] != "Qa_contact" && bugInfo[b][0] != "Creator_detail" && bugInfo[b][0] != "Assigned_to_detail" && bugInfo[b][0] != "Cc_details")) {
            // if a is a contactInfo type and b is not
            content.push(<div className="infoContainer">
              <div className="row p-4">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="row">
                    <div className="col-lg-4">
                      {bugInfo[a][0]}
                    </div>
                    <div className="col-lg-7">
                      <div className="infodiv">
                        <div className="row">
                          <div className="col-lg-3">Id</div>
                          <div className="col-lg-9">{
                              bugInfo[a][1]["Id"]
                                ? bugInfo[a][1]["Id"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">Name</div>
                          <div className="col-lg-9">{
                              bugInfo[a][1]["Name"]
                                ? bugInfo[a][1]["Name"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">Email</div>
                          <div className="col-lg-9">{
                              bugInfo[a][1]["Email"]
                                ? bugInfo[a][1]["Email"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">RealName</div>
                          <div className="col-lg-9">{
                              bugInfo[a][1]["Real_name"]
                                ? bugInfo[a][1]["Real_name"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">NickName</div>
                          <div className="col-lg-9">{
                              bugInfo[a][1]["Nick"]
                                ? bugInfo[a][1]["Nick"]
                                : "None"
                            }</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="row">
                    <div className="col-lg-4">
                      {bugInfo[b][0]}
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="inputfield2" placeholder={bugInfo[b][1]} disabled={disableButton}/><br/>
                    </div>
                  </div>
                </div>
              </div>
            </div>);

          } else if ((bugInfo[b][0] === "Qa_contact" || bugInfo[b][0] === "Creator_detail" || bugInfo[b][0] === "Assigned_to_detail" || bugInfo[b][0] === "Cc_details") && (bugInfo[a][0] != "Qa_contact" && bugInfo[a][0] != "Creator_detail" && bugInfo[a][0] != "Assigned_to_detail" && bugInfo[a][0] != "Cc_details")) {
            // if a is not a contact Info type but b is
            content.push(<div className="infoContainer">
              <div className="row p-4">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="row">
                    <div className="col-lg-4">
                      {bugInfo[a][0]}
                    </div>
                    <div className="col-lg-6">
                      <input type="text" className="inputfield2" placeholder={bugInfo[a][1]} disabled={disableButton}/><br/>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="row">
                    <div className="col-lg-4">
                      {bugInfo[b][0]}
                    </div>
                    <div className="col-lg-7">
                      <div className="infodiv">
                        <div className="row">
                          <div className="col-lg-3">Id</div>
                          <div className="col-lg-9">{
                              bugInfo[b][1]["Id"]
                                ? bugInfo[b][1]["Id"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">Name</div>
                          <div className="col-lg-9">{
                              bugInfo[b][1]["Name"]
                                ? bugInfo[b][1]["Name"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">Email</div>
                          <div className="col-lg-9">{
                              bugInfo[b][1]["Email"]
                                ? bugInfo[b][1]["Email"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">RealName</div>
                          <div className="col-lg-9">{
                              bugInfo[b][1]["Real_name"]
                                ? bugInfo[b][1]["Real_name"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">NickName</div>
                          <div className="col-lg-9">{
                              bugInfo[b][1]["Nick"]
                                ? bugInfo[b][1]["Nick"]
                                : "None"
                            }</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>);

          } else if ((bugInfo[a][0] === "Qa_contact" || bugInfo[a][0] === "Creator_detail" || bugInfo[a][0] === "Assigned_to_detail" || bugInfo[a][0] === "Cc_details") && (bugInfo[b][0] === "Qa_contact" || bugInfo[b][0] === "Creator_detail" || bugInfo[b][0] === "Assigned_to_detail" || bugInfo[b][0] === "Cc_details")) {
            // if a is a contactInfo type and b is also
            content.push(<div className="infoContainer">
              <div className="row p-4">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="row">
                    <div className="col-lg-4">
                      {bugInfo[a][0]}
                    </div>
                    <div className="col-lg-7">
                      <div className="infodiv">
                        <div className="row">
                          <div className="col-lg-3">Id</div>
                          <div className="col-lg-9">{
                              bugInfo[a][1]["Id"]
                                ? bugInfo[a][1]["Id"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">Name</div>
                          <div className="col-lg-9">{
                              bugInfo[a][1]["Name"]
                                ? bugInfo[a][1]["Name"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">Email</div>
                          <div className="col-lg-9">{
                              bugInfo[a][1]["Email"]
                                ? bugInfo[a][1]["Email"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">RealName</div>
                          <div className="col-lg-9">{
                              bugInfo[a][1]["Real_name"]
                                ? bugInfo[a][1]["Real_name"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">NickName</div>
                          <div className="col-lg-9">{
                              bugInfo[a][1]["Nick"]
                                ? bugInfo[a][1]["Nick"]
                                : "None"
                            }</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="row">
                    <div className="col-lg-4">
                      {bugInfo[b][0]}
                    </div>
                    <div className="col-lg-7">
                      <div className="infodiv">
                        <div className="row">
                          <div className="col-lg-3">Id</div>
                          <div className="col-lg-9">{
                              bugInfo[b][1]["Id"]
                                ? bugInfo[b][1]["Id"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">Name</div>
                          <div className="col-lg-9">{
                              bugInfo[b][1]["Name"]
                                ? bugInfo[b][1]["Name"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">Email</div>
                          <div className="col-lg-9">{
                              bugInfo[b][1]["Email"]
                                ? bugInfo[b][1]["Email"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">RealName</div>
                          <div className="col-lg-9">{
                              bugInfo[b][1]["Real_name"]
                                ? bugInfo[b][1]["Real_name"]
                                : "None"
                            }</div>
                        </div>
                        <div className="row">
                          <div className="col-lg-3">NickName</div>
                          <div className="col-lg-9">{
                              bugInfo[b][1]["Nick"]
                                ? bugInfo[b][1]["Nick"]
                                : "None"
                            }</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>);
          }

        } else if (bugInfo[a][0] === "Summary") {

          content.push(<div className="infoContainer">
            <div className="row p-4">
              <div className="col-lg-12 col-md-6 col-sm-6">
                <div className="row">
                  <div className="col-lg-2">
                    {bugInfo[a][0]}
                  </div>
                  <div className="col-lg-10">
                    <input type="text" className="inputfield3" placeholder={String(bugInfo[a][1])} disabled={disableButton}/><br/>
                  </div>
                </div>
              </div>
            </div>
          </div>);

        } else if (bugInfo[b][0] === "Summary") {

          content.push(<div className="infoContainer">
            <div className="row p-4">
              <div className="col-lg-12 col-md-6 col-sm-6">
                <div className="row">
                  <div className="col-lg-2">
                    {bugInfo[b][0]}
                  </div>
                  <div className="col-lg-10">
                    <input type="text" className="inputfield3" placeholder={String(bugInfo[b][1])} disabled={disableButton}/><br/>
                  </div>
                </div>
              </div>
            </div>
          </div>);

        } else if ((preferences.indexOf(bugInfo[a][0]) > -1) || (preferences.indexOf(bugInfo[b][0]) > -1)) {
          content.push(<div className="infoContainer">
            <div className="row p-4">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="row">
                  <div className="col-lg-4">
                    {bugInfo[a][0]}
                  </div>
                  <div className="col-lg-6">
                    <input type="text" className="inputfield2" placeholder={String(bugInfo[a][1])} disabled={disableButton}/><br/>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="row">
                  <div className="col-lg-4">
                    {bugInfo[b][0]}
                  </div>
                  <div className="col-lg-6">
                    <input type="text" className="inputfield2" placeholder={String(bugInfo[b][1])} disabled={disableButton}/><br/>
                  </div>
                </div>
              </div>
            </div>
          </div>);
        }
      }
    }
    if (bugInfo.length % 2 != 0) {
      content.push(<div className="infoContainer">
        <div className="row p-4">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="row">
              <div className="col-lg-4">
                {bugInfo[bugInfo.length - 1][0]}
              </div>
              <div className="col-lg-6">
                <input type="text" className="inputfield2" placeholder={bugInfo[bugInfo.length - 1][1]} disabled={disableButton}/><br/>
              </div>
            </div>
          </div>
        </div>
      </div>);
    }
  }

  if (load == 1) {
    console.log("At info:", bugInformation);
    loadData();
  }

  return (<div>
    <div>
      {bugBar}
    </div>
    <div>
      {content}
    </div>
  </div>);
}

export default GlobalBugInfo;
