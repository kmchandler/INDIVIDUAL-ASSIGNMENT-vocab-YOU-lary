import domBuilder from './domBuilder';
import navBar from '../components/navBar';
import navEvents from './navEvents';
import formEvents from './formEvents';
import domEvents from './domEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  formEvents();
  navBar();
  navEvents();
  // Put all cards on the DOM on App load
};

export default startApp;
