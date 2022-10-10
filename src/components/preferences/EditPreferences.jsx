import React, {useState, useEffect, Component} from "react";
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';


class EditPreferences extends Component {
state = {
    isType: false,
    isStatus: false,
    isPriority: false,
    isSeverity: false,
    isSummary: false,
    isProduct: false,
    isPlatform: false,
    isResolution: false,
    isTarget_milestone: false,
    isClassification: false,
    isIs_confirmed: false,
    isIs_open: false,
    isQa_contact: false,
    isCreator_detail: false,
    isAssigned_to_detail: false,
    isLast_change_time: false,
    isCreation_time: false,


    submitState: false,
};

onChangeType = () => {
    this.setState(initialState => ({
      isType: !initialState.isType,
    }));
}

onChangeStatus = () => {
    this.setState(initialState => ({
      isStatus: !initialState.isStatus,
    }));
}

onChangePriority = () => {
    this.setState(initialState => ({
      isPriority: !initialState.isPriority,
    }));
}

onChangeSeverity = () => {
    this.setState(initialState => ({
      isSeverity: !initialState.isSeverity,
    }));
}

onChangeSummary = () => {
    this.setState(initialState => ({
      isSummary: !initialState.isSummary,
    }));
}

onChangeProduct = () => {
    this.setState(initialState => ({
      isProduct: !initialState.isProduct,
    }));
}

onChangePlatform = () => {
    this.setState(initialState => ({
      isPlatform: !initialState.isPlatform,
    }));
}

onChangeResolution = () => {
    this.setState(initialState => ({
      isResolution: !initialState.isResolution,
    }));
}

onChangeTarget_milestone = () => {
    this.setState(initialState => ({
      isTarget_milestone: !initialState.isTarget_milestone,
    }));
}

onChangeClassification = () => {
    this.setState(initialState => ({
      isClassification: !initialState.isClassification,
    }));
}

onChangeIs_confirmed = () => {
    this.setState(initialState => ({
      isIs_confirmed: !initialState.isIs_confirmed,
    }));
}

onChangeIs_open = () => {
    this.setState(initialState => ({
      isIs_open: !initialState.isIs_open,
    }));
}

onChangeQa_contact = () => {
    this.setState(initialState => ({
      isQa_contact: !initialState.isQa_contact,
    }));
}

onChangeCreator_detail = () => {
    this.setState(initialState => ({
      isCreator_detail: !initialState.isCreator_detail,
    }));
}

onChangeAssigned_to_detail = () => {
    this.setState(initialState => ({
      isAssigned_to_detail: !initialState.isAssigned_to_detail,
    }));
}

onChangeLast_change_time = () => {
    this.setState(initialState => ({
      isLast_change_time: !initialState.isLast_change_time,
    }));
}

onChangeCreation_time = () => {
    this.setState(initialState => ({
      isCreation_time: !initialState.isCreation_time,
    }));
}


 routeChange = () => {
    alert('Your preferences have been saved successfully!');
    window.location.href='/home';
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

onSubmit = (e) => {
    e.preventDefault();
    let checkArray = [];
    for (var key in this.state) {
      if (this.state[key] === true) {
        checkArray.push(key);
      }
    }
    let checkData = {
      checkbox: checkArray.toString()
    };
    console.log('submitted');
    console.log(checkArray);
  }



render() {

    return (
        <div className="preferencesbox">
            <div className="row">
                <div className="heading2"><b>EDIT YOUR PREFERENCES FOR BUG INFO FIELDS</b></div>
                <br/>
                <br/>

            </div>

            <form onSubmit={this.onSubmit}>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isType} onChange={this.onChangeType}/>
                        <label class="form-check-label" for="flexSwitchCheckDefault">Type</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isStatus} onChange={this.onChangeStatus} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Status</label>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isPriority} onChange={this.onChangePriority} />
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
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isSeverity} onChange={this.onChangeSeverity} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Severity</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isSummary} onChange={this.onChangeSummary} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Summary</label>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isProduct} onChange={this.onChangeProduct} />
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
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isPlatform} onChange={this.onChangePlatform} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Platform</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isResolution} onChange={this.onChangeResolution} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Resolution</label>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isTarget_milestone} onChange={this.onChangeTarget_milestone} />
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
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isClassification} onChange={this.onChangeClassification} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Classification</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isIs_confirmed} onChange={this.onChangeIs_confirmed} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Is Confirmed</label>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isIs_open} onChange={this.onChangeIs_open} />
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
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isQa_contact} onChange={this.onChangeQa_contact} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">QA Contact</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isCreator_detail} onChange={this.onChangeCreator_detail} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Creator Details</label>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isAssigned_to_detail} onChange={this.onChangeAssigned_to_detail} />
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
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isLast_change_time} onChange={this.onChangeLast_change_timet} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Last Change Time</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isCreation_time} onChange={this.onChangeCreation_time} />
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
                <div className="col-lg-2 col-md-6 col-sm-6"><button className="btn btn-sm submitpreferencesbtn btn-secondary" onSubmit={this.onSubmit}
                onClick={this.routeChange}>Submit Preferences</button></div>
            </div>

            </form>

        </div>
    )
    }
}



export default EditPreferences;
