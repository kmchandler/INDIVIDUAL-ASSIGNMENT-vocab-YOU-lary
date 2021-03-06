import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from '../helpers/clearDom';
import clearSortBtns from '../helpers/clearSortBtns';
import loginButton from './loginButton';

const signMeOut = () => {
  firebase.auth().signOut();
  clearDom();
  clearSortBtns();
  loginButton();
};

const logoutButton = () => {
  const domString = '<a id="google-auth2">Log Out</a>';
  document.querySelector('#logout-nav').innerHTML = (domString);
  document.querySelector('#google-auth2').addEventListener('click', signMeOut);
};

export default logoutButton;
