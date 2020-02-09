export const userService = {
  login,
  logout,
  register
};

async function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  // call `/users/authenticate` with requestOptions to authenticate the login process
  return await fetch('/users/authenticate', requestOptions).then(handleResponse);
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
  localStorage.clear();
}


async function register(user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  };

  return await fetch('/users/register', requestOptions).then(handleResponse);
}


function handleResponse(response) {
  if (!response.ok) {
    return Promise.reject(response.statusText);
  }

  localStorage.setItem('user', response.json());

  return response.json();
}
