import domBuilder from '../../components/domBuilder';
import navBar from '../components/navBar';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  // domEvents(user.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  // formEvents(user.uid); // ADD FORM EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  // navigationEvents(user.uid); // ATTACH THE EVENT LISTENERS TO THE NAVBAR

  // Put all cards on the DOM on App load
};

export default startApp;
