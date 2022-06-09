import domBuilder from './domBuilder';
import navBar from '../components/navBar';
import navEvents from './navEvents';
import formEvents from './formEvents';
import domEvents from './domEvents';
import { getEntries } from '../../api/entryData';
import { showEntries } from './showEntries';
// import filter from './filter';

const startApp = (user) => {
  domBuilder(user.uid);
  domEvents(user.uid);
  formEvents(user.uid);
  navBar();
  navEvents(user.uid);
  getEntries(user.uid).then((booksArray) => showEntries(booksArray));
};

export default startApp;
