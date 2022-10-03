import * as Constants from "../constants.js";
import axios from 'axios';

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

async function loginApi(email, password) {
  var data = {
    "Email": email,
    "Password": password
  };
  var url = Constants.base_url + "/login";
  // console.log("Here 2");
  let returnValue;
  // await axios({
  //   url: url,
  //   method: "POST",
  //   data: data
  // }).then((res) => {
  //    console.log("Here 3");
  //   const data = res.data;
  //    console.log(data.status, typeof(data.status));
  //   if(localStorage.getItem('accessToken')){
  //       localStorage.removeItem('accessToken');
  //   }
  //   if(localStorage.getItem('uid')){
  //       localStorage.removeItem('uid');
  //   }
  //   if (data.status == true) {
  //      user logged in safe
  //     if (data.token) {
  //       localStorage.setItem('accessToken', data.token);
  //     }
  //     if(data.user.UserId){
  //       localStorage.setItem('uid', data.user.UserId);
  //     }
  //     returnValue = 200;
  //   } else {
  //      credentials wrong or such cases
  //     if(localStorage.getItem('accessToken')){
  //         localStorage.removeItem('accessToken');
  //     }
  //     if(localStorage.getItem('uid')){
  //         localStorage.removeItem('uid');
  //     }
  //     alert(data.message);
  //     returnValue = 400;
  //   }
  // }).catch((err) => {
  //   returnValue = 400;
  //   alert(err.message);
  // });

  var config = {
    method: 'post',
    url: url,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  await axios(config).then(function(res) {
    const data = res.data;

    if (localStorage.getItem('accessToken')) {
      localStorage.removeItem('accessToken');
    }
    if (localStorage.getItem('uid')) {
      localStorage.removeItem('uid');
    }
    if (data.status == true) {
      // user logged in safe
      if (data.token) {
        localStorage.setItem('accessToken', data.token);
      }
      if (data.user.UserId) {
        localStorage.setItem('uid', data.user.UserId);
      }
      localStorage.setItem("pageNumber", 1);
      localStorage.setItem("sortBy", 'id');
      returnValue = 200;
    } else {
      // credentials wrong or such cases
      if (localStorage.getItem('accessToken')) {
        localStorage.removeItem('accessToken');
      }
      if (localStorage.getItem('uid')) {
        localStorage.removeItem('uid');
      }
      alert(data.message);
      returnValue = 400;
    }
  }).catch(function(error) {
    returnValue = 400;
    alert(error.message);
  });
  return returnValue;
}

export default loginApi;
