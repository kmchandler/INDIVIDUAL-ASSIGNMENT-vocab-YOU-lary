import { createEntries, updateEntry } from '../../api/entryData';
import { showEntries } from './showEntries';

const formEvents = (userID) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    const [, firebaseKey] = e.target.id.split('--');
    const timeStamp = new Date();
    if (e.target.id.includes('submit-entry')) {
      const entryObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_tech: document.querySelector('#selectedLanguage').value,
        timeSubmitted: timeStamp,
        firebaseKey,
        userID
      };
      createEntries(entryObject).then((entryArray) => showEntries(entryArray));
    }

    if (e.target.id.includes('update-entry')) {
      const entryObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_tech: document.querySelector('#select-language').value,
        timeSubmitted: timeStamp,
        firebaseKey,
        userID
      };

      updateEntry(entryObject).then((entryArray) => showEntries(entryArray));
    }
  });
};

export default formEvents;
