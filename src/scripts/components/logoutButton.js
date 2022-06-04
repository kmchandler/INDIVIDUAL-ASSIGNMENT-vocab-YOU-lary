import firebase from 'firebase/app';
import 'firebase/auth';

const signMeOut = () => {
  firebase.auth().signOut();
};

const logoutButton = () => {
  const domString = '<a id="google-auth">Log Out</a>';
  document.querySelector('#logout-nav').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
