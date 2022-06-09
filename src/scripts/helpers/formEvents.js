import { createEntries, updateEntry } from '../../api/entryData';
import { showEntries } from './showEntries';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    const [, firebaseKey] = e.target.id.split('--');
    const timeStamp = new Date();
    if (e.target.id.includes('submit-entry')) {
      const entryObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_tech: document.querySelector('#select-Language').value,
        timeSubmitted: timeStamp,
        firebaseKey,
        uid
      };
      createEntries(entryObject).then((entryArray) => {
        showEntries(entryArray);
      });
    }

    if (e.target.id.includes('update-entry')) {
      const entryObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_tech: document.querySelector('#select-language').value,
        timeSubmitted: timeStamp,
        firebaseKey,
        uid
      };

      updateEntry(entryObject).then((entryArray) => showEntries(entryArray));
    }
  });
};

export default formEvents;
