import { deleteEntry, getEntries, getSingleEntry } from '../../api/entryData';
import newEntryForm from '../components/newEntryForm';
import { showEntries } from './showEntries';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('edit-entry')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleEntry(firebaseKey, uid).then((entryObj) => newEntryForm(entryObj));
    }

    if (e.target.id.includes('delete-entry-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');
        deleteEntry(firebaseKey, uid).then((newEntriesArray) => showEntries(newEntriesArray));
      }
    }
  });

  document.querySelector('#filterBtns').addEventListener('click', (e) => {
    getEntries(uid).then((entries) => {
      const filterText = e.target.id;
      if (filterText === 'allFilter') {
        showEntries(entries);
      } else {
        showEntries(entries.filter((entry) => entry.language_tech.toLowerCase() === filterText));
      }
    });
  });
};

export default domEvents;
