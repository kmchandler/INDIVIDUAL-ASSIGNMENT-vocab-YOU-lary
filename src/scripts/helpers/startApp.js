import domBuilder from './domBuilder';
import navBar from '../components/navBar';
import navEvents from './navEvents';
import formEvents from './formEvents';
import domEvents from './domEvents';
import { getEntries } from '../../api/entryData';
import { showEntries } from './showEntries';

const startApp = (user) => {
  domBuilder(user.userID);
  domEvents(user.userID);
  formEvents(user.userID);
  navBar();
  navEvents(user.userID);
  getEntries(user.userID).then((booksArray) => showEntries(booksArray));
};

export default startApp;
