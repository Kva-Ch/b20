import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';

function BugInfo(props) {

  const bugid = parseInt(props.bugid);
  let content = [];
  const [disableButton, setDisableButton] = useState(true);

  const bugBar = [];
  const preferences = ["Id", "Status", "Priority", "Severity", "Summary", "Last_change_time"];
  const bugInformation = {
    "ID": 0,
    "CreatedAt": "2022-09-05T22:20:46.968199+05:30",
    "UpdatedAt": "2022-09-22T10:45:36.747303+05:30",
    "DeletedAt": null,
    "Id": 34620,
    "Comment_count": 151,
    "Type": "Sarthak",
    "Status": "VERIFIED",
    "Priority": "P3",
    "Summary": "address book nickname doesn't work doesn't workdoesn't workdoesn't workdoesn't workdoesn't workdoesn't work",
    "Severity": "normal",
    "Product": "MailNews Core",
    "Platform": "Other",
    "Resolution": "FIXED",
    "Target_milestone": "M16",
    "Classification": "Components",
    "Is_confirmed": true,
    "Is_open": false,
    "Qa_contactID": 4114,
    "Creator_detailID": 14096,
    "Assigned_to_detailID": 4465,
    "Qa_contact": {
      "ID": 0,
      "CreatedAt": "2022-09-05T22:20:46.952779+05:30",
      "UpdatedAt": "2022-09-05T22:20:46.952779+05:30",
      "DeletedAt": null,
      "Id": 4114,
      "Real_name": "",
      "Name": "esther@formerly-netscape.com.tld",
      "Email": "esther@formerly-netscape.com.tld",
      "Nick": "esther"
    },
    "Creator_detail": {
      "ID": 0,
      "CreatedAt": "2022-09-05T22:20:46.956671+05:30",
      "UpdatedAt": "2022-09-05T22:20:46.956671+05:30",
      "DeletedAt": null,
      "Id": 14096,
      "Real_name": "",
      "Name": "dragon@gocougs.wsu.edu",
      "Email": "dragon@gocougs.wsu.edu",
      "Nick": "dragon"
    },
    "Assigned_to_detail": {
      "ID": 0,
      "CreatedAt": "2022-09-05T22:20:46.96076+05:30",
      "UpdatedAt": "2022-09-05T22:20:46.96076+05:30",
      "DeletedAt": null,
      "Id": 4465,
      "Real_name": "Jean-Francois Ducarroz",
      "Name": "bugzilla@ducarroz.org",
      "Email": "bugzilla@ducarroz.org",
      "Nick": "bugzilla"
    },
    "Last_change_time": "2008-07-31T13:52:10+05:30",
    "Creation_time": "2000-04-06T00:16:02+05:30"
  };

  bugBar.push(<div className="row">
    <div className="col-lg-9">
      <div className="heading">Bug Info: {bugid}</div>
    </div>
    <div className="col-lg-3 col-md-3 col-sm-3 btndiv">
      {/* <button className="btn btn-lg editbtn" onClick={() => setDisableButton(!disableButton)}>Edit Preferences</button> */}
    </div>
  </div>)

  let bugInfo = Object.entries(bugInformation);

  for (let i = 0; i < bugInfo.length - 1; i += 2) {
    let a = i,
      b = i + 1;
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
                      <div className="col-lg-9">{bugInfo[a][1]["Id"]?bugInfo[a][1]["Id"]:"None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Name</div>
                      <div className="col-lg-9">{bugInfo[a][1]["Name"]?bugInfo[a][1]["Name"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Email</div>
                      <div className="col-lg-9">{bugInfo[a][1]["Email"]?bugInfo[a][1]["Email"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">RealName</div>
                      <div className="col-lg-9">{bugInfo[a][1]["Real_name"]?bugInfo[a][1]["Real_name"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">NickName</div>
                      <div className="col-lg-9">{bugInfo[a][1]["Nick"]?bugInfo[a][1]["Nick"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Created At</div>
                      <div className="col-lg-9">{bugInfo[a][1]["CreatedAt"]?bugInfo[a][1]["CreatedAt"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Updated At</div>
                      <div className="col-lg-9">{bugInfo[a][1]["UpdatedAt"]?bugInfo[a][1]["UpdatedAt"]: "None"}</div>
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
                      <div className="col-lg-9">{bugInfo[b][1]["Id"]?bugInfo[b][1]["Id"]:"None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Name</div>
                      <div className="col-lg-9">{bugInfo[b][1]["Name"]?bugInfo[b][1]["Name"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Email</div>
                      <div className="col-lg-9">{bugInfo[b][1]["Email"]?bugInfo[b][1]["Email"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">RealName</div>
                      <div className="col-lg-9">{bugInfo[b][1]["Real_name"]?bugInfo[b][1]["Real_name"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">NickName</div>
                      <div className="col-lg-9">{bugInfo[b][1]["Nick"]?bugInfo[b][1]["Nick"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Created At</div>
                      <div className="col-lg-9">{bugInfo[b][1]["CreatedAt"]?bugInfo[b][1]["CreatedAt"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Updated At</div>
                      <div className="col-lg-9">{bugInfo[b][1]["UpdatedAt"]?bugInfo[b][1]["UpdatedAt"]: "None"}</div>
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
                      <div className="col-lg-9">{bugInfo[a][1]["Id"]?bugInfo[a][1]["Id"]:"None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Name</div>
                      <div className="col-lg-9">{bugInfo[a][1]["Name"]?bugInfo[a][1]["Name"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Email</div>
                      <div className="col-lg-9">{bugInfo[a][1]["Email"]?bugInfo[a][1]["Email"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">RealName</div>
                      <div className="col-lg-9">{bugInfo[a][1]["Real_name"]?bugInfo[a][1]["Real_name"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">NickName</div>
                      <div className="col-lg-9">{bugInfo[a][1]["Nick"]?bugInfo[a][1]["Nick"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Created At</div>
                      <div className="col-lg-9">{bugInfo[a][1]["CreatedAt"]?bugInfo[a][1]["CreatedAt"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Updated At</div>
                      <div className="col-lg-9">{bugInfo[a][1]["UpdatedAt"]?bugInfo[a][1]["UpdatedAt"]: "None"}</div>
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
                      <div className="col-lg-9">{bugInfo[b][1]["Id"]?bugInfo[b][1]["Id"]:"None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Name</div>
                      <div className="col-lg-9">{bugInfo[b][1]["Name"]?bugInfo[b][1]["Name"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Email</div>
                      <div className="col-lg-9">{bugInfo[b][1]["Email"]?bugInfo[b][1]["Email"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">RealName</div>
                      <div className="col-lg-9">{bugInfo[b][1]["Real_name"]?bugInfo[b][1]["Real_name"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">NickName</div>
                      <div className="col-lg-9">{bugInfo[b][1]["Nick"]?bugInfo[b][1]["Nick"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Created At</div>
                      <div className="col-lg-9">{bugInfo[b][1]["CreatedAt"]?bugInfo[b][1]["CreatedAt"]: "None"}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3">Updated At</div>
                      <div className="col-lg-9">{bugInfo[b][1]["UpdatedAt"]?bugInfo[b][1]["UpdatedAt"]: "None"}</div>
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

    } else if( (preferences.indexOf(bugInfo[a][0]) > -1) || (preferences.indexOf(bugInfo[b][0]) > -1)  ) {
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

  return (<div>
    <div>
      {bugBar}
    </div>
    <div>
      {content}
    </div>
  </div>);
}

export default BugInfo;