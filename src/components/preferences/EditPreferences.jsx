import React, {useState, useEffect, Component} from "react";
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {generatePath, useNavigate} from 'react-router';
import GetUserPreferencesApi from "../../controllers/GetUserPreferencesApi.jsx";
import EditUserPreferencesApi from "../../controllers/EditUserPreferencesApi.jsx";

async function callApi() {
  let temp = await GetUserPreferencesApi();
  return temp;
}

async function callEditUserPreferences(data) {
  let temp = await EditUserPreferencesApi(data);
  return temp;
}

class EditPreferences extends Component {
  // let navigate = useNavigate();
  state = {
    Type: false,
    Status: false,
    Priority: false,
    Severity: false,
    Summary: false,
    Product: false,
    Platform: false,
    Resolution: false,
    Target_milestone: false,
    Classification: false,
    Is_confirmed: false,
    Is_open: false,
    Qa_contact: false,
    Creator_detail: false,
    Assigned_to_detail: false,
    Last_change_time: false,
    Creation_time: false,
    submitState: false
  };

  async componentDidMount() {
    let preferences = await callApi();
    this.setState(initialState => ({
      Type: preferences["Type"],
      Status: preferences["Status"],
      Priority: preferences["Priority"],
      Severity: preferences["Severity"],
      Summary: preferences["Summary"],
      Product: preferences["Product"],
      Platform: preferences["Platform"],
      Resolution: preferences["Resolution"],
      Target_milestone: preferences["Target_milestone"],
      Classification: preferences["Classification"],
      Is_confirmed: preferences["Is_confirmed"],
      Is_open: preferences["Is_open"],
      Qa_contact: preferences["Qa_contact"],
      Creator_detail: preferences["Creator_detail"],
      Assigned_to_detail: preferences["Assigned_to_detail"],
      Last_change_time: preferences["Last_change_time"],
      Creation_time: preferences["Creation_time"]
    }));
  }
  // async componentDidUpdate() {
  //   let preferences = await callApi();
  //   this.setState(initialState => ({
  //     Type: preferences["Type"],
  //     Status: preferences["Status"],
  //     Priority: preferences["Priority"],
  //     Severity: preferences["Severity"],
  //     Summary: preferences["Summary"],
  //     Product: preferences["Product"],
  //     Platform: preferences["Platform"],
  //     Resolution: preferences["Resolution"],
  //     Target_milestone: preferences["Target_milestone"],
  //     Classification: preferences["Classification"],
  //     Is_confirmed: preferences["Is_confirmed"],
  //     Is_open: preferences["Is_open"],
  //     Qa_contact: preferences["Qa_contact"],
  //     Creator_detail: preferences["Creator_detail"],
  //     Assigned_to_detail: preferences["Assigned_to_detail"],
  //     Last_change_time: preferences["Last_change_time"],
  //     Creation_time: preferences["Creation_time"]
  //   }));
  // }

  onChangeType = () => {
    this.setState(initialState => ({
      Type: !initialState.Type
    }));
  }

  onChangeStatus = () => {
    this.setState(initialState => ({
      Status: !initialState.Status
    }));
  }

  onChangePriority = () => {
    this.setState(initialState => ({
      Priority: !initialState.Priority
    }));
  }

  onChangeSeverity = () => {
    this.setState(initialState => ({
      Severity: !initialState.Severity
    }));
  }

  onChangeSummary = () => {
    this.setState(initialState => ({
      Summary: !initialState.Summary
    }));
  }

  onChangeProduct = () => {
    this.setState(initialState => ({
      Product: !initialState.Product
    }));
  }

  onChangePlatform = () => {
    this.setState(initialState => ({
      Platform: !initialState.Platform
    }));
  }

  onChangeResolution = () => {
    this.setState(initialState => ({
      Resolution: !initialState.Resolution
    }));
  }

  onChangeTarget_milestone = () => {
    this.setState(initialState => ({
      Target_milestone: !initialState.Target_milestone
    }));
  }

  onChangeClassification = () => {
    this.setState(initialState => ({
      Classification: !initialState.Classification
    }));
  }

  onChangeIs_confirmed = () => {
    this.setState(initialState => ({
      Is_confirmed: !initialState.Is_confirmed
    }));
  }

  onChangeIs_open = () => {
    this.setState(initialState => ({
      Is_open: !initialState.Is_open
    }));
  }

  onChangeQa_contact = () => {
    this.setState(initialState => ({
      Qa_contact: !initialState.Qa_contact
    }));
  }

