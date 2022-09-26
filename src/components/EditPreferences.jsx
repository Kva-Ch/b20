import React, {useState, useEffect} from "react";

function EditPreferences(props) {
    const bugid = parseInt(props.bugid);

    const [disableButton, setDisableButton] = useState(true);

    const bugInformation = {
        "ID": 0,
        "CreatedAt": "2022-09-05T22:20:46.968199+05:30",
        "UpdatedAt": "2022-09-22T10:45:36.747303+05:30",
        "DeletedAt": null,
        "Id": 34620,
        "Comment_count": 151,
        "Type": "VELOS",
        "Status": "VERIFIED",
        "Priority": "P3",
        "Summary": "address book ",
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


    return (
        <div>
            <div className="row">
                <div className="heading"><b>EDIT YOUR PREFERENCES FOR BUG INFO FIELDS</b></div>
                <br/>
                <br/>
                <br/>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">ID</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Type</label>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
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
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Summary</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Product</label>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
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
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Priority</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Last Change Time</label>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
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
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Creator Details</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 spacing">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">Creation Time</label>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-4">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">QA Contact details</label>
                    </div>
                </div>

                <br/>
                <br/>
                <br/>

            </div>

            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6"><button className="btn btn-sm submitbtndiv btn-secondary">Submit Preferences</button></div>
            </div>

        </div>
    )

}

export default EditPreferences;