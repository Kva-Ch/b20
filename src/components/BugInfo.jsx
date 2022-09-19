import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import ReactDOM from 'react-dom';

function BugInfo(props) {

  const bugid = parseInt(props.bugid);
  let content = [];
  const [disableButton, setDisableButton] = useState(true);

  const bugBar = [];
  const bugInformation = {
    Comment_count: "10",
    Deadline:           "20-9-2022",
    Type :                "Access",
    Status:               "In Process",
    Priority:             "Low",
    Severity :            "Low",
    Summary   :           "Summary",
    Product    :          "Product",
    Platform    :         "Platform",
    Resolution   :        "Resolution",
    Target_milestone:     "Target Milestone",
    Classification   :    "Classification",
    Is_confirmed      :   "Is Confirmed",
    Is_open            :  "Is Open",
    Qa_contactID        : "QA Contact Id",
    Creator_detailID :    "Creator detail Id",
    Assigned_to_detailID: "Assigned to detail",
    Qa_contact        :   {
	                           Id: "",
	                            Real_name: "",
	                             Name: "",
	                              Email:     "",
	                               Nick: ""
                               },
    Creator_detail     :  {
	                           Id: "",
	                            Real_name: "",
	                             Name: "",
	                              Email:     "",
	                               Nick: ""
                               },
    Assigned_to_detail  : {
	                           Id: "",
	                            Real_name: "",
	                             Name: "",
	                              Email:     "",
	                               Nick: ""
                               },
    Cc_details         : [{
	                           Id: "",
	                            Real_name: "",
	                             Name: "",
	                              Email:     "",
	                               Nick: ""
                               }],
    Last_change_time :" LastChangeTime",
    Creation_time    :"Creation Time",
    Assigned_to       : "AssignedTo",
    Creator            :"Creator",
  };

  bugBar.push(
      <div className="row">
                  <div className="col-lg-9">
                      <div className="profileheading">Bug Info: {bugid}</div>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-3 btndiv">
                {/*<button className="btn btn-lg editbtn" onClick={() => setDisableButton(!disableButton)}>Edit Preferences</button>*/}
                  </div>
      </div>

  )

  let bugInfo = Object.entries(bugInformation);

  for(let i=0;i<bugInfo.length-1;i+=2){
      let a=i, b=i+1;
      console.log(a,b, bugInfo[a], bugInfo[b]);
      if(bugInfo[a][0]==="Qa_contact" || bugInfo[a][0]==="Creator_detail" || bugInfo[a][0]==="Assigned_to_detail" || bugInfo[a][0]==="Cc_details" || bugInfo[b][0]==="Qa_contact" || bugInfo[b][0]==="Creator_detail" || bugInfo[b][0]==="Assigned_to_detail" || bugInfo[b][0]==="Cc_details"){

      } else {
        content.push(
          <div className="infoContainer">
          <div className="row p-4">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="row">
                <div className="col-lg-3">
                  {bugInfo[a][0]}
                </div>
                <div className="col-lg-6">
                  <input type="text" className="inputfield2" placeholder={bugInfo[a][1]} disabled={disableButton}/><br/>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="row">
                <div className="col-lg-2">
                  {bugInfo[b][0]}
                </div>
                <div className="col-lg-6">
                  <input type="text" className="inputfield2" placeholder={bugInfo[b][1]} disabled={disableButton}/><br/>
                </div>
              </div>
            </div>
          </div>
          </div>

        );
      }
  }
  if(bugInfo.length%2!=0){
    content.push(
      <div className="infoContainer">
      <div className="row p-4">
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="row">
            <div className="col-lg-3">
              {bugInfo[bugInfo.length-1][0]}
            </div>
            <div className="col-lg-6">
              <input type="text" className="inputfield2" placeholder={bugInfo[bugInfo.length-1][1]} disabled={disableButton}/><br/>
            </div>
          </div>
        </div>
        </div>
        </div>
      );
  }

  return (
    <div>
    <div>
      {bugBar}
    </div>
    <div>
      {content}
    </div>
    </div>
  );
}

export default BugInfo;
