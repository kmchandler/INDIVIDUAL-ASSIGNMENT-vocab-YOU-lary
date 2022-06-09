import signIn from '../helpers/signIn';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<h5 id="welcomeMessage">Welcome to vocab-YOU-lary</h5><h2 id="welcomeMessage2">Login to view and manage your vocab cards.</h2><button id="google-auth" class="btn btn-danger">LOGIN WITH GOOGLE</button>';
  document.querySelector('#login-form-container').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
