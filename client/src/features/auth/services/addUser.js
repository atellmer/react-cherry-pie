/** @flow */
function addUser(login: string, password: string) {
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
