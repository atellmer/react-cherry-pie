/** @flow */

function addUser(login, password) {
  const promise = new Promise(resolve => {
    console.log(password);

    resolve({
      user: {
        _id: 'qqqq',
        email: login
      }
    });
  });

  return promise;
}

export default addUser;
