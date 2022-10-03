import * as Constants from "../constants.js";
import axios from 'axios';

async function searchBugApi(bugid) {
  const url  = Constants.base_url + '/bug/' + bugid;
  let bugInfo = [];

  var config = {
    method: 'get',
    url: url,
    headers: {}
  };

  await axios(config).then(function(response) {
    // console.log(response.data, typeof(response.data["bugs"]));
    // console.log(response.data.bugs[0]);
    bugInfo = response.data;
  }).catch(function(error) {
    console.log(error);
  });
  return bugInfo;
}

export default searchBugApi;
