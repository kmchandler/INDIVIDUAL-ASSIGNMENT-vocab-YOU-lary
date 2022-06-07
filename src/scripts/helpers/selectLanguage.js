// import renderToDOM from './renderToDom';

// const selectLanguage = (uid, firebaseKey) => {
//   let domString = `<label for="author">Select a Language</label>
//     <select class="form-control" id="author_id" required>
//     <option value="">Select a Language</option>`;

//   getEntry(uid, firebaseKey).then((entriesArray) => {
//     entriesArray.forEach((entry) => {
//       domString += `
//           <option
//             value="${entry.firebaseKey}"
//             ${firebaseKey === entry.firebaseKey ? 'selected' : ''}>
//               ${entry.title}
//           </option>`;
//     });

//     domString += '</select>';

//     renderToDOM('#select-language', domString);
//   });
// };

// export default selectLanguage;
