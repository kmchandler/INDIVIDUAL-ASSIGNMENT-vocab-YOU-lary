import firebase from 'firebase/app';
import 'firebase/auth';
import clearDom from '../helpers/clearDom';
import clearSortBtns from '../helpers/clearSortBtns';

const signMeOut = () => {
  firebase.auth().signOut();
  clearDom();
  clearSortBtns();
};

const logoutButton = () => {
  const domString = '<a id="google-auth">Log Out</a>';
  document.querySelector('#logout-nav').innerHTML = (domString);
  document.querySelector('#google-auth').addEventListener('click', signMeOut);
};

export default logoutButton;
