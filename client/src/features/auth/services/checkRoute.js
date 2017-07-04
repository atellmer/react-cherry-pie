/** @flow */
function checkRoute() {
  const authorized = localStorage.getItem('token');

  if (authorized) {
    return true;
  }

  return false;
}

export default checkRoute;
