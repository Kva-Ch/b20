import * as Constants from "../constants.js";
import axios from 'axios';

async function GetUserPreferencesApi() {

  const uid = localStorage.getItem('uid');
  const accessToken = localStorage.getItem('accessToken');
  const url = Constants.base_url + '/auth/getPreference/' + uid;
  const bearerToken = 'Bearer ' + accessToken;
  // console.log(sortBy);
  // const url= Constants.base_url + '/auth/bug/created/'+ uid;

  // console.log(uid);
  // console.log(accessToken);
  // console.log(url);
  let preferences = [];

  await fetch(url, {
    method: 'GET',  //or 'PUT'
    mode: 'cors',
    // headers: {
    //   'Authorization': bearerToken,
    //   'x-access-token': accessToken,
    //
    // },
     // body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      preferences = data;
      console.log("Get preferences");
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    return preferences;
}

export default GetUserPreferencesApi;
