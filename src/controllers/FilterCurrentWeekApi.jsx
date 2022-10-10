import * as Constants from "../constants.js";
import axios from 'axios';

async function FilterCurrentWeekApi(month) {

  const userId = localStorage.getItem('uid');
  var url = Constants.base_url + "/filterByWeek/?userId=" + userId;

  var config = {
    method: 'get',
    url: url,
    headers: {}
  };

  let returnValue;

  await axios(config).then(function(response) {
    // console.log(response.data, typeof(response.data["bugs"]));
    // console.log(response.data.bugs[0]);
    returnValue = response.data;

  }).catch(function(error) {
    console.log(error);
  });

  return returnValue;

}

export default FilterCurrentWeekApi;
