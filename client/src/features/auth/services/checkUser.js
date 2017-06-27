/** @flow */

function checkUser(login, password) {
  const promise = new Promise((resolve, reject) => {
    if (login === 'alex' && password === '123') {
      resolve({
        user: {
          _id: '1',
          name: 'Alex'
        },
        token: 'xxxxxx'
      });
    } else {
      reject('This user is not existing');
    }
  });

  return promise;
}

export default checkUser;
