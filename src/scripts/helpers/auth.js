import firebase from 'firebase/app';
import 'firebase/auth';
import startApp from './startApp';
import loginButton from '../components/loginButton';
import firebaseConfig from '../../api/apiKeys';
import clearNav from './clearNav';
import clearBtn from './clearBtn';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in do something...
      startApp();
      clearBtn();
    } else {
      // person is NOT logged in
      loginButton();
      clearNav();
    }
  });
};

export default checkLoginStatus;
