// import renderToDOM from './renderToDom';

// const selectLanguage = (uid, authorId) => {
//   let domString = `<label for="author">Select an Author</label>
//     <select class="form-control" id="author_id" required>
//     <option value="">Select an Author</option>`;

//   getEntry(uid, authorId).then((authorsArray) => {
//     authorsArray.forEach((author) => {
//       domString += `
//           <option
//             value="${author.firebaseKey}"
//             ${authorId === author.firebaseKey ? 'selected' : ''}>
//               ${author.first_name} ${author.last_name}
//           </option>`;
//     });

//     domString += '</select>';

//     renderToDOM('#select-author', domString);
//   });
// };

// export default selectLanguage;