  onChangeCreator_detail = () => {
    this.setState(initialState => ({
      Creator_detail: !initialState.Creator_detail
    }));
  }

  onChangeAssigned_to_detail = () => {
    this.setState(initialState => ({
      Assigned_to_detail: !initialState.Assigned_to_detail
    }));
  }

  onChangeLast_change_time = () => {
    this.setState(initialState => ({
      Last_change_time: !initialState.Last_change_time
    }));
  }

  onChangeCreation_time = () => {
    this.setState(initialState => ({
      Creation_time: !initialState.Creation_time
    }));
  }

  routeChange = async (e) => {
    e.preventDefault();
    let checkArray = [];
    let submittedPreferences = {}
    for (var key in this.state) {
      if (key != "submitState") {
        checkArray.push(key);
        submittedPreferences[key] = this.state[key]
      }
    }
    let checkData = {
      checkbox: checkArray.toString()
    };
    // var i = 0;
    // while (i < checkArray.length) {
    //   submittedPreferences[checkArray[i]] = true
    //   i++;
    // }
    console.log("CheckArray:", checkArray);
    console.log("SubmittedPreferences", submittedPreferences);
    let temp = await callEditUserPreferences(this.state);
    console.log(temp);
    if (temp === 200) {
      // window.location.href = '/preferences';
    } else {
      // window.location.href = '/home';
    }
    // alert('Your preferences have been saved successfully!');
    // window.location.href = '/home';
  }

  // onSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(this.state);
  // }

  // onSubmit = (e) => {
  //     e.preventDefault();
  //     let checkArray = [];
  //     for (var key in this.state) {
  //       if (this.state[key] === true) {
  //         checkArray.push(key);
  //       }
  //     }
  //     let checkData = {
  //       checkbox: checkArray.toString()
  //     };
  //     axios.post(checkData)
  //       .then((res) => {
  //         console.log(res.data)
  //       }).catch((error) => {
  //         console.log(error)
  //       });
  //   }

  render() {

    return (<div className="preferencesbox">
      <div className="row">
        <div className="heading2">
          <b>EDIT YOUR PREFERENCES FOR BUG INFO FIELDS</b>
        </div>
        <br/>
        <br/>

      </div>

      <form onSubmit={this.onSubmit}>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 spacing">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Type} onChange={this.onChangeType}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Type</label>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 spacing">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Status} onChange={this.onChangeStatus}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Status</label>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Priority} onChange={this.onChangePriority}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Priority</label>
            </div>
          </div>

          <br/>
          <br/>
          <br/>

        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 spacing">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Severity} onChange={this.onChangeSeverity}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Severity</label>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 spacing">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Summary} onChange={this.onChangeSummary}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Summary</label>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Product} onChange={this.onChangeProduct}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Product</label>
            </div>
          </div>

          <br/>
          <br/>
          <br/>

        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 spacing">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Platform} onChange={this.onChangePlatform}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Platform</label>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 spacing">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Resolution} onChange={this.onChangeResolution}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Resolution</label>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Target_milestone} onChange={this.onChangeTarget_milestone}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Target Milestone</label>
            </div>
          </div>

          <br/>
          <br/>
          <br/>

        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 spacing">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Classification} onChange={this.onChangeClassification}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Classification</label>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 spacing">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Is_confirmed} onChange={this.onChangeIs_confirmed}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Is Confirmed</label>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Is_open} onChange={this.onChangeIs_open}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Is Open</label>
            </div>
          </div>

          <br/>
          <br/>
          <br/>

        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 spacing">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Qa_contact} onChange={this.onChangeQa_contact}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">QA Contact</label>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 spacing">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Creator_detail} onChange={this.onChangeCreator_detail}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Creator Details</label>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-4">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Assigned_to_detail} onChange={this.onChangeAssigned_to_detail}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Assigned To Details</label>
            </div>
          </div>

          <br/>
          <br/>
          <br/>

        </div>

        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 spacing">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Last_change_time} onChange={this.onChangeLast_change_timet}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Last Change Time</label>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 spacing">
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.Creation_time} onChange={this.onChangeCreation_time}/>
              <label class="form-check-label" for="flexSwitchCheckDefault">Creation Time</label>
            </div>
          </div>

          <br/>
          <br/>
          <br/>

          <br/>
          <br/>

        </div>

        <div className="row">
          <div className="col-lg-10"></div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <button className="btn btn-sm submitpreferencesbtn btn-secondary" onClick={this.routeChange}>Submit Preferences</button>
          </div>

        </div>

      </form>

    </div>)
  }
}

export default EditPreferences;
