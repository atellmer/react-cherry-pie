/** @flow */
import axois from 'axios';

const API_URL = 'http://localhost:4000/signin';

function checkUser(login: string, password: string) {
  const promise = new Promise((resolve, reject) => {
    axois.post(API_URL, {
      email: login,
      password
    })
    .then(res => {
      const { data } = res;
      const { success } = data;

      if (success) {
        resolve(data);
      } else {
        reject(data);
      }
    })
    .catch(err => {
      reject(`error: ${err}`);
    });
  });

  return promise;
}

export default checkUser;
