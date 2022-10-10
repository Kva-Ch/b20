import * as Constants from "../constants.js";
import axios from 'axios';

/* for a specific month */
async function FilterByDayApi(month, year) {

    const userid = localStorage.getItem('uid');
    var url = Constants.base_url + "/auth/filterByDays/?year=" + year + "&userId=" + userid + "&month=" + month;

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

export default FilterByDayApi;
