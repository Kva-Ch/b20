import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import React, {useState, useEffect} from "react";
import {generatePath, useNavigate} from 'react-router';
import ProfileApi from "../../controllers/ProfileApi.jsx";
import EditProfileApi from "../../controllers/EditProfileApi.jsx";

function Profile(props) {
  var length = 10;
  const [profileData, setProfileData] = useState({});
  let content = [];
  const [disableButton, setDisableButton] = useState(true)

  const [ID, setID] = useState(0);
  const [UserId, setUserId] = useState(0);
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  let navigate = useNavigate();

  async function callApi() {
    let temp = await ProfileApi();
    setProfileData(temp);
    console.log(profileData);
    setID(temp["ID"]);
    setUserId(temp["UserId"]);
    setName(temp["Name"]);
    setEmail(temp["Email"]);
    console.log(ID,UserId);
  }

  useEffect(() => {
    callApi();
  }, []);

  const handleChange = (key, e) => {
    switch (key) {
      case "ID":
        setID(e.target.value);
        break;

      case "UserId":
        setUserId(e.target.value);
        break;

      case "Name":
        setName(e.target.value);
        break;

      case "Email":
        setEmail(e.target.value);
        break;
    }
  }

  function returnValue(key) {
    switch (key) {
      case "ID":
        return ID;
        break;

      case "UserId":
        return UserId;
        break;

      case "Name":
        return Name;
        break;

      case "Email":
        return Email;
        break;
    }
  }

  function editProfile(){
    const body = {
      ID: ID,
      UserId: UserId,
      Name: Name,
      Email: Email
    };
    let temp = EditProfileApi(body);
    if(temp===200){
      navigate("/profile");
    } else{
      navigate("/home");
    }
  }

  content.push(<div className="row">
    <div className="col-lg-9 col-md-9 col-sm-9">
      <div className="heading">Profile</div>
    </div>
    {
      disableButton
        ? <div className="col-lg-3 col-md-3 col-sm-3 btndiv">
            <button className="btn btn-lg editbtn" onClick={() => setDisableButton(!disableButton)}>Edit Profile</button>
          </div>
        : <div className="col-lg-3 col-md-3 col-sm-3 btndiv">
            <button className="btn btn-lg editbtn" onClick={() => setDisableButton(!disableButton)}>Disable Edit Mode</button>
          </div>
    }
  </div>);

  Object.entries(profileData).map(item => {
    if (item[0] === "UserId" || item[0] === "ID" || item[0] === "Name" || item[0] === "Email") {
      content.push(<div className="profilediv">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 leftcontent">
            {item[0]}
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3">
            <input type="text" className="inputfield2" value={returnValue(item[0])} disabled={disableButton} onChange = {(e) => handleChange(item[0], e)}/><br/>
          </div>
        </div>
      </div>);
    } else if (item[0] === "User2") {
      content.push(<div className="profilediv">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-2 leftcontent">
            {item[0]}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="infodiv">
              <div className="row">
                <div className="col-lg-3">Id</div>
                <div className="col-lg-9">{
                    item[1]['Id'] === null
                      ? item[1]['Id']
                      : "None"
                  }</div>
              </div>
              <div className="row">
                <div className="col-lg-3">Name</div>
                <div className="col-lg-9">{
                    item[1]["Name"]
                      ? item[1]["Name"]
                      : "None"
                  }</div>
              </div>
              <div className="row">
                <div className="col-lg-3">Email</div>
                <div className="col-lg-9">{
                    item[1]["Email"]
                      ? item[1]["Email"]
                      : "None"
                  }</div>
              </div>
              <div className="row">
                <div className="col-lg-3">RealName</div>
                <div className="col-lg-9">{
                    item[1]["Real_name"]
                      ? item[1]["Real_name"]
                      : "None"
                  }</div>
              </div>
              <div className="row">
                <div className="col-lg-3">NickName</div>
                <div className="col-lg-9">{
                    item[1]["Nick"]
                      ? item[1]["Nick"]
                      : "None"
                  }</div>
              </div>

            </div>
          </div>
        </div>
      </div>);
    }

  });

  content.push(<div className="row">
    <div className="col-lg-9 col-md-9 col-sm-9"></div>
    <div className="col-lg-3 col-md-3 col-sm-3 submitbtndiv">
      <button className="btn btn-lg submitbtn" onClick = {editProfile} style={{
          visibility: disableButton
            ? 'hidden'
            : 'visible'
        }}>Submit</button>
    </div>
  </div>);

  return (<div>{content}</div>);
}

export default Profile;
