import * as Constants from "../constants.js";
import axios from 'axios';

/* for a specific year */
async function FilterByMonthApi(year) {

    var url = Constants.base_url + "/auth/filterByMonth/?year=" + 1999 + "&userId=" + 1670;

    var config = {
      method: 'get',
      url: url,
      headers: {}
    };

    let returnValue;

    // await axios({
    //   url: url,
    //   method: "GET",
    // }).then((res) => {
    //   const data = res.data;
    //   // console.log(data.status, typeof(data.status));
    //   console.log(data)

    // }).catch((err) => {
    //   returnValue = 400;
    //   alert(err.message);
    // });

    await axios(config).then(function(response) {
      // console.log(response.data, typeof(response.data["bugs"]));
      // console.log(response.data.bugs[0]);
      returnValue = response.data;

    }).catch(function(error) {
      console.log(error);
    });

    return returnValue;

}

export default FilterByMonthApi;
