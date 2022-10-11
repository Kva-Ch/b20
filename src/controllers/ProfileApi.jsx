import * as Constants from "../constants.js";
import axios from 'axios';

async function progressApi() {
  const userid = localStorage.getItem('uid');
  const url  = Constants.base_url + '/ProfileInfo/' + userid;
  let returnValue = [];

  var config = {
    method: 'get',
    url: url,
    headers: {}
  };

  await axios(config).then(function(response) {
    // console.log(response.data, typeof(response.data["bugs"]));
    // console.log(response.data.bugs[0]);
    returnValue = response.data;
  }).catch(function(error) {
    console.log(error);
  });
  return returnValue;
}

export default progressApi;
