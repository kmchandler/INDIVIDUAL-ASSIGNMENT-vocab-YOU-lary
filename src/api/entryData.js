import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getEntries = () => new Promise((resolve, reject) => {
  // axios.get(`${dbUrl}/vocab.json?orderBy="userID"&eyalTo="${userID}")`)
  axios.get(`${dbUrl}/vocab.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createEntries = (entryObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocab.json`, entryObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vocab/${response.data.name}.json`, payload)
        .then(() => {
          getEntries(entryObj).then(resolve);
        });
    })
    .catch(reject);
});

const getSingleEntry = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const deleteEntry = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then(() => {
      getEntries(firebaseKey).then(resolve);
    })
    .catch(reject);
});

const updateEntry = (entryObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocab/${entryObj.firebaseKey}.json`, entryObj)
    .then(() => {
      getEntries(entryObj).then(resolve);
    })
    .catch(reject);
});

export {
  getEntries, createEntries, getSingleEntry, deleteEntry, updateEntry
};
