import newEntryForm from '../components/newEntryForm';
import { getEntries } from '../../api/entryData';
import { showEntries, emptyEntries } from './showEntries';

const navEvents = (uid) => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('new-entry-nav')) {
      newEntryForm(uid);
    }
  });

  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('all-entries-nav')) {
      getEntries(uid).then((entriesArray) => {
        if (entriesArray.length !== 0) {
          showEntries(entriesArray);
        } else {
          emptyEntries(entriesArray);
        }
      });
    }
  });
};

export default navEvents;
