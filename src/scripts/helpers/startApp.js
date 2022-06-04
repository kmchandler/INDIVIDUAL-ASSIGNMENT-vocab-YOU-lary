import logoutButton from '../components/logoutButton';
import domBuilder from '../../components/domBuilder';
import navBar from '../components/navBar';

const startApp = (user) => {
  domBuilder(user.uid); // BUILD THE DOM
  // domEvents(user.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(user.uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // navigationEvents(user.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // Put all cards on the DOM on App load
};

export default startApp;
