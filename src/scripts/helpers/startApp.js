import domBuilder from './domBuilder';
import navBar from '../components/navBar';
import navEvents from './navEvents';
import formEvents from './formEvents';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  // domEvents(user.uid); // ADD THE EVENT LISTENTERS TO THE DOM
  formEvents();
  navBar();
  navEvents();
  // Put all cards on the DOM on App load
};

export default startApp;
