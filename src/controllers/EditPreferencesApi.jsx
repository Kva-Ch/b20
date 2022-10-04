import * as Constants from "../constants.js";
import axios from 'axios';

async function EditPreferencesApi() {
    var url = Constants.base_url + "/auth/bug/BugInfo/" + bugid;
    let preferences = [];

    var config = {
        method: 'post',
        url: url,
        headers: {}
      };

    await axios(config).then(function(response) {
        // console.log(response.data, typeof(response.data["bugs"]));
        // console.log(response.data.bugs[0]);
        preferences = response.data;

      }).catch(function(error) {
        console.log(error);
      });
}

export default EditPreferencesApi;
