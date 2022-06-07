import clearDom from './clearDom';
import renderToDom from './renderToDom';

const showEntries = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
    <div class="card">
      <div class="card-body" style="height: 180px;">
        <h5 class="card-word">${item.title}</h5>
          <hr>
          <p class="card-definition">${item.definition}</p>
          <p class="card-language_tech">${item.language_tech}</p>
          <p class="card-timeSubmitted">${item.timeSubmitted}</p>
          <p class="card-userID">${item.userID}</p>
          <i id="edit-entry-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-entry-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
    </div>`;
  });
  renderToDom('#view', domString);
};

const emptyEntries = () => {
  const domString = '<h1>No Entries</h1>';
  renderToDom('#view', domString);
};

export { emptyEntries, showEntries };
