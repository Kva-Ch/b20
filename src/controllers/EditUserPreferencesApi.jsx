import * as Constants from "../constants.js";
import axios from 'axios';

async function EditUserPreferencesApi(data) {

  const uid = localStorage.getItem('uid');
  const accessToken = localStorage.getItem('accessToken');
  const url = Constants.base_url + '/auth/editPreference/' + uid;
  const bearerToken = 'Bearer ' + accessToken;
  // console.log(sortBy);
  // const url= Constants.base_url + '/auth/bug/created/'+ uid;

  // console.log(uid);
  // console.log(accessToken);
  // console.log(url);
  let status = 400;
  console.log("Data: ", data);
  console.log("Url:", url);
  var config = {
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  await axios(config).then(function(response) {
    status = 200;
    console.log("Response:", response.data)
  }).catch(function(error) {
    console.log(error);
  });
  console.log(status);
  return status;
}

export default EditUserPreferencesApi;
