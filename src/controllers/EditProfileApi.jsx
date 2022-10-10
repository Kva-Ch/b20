import * as Constants from "../constants.js";
import axios from 'axios';

async function editProfileApi(body) {
  const userid = localStorage.getItem('uid');
  const url  = Constants.base_url + '/auth/editprofile/';
  let returnValue = 400;
  console.log(body);

  var config = {
    method: 'put',
    url: url,
    data: body
  };

  await axios(config).then(function(response) {
    // console.log(response.data, typeof(response.data["bugs"]));
    // console.log(response.data.bugs[0]);
    alert(response.data);
    console.log(response.data);
    returnValue = 200;
  }).catch(function(error) {
    console.log(error);
  });

//   var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append("Access-Control-Allow-Origin", "*");
//
// var requestOptions = {
//   method: 'PUT',
//   headers: myHeaders,
//   body: body,
//   redirect: 'follow'
// };
//
// fetch(url, requestOptions)
//   .then(response => response.text())
//   .then(data => {console.log(data);})
//   .catch(error => console.log('error', error));

  return returnValue;
}

export default editProfileApi;
