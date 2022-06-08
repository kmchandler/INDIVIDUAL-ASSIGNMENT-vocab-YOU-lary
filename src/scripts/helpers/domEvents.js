import { deleteEntry, getSingleEntry } from '../../api/entryData';
import newEntryForm from '../components/newEntryForm';
import { showEntries } from './showEntries';

const domEvents = (userID) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-entry')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleEntry(firebaseKey, userID).then((entryObj) => newEntryForm(entryObj));
    }

    if (e.target.id.includes('delete-entry-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteEntry(firebaseKey, userID).then((newEntriesArray) => showEntries(newEntriesArray));
      }
    }
  });
};

export default domEvents;
