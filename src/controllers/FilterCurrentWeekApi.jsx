import * as Constants from "../constants.js";
import axios from 'axios';


async function FilterCurrentWeekApi(month) {

    var url = Constants.base_url + "/auth/filterCurrentWeek/?year=" + 2000 + "&userId=" + 4477 + "&month=" + 12;

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
