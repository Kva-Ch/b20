import * as Constants from "../constants.js";
import axios from 'axios';

async function assignedBugsApi(page, pageSize, sortBy) {

  const uid = localStorage.getItem('uid');
  const accessToken = localStorage.getItem('accessToken');
  const url = Constants.base_url + '/auth/bug/assigned/' + uid + '?page=' + page + '&pageSize=' + pageSize + '&sortBy=' + sortBy;
  const bearerToken = 'Bearer ' + accessToken;
  // console.log(sortBy);
  // const url= Constants.base_url + '/auth/bug/created/'+ uid;

  // console.log(uid);
  // console.log(accessToken);
  // console.log(url);
  let bugs= [];

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
      bugs = data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    return  [bugs,page];
}

export default assignedBugsApi;
