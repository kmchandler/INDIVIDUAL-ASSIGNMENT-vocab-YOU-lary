// USE WITH FIREBASE AUTH
// import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import checkLoginStatus from './helpers/auth';

const startApp = () => {
  document.querySelector('#app').innerHTML = `
    <h1>Welcome to vocab-YOU-lary!</h1>
  `;
  // USE WITH FIREBASE AUTH
  checkLoginStatus();
};

startApp();

export default startApp;
