import * as Constants from "../constants.jsx";
import axios from 'axios';

/* across several years : line chart */
async function FilterAcrossYearsApi(fromYear, toYear) {

    var url = Constants.base_url + "/auth/filterByYear/?from=" + 2000 + "&to=" + 2004 + "&userId=" + 3340;
    
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

export default FilterAcrossYearsApi;