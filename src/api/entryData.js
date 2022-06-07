import axios from 'axios';

const dbUrl = 'https://kc-vocab-you-lary-default-rtdb.firebaseio.com';

const getEntries = (userID) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab.json?orderBy="userID"&eyalTo="${userID}")`)
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
      const payload = { firebaseKey: response.data.firebaseKey };
      axios.patch(`${dbUrl}/vocab/${response.data.firebaseKey}.json`, payload)
        .then(() => {
          getEntries(entryObj.userID).then(resolve);
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
      getEntries(firebaseKey.userID).then(resolve);
    })
    .catch(reject);
});

const updateEntry = (entryObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocab/${entryObj.firebaseKey}.json`, entryObj)
    .then(() => {
      getEntries(entryObj.userID).then(resolve);
    })
    .catch(reject);
});

export {
  getEntries, createEntries, getSingleEntry, deleteEntry, updateEntry
};
