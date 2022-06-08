import { createEntries, updateEntry } from '../../api/entryData';
import { showEntries } from './showEntries';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    const timeStamp = new Date();
    if (e.target.id.includes('submit-entry')) {
      const entryObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_tech: document.querySelector('#selectedLanguage').value,
        timeSubmitted: timeStamp,
      };
      createEntries(entryObject).then((entryArray) => showEntries(entryArray));
    }

    if (e.target.id.includes('update-entry')) {
      const [, firebaseKey] = e.target.id.split('--');
      const entryObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        language_tech: document.querySelector('#select-language').value,
        timeSubmitted: timeStamp,
        firebaseKey,
      };

      updateEntry(entryObject).then((entryArray) => showEntries(entryArray));
    }
  });
};

export default formEvents;
