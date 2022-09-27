import React, {useState, useEffect, Component} from "react";
import axios from 'axios';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom';


class EditPreferences extends Component {
state = {
    isId: false,
    isType: false,
    isStatus: false,
    isSummary: false,
    isProduct: false,
    isSeverity: false,
    isPriority: false,
    isLastChangeTime: false,
    isAssignedToDetails: false,
    isCreatorDetails: false,
    isCreationTime: false,
    isQaContactDetails: false,

    submitState: false,
};

onChangeID = () => {
    this.setState(initialState => ({
      isId: !initialState.isId,
    }));
}

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

onChangeSeverity = () => {
    this.setState(initialState => ({
      isSeverity: !initialState.isSeverity,
    }));
}

onChangePriority = () => {
    this.setState(initialState => ({
      isPriority: !initialState.isPriority,
    }));
}

onChangeLastChangeTime = () => {
    this.setState(initialState => ({
      isLastChangeTime: !initialState.isLastChangeTime,
    }));
}

onChangeAssignedToDetails = () => {
    this.setState(initialState => ({
      isAssignedToDetails: !initialState.isAssignedToDetails,
    }));
}

onChangeAssignedToDetails = () => {
    this.setState(initialState => ({
      isAssignedToDetails: !initialState.isAssignedToDetails,
    }));
}

onChangeCreatorDetails = () => {
    this.setState(initialState => ({
      isCreatorDetails: !initialState.isCreatorDetails,
    }));
}

onChangeCreationTime = () => {
    this.setState(initialState => ({
      isCreationTime: !initialState.isCreationTime,
    }));
}

onChangeQaContactDetails = () => {
    this.setState(initialState => ({
      isQaContactDetails: !initialState.isQaContactDetails,
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

    console.log(this.state);
  }



render() {

    return (
        <div>
            <div className="row">
                <div className="heading"><b>EDIT YOUR PREFERENCES FOR BUG INFO FIELDS</b></div>
                <br/>
                <br/>
                <br/>

                <br/>
                <br/>
            </div>

            <form onSubmit={this.onSubmit}>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isId} onChange={this.onChangeId}/>
                        <label class="form-check-label" for="flexSwitchCheckDefault">ID</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isType} onChange={this.onChangeType} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Type</label>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isStatus} onChange={this.onChangeStatus} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Status</label>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>

            </div>

            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isSummary} onChange={this.onChangeSummary} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Summary</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isProduct} onChange={this.onChangeProduct} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Product</label>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isSeverity} onChange={this.onChangeSeverity} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Severity</label>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>

            </div>

            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isPriority} onChange={this.onChangePriority} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Priority</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isLastChangeTime} onChange={this.onChangeLastChangeTime} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Last Change Time</label>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isAssignedToDetails} onChange={this.onChangeAssignedToDetails} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Assigned to details</label>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>

            </div>

            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isCreatorDetails} onChange={this.onChangeCreatorDetails} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Creator Details</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isCreationTime} onChange={this.onChangeCreationTime} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Creation Time</label>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={this.state.isQaContactDetails} onChange={this.onChangeQaContactDetails} />
                        <label class="form-check-label" for="flexSwitchCheckDefault">QA Contact details</label>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>

                <br/>
                <br/>
                <br/>

            </div>

            <div className="row">
                <div className="col-lg-8"></div>
                <div className="col-lg-4 col-md-6 col-sm-6"><button className="btn btn-sm submitpreferencesbtn btn-secondary" onSubmit={this.onSubmit}
                onClick={this.routeChange}>Submit Preferences</button></div>
            </div>

            </form>

        </div>
    )
    }
}



export default EditPreferences;