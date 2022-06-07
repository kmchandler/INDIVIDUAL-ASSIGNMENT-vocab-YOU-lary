import newEntryForm from '../components/newEntryForm';

const navEvents = () => {
  document.querySelector('#navigation').addEventListener('click', (e) => {
    if (e.target.id.includes('new-entry-nav')) {
      newEntryForm();
    }
  });

  // Create an event listener for the entries
  // 1. When a user clicks the entries link, make a call to firebase to get all entries
  // 2. Convert the response to an array because that is what the function is expecting
  // 3. If the array is empty because there are no entries, make sure to use an empty function
  // document.querySelector('#all-entries-nav').addEventListener('click', () => {
  //   getEntries().then((entriesArray) => {
  //     if (entriesArray.length !== 0) {
  //       showEntries(entriesArray);
  //     } else {
  //       emptyEntries(entriesArray);
  //     }
  //   });
  // });
};

export default navEvents;
